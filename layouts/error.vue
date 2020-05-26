<template>
  <v-app
    v-show="!isFindingARedirect"
    dark
    class="pa-5"
  >
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home
    </NuxtLink>
  </v-app>
</template>

<script>
import { slugify } from '~/utils/slugify'

export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      isFindingARedirect: false,
      pageNotFound: '404. Pagina niet gevonden.',
      otherError: 'Er heeft zich een fout voorgedaan.'
    }
  },
  created () {
    this.redirectToCity()
  },
  methods: {
    /**
     * Get the param and see if it is a city. Then redirect to that page with the correct query
     */
    async redirectToCity () {
      if (this.$route.path) {
        this.isFindingARedirect = true
        const path = this.$route.path.replace(/\/$/, '').split('/')
        const pageFromPath = path[path.length - 2].replace(/\//g, '').toString()
        const slugFromPath = slugify(path[path.length - 1].replace(/\//g, '').toString())

        // make sure we have the cities available in the store
        await this.$store.dispatch('cities/fetchCities')

        // see if we know a city that includes the value the user entered into the url
        const citySlugs = this.$store.state.cities.list.map(city => slugify(city))
        const matchingCities = citySlugs.filter(citySlug => citySlug.includes(slugFromPath))

        // a city has been found. Redirect to the page
        if (matchingCities.length !== 0) {
          this.$router.push({
            name: pageFromPath || 'index',
            query: { plaats: matchingCities[0] }
          })
        } else {
          this.isFindingARedirect = false
        }
      }
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
