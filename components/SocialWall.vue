<template>
  <div class="social-wall">
    <v-expand-transition>
      <div v-if="renderWall">
        <div id="flockler-embed-17111acdf600a77f7984f5072fd98ca3" />
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
      if (this.renderWall) {
        this.externalScript = document.createElement('script')
        this.externalScript.setAttribute('src', 'https://flockler.embed.codes/Lm4wY2')
        this.externalScript.async = true
        this.$el.appendChild(this.externalScript)
      }
    }
  }
}
</script>
