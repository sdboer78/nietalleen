<template>
  <div class="map accent">
    <v-expand-transition>
      <div v-if="renderMap">
        <iframe
          class="map__iframe"
          src="https://www.google.com/maps/d/embed?mid=1eDxpR0IUErARS5g1slGMmBlHpyDrPEbl"
        />
        <p class="caption text-center pa-3 ma-0">
          Momenteel is het door technische uitdagingen nog niet mogelijk om alle initiatieven op de kaart te tonen. Hier wordt aan gewerkt zodat we zo snel mogelijk alle mooie initiatieven kunnen weergeven.
        </p>
      </div>
      <p
        v-if="!renderMap"
        class="caption text-center"
      >
        Pas je <a href="https://cookies.nietalleen.nl/sites/EO/nietalleen.nl/settings.html" class="npo_cc_settings_link" rel="noreferrer">cookie instellingen</a>
        aan om deze kaart te kunnen zien.
      </p>
    </v-expand-transition>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  text-align: center;

  &__iframe {
    border: 0;
    height: 50vh;
    width: 100%;
  }
}
</style>
