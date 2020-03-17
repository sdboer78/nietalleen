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
        >
          <router-link
            v-slot="{ href }"
            to="/"
          >
            <v-tab key="0" exact :to="href" style="flex-basis:0;">
              <v-icon>mdi-information</v-icon>
            </v-tab>
          </router-link>
          <router-link
            v-slot="{ href }"
            to="/hulp-vragen"
          >
            <v-tab key="1" exact :to="href">
              Ik zoek hulp
            </v-tab>
          </router-link>
          <router-link
            v-slot="{ href }"
            to="/hulp-bieden"
          >
            <v-tab key="2" exact :to="href">
              Wij kunnen hulp bieden
            </v-tab>
          </router-link>
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
    <v-footer color="primary">
      <a href="https://www.eo.nl/privacy" class="caption white--text">Privacyverklaring</a>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      activeTab: '/'
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
      color: #000000 !important;
      font-weight: bold;
    }
  }
  .v-slide-group__next--disabled,
  .v-slide-group__prev--disabled {
    display: none !important;
  }
  .v-slide-group__content {
    width: 100%;
  }
</style>
