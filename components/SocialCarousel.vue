<template>
  <div class="social-carousel">
    <v-expand-transition>
      <div v-if="renderCarousel">
        <div id="flockler-embed-17111be1f7103d16a5baeb89dac8ee91" />
        <script src="https://flockler.embed.codes/LrD78j" async />
      </div>
      <p
        v-if="!renderCarousel"
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
  name: 'SocialCarousel',
  props: {
    renderCarousel: {
      type: Boolean,
      default: false
    }
  }
}
</script>
