<template>
  <div
    class="hero-image"
    :style="{maxWidth: size}"
  >
    <div class="hero-image__container">
      <v-img
        class="hero-image__figure"
        aspect-ratio="1.75"
        :src="src"
        cover
      >
        <div class="hero-image__content">
          <slot />
        </div>
      </v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  props: {
    src: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: '400px'
    }
  }
}
</script>

<style type="text/css" lang="scss">
$radius: 20px;
$offset: 12px;

.hero-image {
  width: 100%;

  &__container {
    padding: $offset;
    overflow: hidden;
    position: relative;

    &:before {
      content: '';
      border-radius: $radius;
      background: #E5E5EA;
      height: calc(100% - #{$offset} * 4);
      left: 0;
      top: 0;
      position: absolute;
      width: calc(100% - #{$offset} * 2);
      z-index: 0;
    }

    &:after {
      content: '';
      border-radius: $radius;
      background: linear-gradient(135deg, #c63866, #fe676e, #fd8f52);
      height: calc(100% - #{$offset} * 4.5);
      bottom: 0;
      right: 0;
      position: absolute;
      width: calc(100% - #{$offset} * 3.5);
      z-index: 0;
    }
  }

  &__figure {
    border-radius: $radius;
    position: relative;
    z-index: 1;
  }

  &__content {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
}
</style>
