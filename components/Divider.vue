<template>
  <div class="divider">
    <p
      v-if="label"
      class="divider__content d-sm-block"
    >
      {{ label }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style type="text/css" lang="scss">
  .divider {
    align-items: center;
    display: flex;
    justify-content: stretch;
    flex-direction: row nowrap;

    &:before,
    &:after {
      background-color: #d1d1da;
      content: '';
      flex-basis: auto;
      height: 3px;
      width: auto;
      flex-grow: 1;
    }

    &__content {
      color: #8F9094;
      font-weight: bold;
      padding: 1em;
    }
  }
</style>
