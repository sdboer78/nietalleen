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
    <v-select
      ref="shadowField"
      v-model="localValue"
      class="d-none"
      v-bind="$attrs"
      multiple
      v-on="listeners"
    />
    <v-chip-group
      v-if="$attrs.items"
      column
      multiple
    >
      <v-chip
        v-for="item in $attrs.items"
        :key="item"
        :input-value="localValue.includes(item)"
        :color="validationState == 'error' ? 'error' : (localValue.includes(item) ? 'primary' : ($attrs.color || ''))"
        filter
        outlined
        label
        large
        @click="toggleItem(item)"
      >
        {{ item }}
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
    }
  },
  data: () => {
    return {
      localValue: [],
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
    localValue () {
      this.$emit('input', this.localValue)
    }
  },
  mounted () {
    this.$watch(
      () => {
        // watch if the validation of the shadow field changes
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
            this.messages.push(rule(this.localValue))
          })
        }
      }
    )
  },
  methods: {
    toggleItem (key) {
      if (!this.localValue.includes(key)) {
        this.localValue.push(key)
      } else {
        this.localValue.splice(this.localValue.indexOf(key), 1)
        this.localValue = [...this.localValue]
      }
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
