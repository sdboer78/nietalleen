<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      fixed
    >
      <v-tabs
        v-model="activeTab"
        color="primary"
        grow
      >
        <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
          {{ tab.name }}
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
      activeTab: '/',
      tabs: [
        { id: 1, name: 'Ik zoek hulp', route: '/' },
        { id: 2, name: 'Wij kunnen hulp bieden', route: '/hulp-bieden' },
        { id: 3, name: '<v-icon>mdi-phone</v-icon>', route: '/meer-info' }
      ]
    }
  }
}
</script>

<style type="text/css" lang="scss">
  .v-tab {
    text-transform: none;
    letter-spacing: 0;
  }
</style>
