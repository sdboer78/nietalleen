<template>
  <div
    :class="classes"
  >
    <p
      v-if="$attrs.label"
      class="select-pills__label"
    >
      {{ $attrs.label }}
      <span
        v-if="suffix"
        class="select-pills__suffix"
      >
        {{ suffix }}
      </span>
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
        @keypress.space.prevent="toggleItem(item)"
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
        @keypress.space.prevent="toggleItemAndFocus(customItemValue)"
      >
        <v-slide-x-transition hide-on-leave>
          <div v-if="isSelected(customItemValue)" @click.stop="">
            <v-text-field
              ref="customItemField"
              v-model="customItemModel"
              class="custom-item-field"
              filled
              rounded
              dense
              hide-details
              @keypress.space.stop=""
              @blur="setCustomItemValue"
              @click.stop="setCustomItemValue"
              @keyup.enter="blurCustomItemField"
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
    },
    suffix: {
      type: String,
      default: null
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
      this.isSelected(item) ? this.deselectItem(item) : this.selectItem(item)
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
      const newValue = e.target.value || this.customItemModel
      if (newValue !== '' && newValue != null) {
        this.customItemValue = newValue
        this.selectItem(newValue)
        this.deselectItem(oldValue)
      } else {
        this.deselectItem(oldValue)
      }
    },
    blurCustomItemField (e) {
      this.$refs.customItemField.blur()
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  .select-pills {
    &__label {
      align-items: flex-start;
      display: flex;
      margin-bottom: 8px;
    }

    &__suffix {
      margin-left: auto;
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

      &--active,
      &.v-chip--outlined.v-chip--active {
        background-color: #6A007D !important;
        border-width: 0;
      }

      &--label {
        border-radius: 10px !important;
      }
    }
  }

  ::v-deep .custom-item-field {
    max-width: calc(100vw - 144px);
    width: 280px;

    & > .v-input__control > .v-input__slot {
      background: transparent;
      border-radius: 4px;
      font-style: italic;
      padding-left: 10px;
      padding-right: 0;

      input {
        caret-color: #FFFFFF;
        color: #FFFFFF;
      }

      &:focus,
      &:focus-within {
        background: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);

        input {
          caret-color: #000000;
          color: #000000;
        }
      }

      .v-chip:hover &,
      .v-chip:active & {
        background: transparent;

        &:hover,
        &:active {
          background: transparent !important;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3);
        }

        &:focus,
        &:focus-within {
          background: rgba(255, 255, 255, 1) !important;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  .v-chip.v-chip--clickable {
    &:hover,
    &:focus {
      &:before {
        opacity: 0.08;
      }
    }

    &.v-chip--active {
      &:hover,
      &:focus {
        &:before {
          opacity: 0.15;
        }
      }
    }
  }
</style>
