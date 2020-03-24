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
        <v-btn
          flat
          text
          icon
          color="black"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-tabs
          v-model="activeTab"
          color="primary"
          slider-size="4"
          grow
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
  data () {
    return {
      activeTab: null,
      baseUrl: null
    }
  },
  computed: {
    currentPageHasTab () {
      return this.$nuxt.$route.path === this.activeTab
    }
  },
  mounted () {
    if (window) {
      window.addEventListener('CCM_done', this.getCookiePermissions, false)
    }
  },
  methods: {
    getCookiePermissions () {
      const { ccm } = window

      if (ccm) {
        const permissions = ccm.get_permissions()
        permissions.map((permission) => {
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
  .v-tabs {
    max-width: 720px;

    @media (min-width: 720px) {
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }
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
