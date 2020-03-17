<template>
  <v-app>
    <v-app-bar
      app
      color="white"
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
      <v-btn href="/over" icon color="primary">
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-btn href="#" target="_new" color="primary" class="ml-2">
        Hulp bieden
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
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
