<template>
  <v-app>
    <v-app-bar
      app
      style="background: linear-gradient(135deg, #C63866, #FE676E, #FD8F52);"
      fixed
    >
      <nuxt-link to="/">
        <v-img
          :src="require('@/assets/logo-niet-alleen.svg')"
          max-width="160px"
          position="center left"
          contain
        />
      </nuxt-link>
      <v-spacer />
      <v-btn href="/over" icon color="white">
        <v-icon>mdi-information</v-icon>
      </v-btn>
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
    <v-footer color="white">
      <a href="https://www.eo.nl/privacy" class="caption primary--text">Privacyverlaring</a>
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
    font-size: 17px;
    letter-spacing: 0;
    text-transform: none;

    &--active {
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
