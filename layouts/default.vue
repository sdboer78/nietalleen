<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevation="1"
      fixed
    >
      <v-tabs
        v-model="activeTab"
        color="primary"
        slider-size="3"
        fixed-tabs
      >
        <v-tab key="1" to="/" exact>
          Ik zoek hulp
        </v-tab>
        <v-tab key="2" to="/hulp-bieden" exact>
          Wij kunnen hulp bieden
        </v-tab>
        <v-tab key="3" to="/meer-info" exact>
          <v-icon>mdi-information</v-icon>
        </v-tab>
      </v-tabs>
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
</style>
