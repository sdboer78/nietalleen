<template>
  <div class="map">
    <iframe
      :class="{
        'map__iframe': true,
        'hidden': !renderMap
      }"
      src="https://www.google.com/maps/d/embed?mid=1eDxpR0IUErARS5g1slGMmBlHpyDrPEbl"
    />
    <p
      v-if="!renderMap"
      class="caption"
    >
      Pas je <a href="https://cookies.nietalleen.nl/sites/EO/nietalleen.nl/settings.html" class="npo_cc_settings_link" rel="noreferrer">cookie instellingen</a>
      aan om deze kaart te kunnen zien.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelpersMap',
  props: {
    renderMap: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style type="text/css" lang="scss">
.map {
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  text-align: center;

  &__iframe {
    border: 0;
    height: 80vh;
    transition: height 1s cubic-bezier(0.4, 0.0, 0.2, 1);
    width: 100%;

    &.hidden {
      height: 0;
    }
  }
}
</style>
