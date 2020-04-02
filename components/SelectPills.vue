<template>
  <div
    :class="classes"
  >
    <p
      v-if="$attrs.label"
      class="select-pills__label"
    >
      {{ $attrs.label }}
    </p>
    <v-combobox
      ref="shadowField"
      v-model="selectedItems"
      v-bind="$attrs"
      class="d-none"
      multiple
      v-on="listeners"
    />
    <v-chip-group
      v-model="selectedItems"
      column
      multiple
    >
      <v-chip
        v-for="item in $attrs.items"
        :key="item"
        :value="item"
        :input-value="isSelected(item)"
        :color="validationState == 'error' ? 'error' : (isSelected(item) ? ($attrs.color || 'primary') : '')"
        filter
        outlined
        label
        large
        @click="toggleItem(item)"
      >
        {{ item }}
      </v-chip>
      <v-chip
        v-if="customItem"
        :key="customItemValue"
        :value="customItemValue"
        :input-value="isSelected(customItemValue)"
        :color="validationState == 'error' ? 'error' : (isSelected(customItemValue) ? ($attrs.color || 'primary') : '')"
        :close="isSelected(customItemValue)"
        close-icon="mdi-close"
        filter
        outlined
        label
        large
        @click:close="deselectItem(customItemValue)"
        @click="toggleItemAndFocus(customItemValue)"
      >
        <v-slide-x-transition hide-on-leave>
          <div v-if="isSelected(customItemValue)" @click.stop="">
            <v-text-field
              ref="customItemField"
              v-model="customItemModel"
              filled
              rounded
              dense
              hide-details
              @blur="setCustomItemValue"
              @click.stop="setCustomItemValue"
            />
          </div>
          <span v-if="!isSelected(customItemValue)">
            {{ customItemLabel }}
          </span>
        </v-slide-x-transition>
      </v-chip>
    </v-chip-group>
    <v-messages
      v-model="messages"
      color="error"
      role="alert"
    />
  </div>
</template>

<script>
export default {
  name: 'SelectPills',
  inheritAttrs: false,
  props: {
    value: {
      type: Array,
      default: () => []
    },
    customItem: {
      type: Boolean,
      default: false
    },
    customItemLabel: {
      type: String,
      default: 'other...'
    }
  },
  data: () => {
    return {
      selectedItems: [],
      customItemModel: '',
      customItemValue: '',
      validationState: '',
      messages: []
    }
  },
  computed: {
    classes () {
      return {
        ...this.$attrs.class,
        'select-pills': true,
        'select-pills--has-state': this.validationState !== '',
        [`${this.validationState}--text`]: true
      }
    },
    listeners () {
      return {
        ...this.$listeners
      }
    }
  },
  watch: {
    // watch if the items given from the parent change
    value: {
      handler (value) {
        this.selectedItems = value
      },
      immediate: true
    },
    // let the parent know the selected items have changed
    selectedItems () {
      this.$emit('input', this.selectedItems)
    }
  },
  created () {
    // set default value for custom field
    this.customItemValue = this.customItemLabel
    this.customItemModel = this.customItemValue
  },
  mounted () {
    // watch if the validation of the shadow field changes
    this.$watch(
      () => {
        return this.$refs.shadowField.validationState
      },
      (state) => {
        // set the validation state
        this.validationState = state
        // set the error messages
        if (state !== 'error') {
          this.messages = []
        } else if (this.$attrs.rules.length > 0) {
          this.$attrs.rules.forEach((rule) => {
            this.messages.push(rule(this.selectedItems))
          })
        }
      }
    )
  },
  methods: {
    isSelected (item) {
      return this.selectedItems.includes(item)
    },
    selectItem (item) {
      this.selectedItems.push(item)
    },
    deselectItem (item) {
      this.selectedItems.splice(this.selectedItems.indexOf(item), 1)
      this.selectedItems = [...this.selectedItems]
    },
    toggleItem (item) {
      if (!this.isSelected(item)) {
        this.selectItem(item)
      } else {
        this.deselectItem(item)
      }
    },
    toggleItemAndFocus (item) {
      this.toggleItem(item)
      this.$nextTick(() => {
        if (this.isSelected(item) && this.$refs.customItemField) {
          this.$refs.customItemField.focus()
        }
      })
    },
    setCustomItemValue (e) {
      // Replace the item in de selectedItems array
      const oldValue = this.customItemValue
      this.customItemValue = e.target.value || this.customItemModel
      this.selectItem(this.customItemValue)
      this.deselectItem(oldValue)
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  .select-pills {
    &__label {
      margin-bottom: 8px;
    }

    &--has-state.error--text {
      .select-pills__label {
        color: #dd2c00;
        -webkit-animation: v-shake 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
        animation: v-shake 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
      }
    }

    .v-chip {
      padding-left: 10px;
      padding-right: 10px;

      &--active {
        border-width: 2px;
      }
    }
  }
</style>
