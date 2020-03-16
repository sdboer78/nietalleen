<template>
  <v-app>
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
        { id: 2, name: 'Ik kan hulp bieden', route: '/hulp-bieden' }
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
