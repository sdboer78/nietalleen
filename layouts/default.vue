<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevation="1"
      fixed
    >
      <v-btn
        text
        icon
        color="black"
        @click.stop="showMenu = !showMenu"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-tabs
        v-model="activeTabItem"
        color="primary"
        slider-size="3"
        grow
        :class="{'has-no-active': !currentPageHasTab}"
      >
        <v-tab
          v-for="item in tabItems"
          :key="item.to"
          :to="item.to"
          exact
        >
          {{ item.text }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer color="primary pa-0">
      <footer-content />
    </v-footer>
    <v-navigation-drawer
      v-model="showMenu"
      fixed
      temporary
      width="420"
    >
      <div class="drawer-content">
        <v-btn
          text
          icon
          color="black"
          class="ma-3"
          @click.stop="showMenu = !showMenu"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="my-auto">
          <v-list
            tile
            flat
            class="text-center"
          >
            <v-list-item-group
              v-model="activeNavItem"
              active-class="primary--text"
            >
              <v-list-item
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                exact
              >
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="d-flex align-center justify-center my-3">
            <v-btn
              text
              icon
              color="black"
              class="ma-3"
              target="_new"
              href="https://www.facebook.com/nietalleennl/"
              large
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              text
              icon
              color="black"
              class="ma-3"
              target="_new"
              href="https://twitter.com/nietalleen_nl"
              large
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import FooterContent from '~/components/FooterContent.vue'

export default {
  components: { FooterContent },
  data () {
    return {
      showMenu: false,
      baseUrl: null,
      activeNavItem: null,
      navItems: [
        { text: 'Ik zoek hulp', to: '/' },
        { text: 'Wij kunnen hulp bieden', to: '/hulp-bieden' },
        { text: 'Verhalen', to: '/verhalen' },
        { text: 'TV programma', to: '/tv-programma' },
        { text: 'Veelgestelde vragen', to: '/veelgestelde-vragen' },
        { text: 'Doneren', to: '/doneren' },
        { text: 'Over ons', to: '/over' }
      ],
      activeTabItem: null,
      tabItems: [
        { text: 'Ik zoek hulp', to: '/' },
        { text: 'Wij kunnen hulp bieden', to: '/hulp-bieden' }
      ]
    }
  },
  computed: {
    currentPageHasTab () {
      return this.$nuxt.$route.path === this.activeTabItem
    }
  },
  mounted () {
    if (window) {
      const { ccm } = window

      if ((typeof ccm !== 'undefined') && (ccm.isDone() === true)) {
        this.getCookiePermissions()
      } else {
        window.addEventListener('CCM_done', this.getCookiePermissions, false)
      }
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

<style type="text/css" lang="scss" scoped>
  .v-tabs {
    font-weight: bold;
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

  .drawer-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    min-height: 100vh;
  }

  .v-list-item {
    font-family: "Bellota", "Century Gothic", "Avenir", sans-serif !important;
    font-weight: bold;

    &--active {
      .v-list-item__title {
        box-shadow: 0 3px 0 #c63866;
      }
    }

    &__title {
      box-shadow: none;
      flex-basis: auto;
      flex-grow: 0;
      font-size: 22px;
      margin: 0.6em auto !important;
      padding-bottom: 0.15em;
      padding-top: 0.15em;
      transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);

      &:hover,
      &:focus,
      &:active {
        box-shadow: 0 3px 0 currentColor;
      }
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
