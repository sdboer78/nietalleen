<template>
  <div class="divider">
    <p class="divider__content d-sm-block">
      of
    </p>
  </div>
</template>

<script>
export default {
  name: 'Divider'
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
