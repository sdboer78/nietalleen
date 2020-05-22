<script>
import { slugify } from '~/utils/slugify'

export default {
  computed: {
    cityName () {
      const slugFromUrl = slugify(this.$route.params.city)
      const matchingCities = this.$store.state.cities.list.filter(city => slugify(city).includes(slugFromUrl))
      return matchingCities[0]
    },
    cityNameSlug () {
      return slugify(this.cityName)
    }
  }
}
</script>
