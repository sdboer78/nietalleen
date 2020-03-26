<template>
  <div class="social-wall">
    <v-expand-transition>
      <div v-if="renderWall">
        <div id="flockler-embed-17111acdf600a77f7984f5072fd98ca3" />
        <script src="https://flockler.embed.codes/Lm4wY2" async />
      </div>
      <p
        v-if="!renderWall"
        class="caption text-center"
      >
        Pas je <a href="https://cookies.nietalleen.nl/sites/EO/nietalleen.nl/settings.html" class="npo_cc_settings_link" rel="noreferrer">cookie instellingen</a>
        aan om deze social posts te kunnen zien.
      </p>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: 'SocialWall',
  props: {
    renderWall: {
      type: Boolean,
      default: false
    }
  }
}
</script>
