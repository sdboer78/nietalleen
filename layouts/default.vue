<template>
  <v-app>
    <v-app-bar
      app
      fixed
    >
      <v-app-bar
        app
        color="white"
        elevation="0"
        fixed
      >
        <v-tabs
          v-model="activeTab"
          color="primary"
          slider-size="4"
          fixed-tabs
          :class="{'has-no-active': !currentPageHasTab}"
        >
          <v-tab key="1" exact to="/">
            Ik zoek hulp
          </v-tab>
          <v-tab key="2" exact to="/hulp-bieden">
            Wij kunnen hulp bieden
          </v-tab>
        </v-tabs>
      </v-app-bar>
      <v-spacer />
      <v-btn
        href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
        target="_new"
        color="white"
        class="primary--text ml-2"
      >
        Hulp bieden
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer color="primary py-5">
      <footer-content />
    </v-footer>
  </v-app>
</template>

<script>
import FooterContent from '~/components/FooterContent.vue'

export default {
  components: { FooterContent },
  head () {
    // global metadata
    return {
      meta: [
        {
          hid: "og-type",
          property: "og:type",
          content: "website"
        },
        {
          hid: "og-title",
          property: "og:site_name",
          content: "#Nietalleen"
        },
        {
          hid: "og-url",
          property: "og:url",
          content: this.baseUrl + this.$nuxt.$route.fullPath
        },
        {
          hid: "og-image",
          property: "og:image",
          content: this.baseUrl + '/og-image-nietalleen.jpg'
        },
        {
          hid: "og-description",
          property: "og:description",
          content:
            "Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #Nietalleen."
        }
      ]
    }
  },
  data () {
    return {
      activeTab: null,
      baseUrl: null,
    }
  },
  computed: {
    currentPageHasTab () {
      return this.$nuxt.$route.path === this.activeTab
    }
  },
  created () {
    // set default baseUrl when window is not available (yet)
    if (process.env.NODE_ENV === 'production') {
      this.baseUrl = 'https://www.nietalleen.nl'
    } else {
      this.baseUrl = 'https://develop.nietalleen.nl'
    }
  },
  mounted () {
    if (window) {
      window.addEventListener('CCM_done', this.getCookiePermissions, false)
      // overwrite baseUrl when window is available
      this.baseUrl = window.location.protocol + '//' + window.location.host
    }
  },
  methods: {
    getCookiePermissions () {
      const { ccm } = window

      if (ccm) {
        const permissions = ccm.get_permissions()
        permissions.map(permission => {
          this.addCookiePermission(permission)
        })
      }
    },
    addCookiePermission (permission) {
      this.$store.commit('cookie-permissions/add', permission)
    }
  }
}
</script>

<style type="text/css" lang="scss">
  .v-tab {
    font-family: "Bellota", "Century Gothic", "Avenir", sans-serif !important;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 1.2;
    text-transform: none;

    &--active {
      font-weight: bold;
    }
  }
  .theme--light.v-tabs .v-tab--active:hover::before,
  .theme--light.v-tabs .v-tab--active::before {
    opacity: 0;
  }
  .v-slide-group__next--disabled,
  .v-slide-group__prev--disabled {
    display: none !important;
  }
  .v-slide-group__content {
    width: 100%;
  }

  .has-no-active {
    .v-tabs-slider-wrapper {
      opacity: 0;
    }
  }
</style>
