import { slugify } from '~/utils/slugify'

export default {
  computed: {
    cityName () {
      const slugFromUrl = slugify(this.$route.query.plaats)
      const matchingCities = this.$store.state.cities.list.filter(city => slugify(city).includes(slugFromUrl))
      return matchingCities[0]
    },
    cityNameSlug () {
      return slugify(this.cityName)
    }
  },
  async created () {
    // make sure we have the cities available in the store
    await this.$store.dispatch('cities/fetchCities')
  }
}
