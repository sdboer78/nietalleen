<template>
  <div class="social-carousel">
    <v-expand-transition>
      <div v-if="renderCarousel">
        <div id="flockler-embed-17111be1f7103d16a5baeb89dac8ee91" />
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
  },
  data () {
    return {
      externalScript: null
    }
  },
  mounted () {
    this.addExternalScript()
  },
  beforeUpdate () {
    this.addExternalScript()
  },
  methods: {
    addExternalScript () {
      if (this.renderCarousel) {
        this.externalScript = document.createElement('script')
        this.externalScript.setAttribute('src', 'https://flockler.embed.codes/LrD78j')
        this.externalScript.async = true
        this.$el.appendChild(this.externalScript)
      }
    }
  }
}
</script>

<style type="text/css" lang="scss">
  .flockler-carousel_v2-item__text__content a {
    color: #FFFFFF !important;
  }
  .flockler-carousel_v2-item__media + .flockler-carousel_v2-item__text {
    background-color: rgba(0, 0, 0, 0.75) !important;
  }
</style>
