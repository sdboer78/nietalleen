<template>
  <div>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-8"
      >
        <v-flex
          xs12
          sm8
          md6
          lg4
          xl3
          class="pb-12"
        >
          <h1 class="display-1 mb-0">
            #Nietalleen verhalen
          </h1>
          <p class="font-weight-bold">
            Inspireer elkaar. Deel jouw verhaal met #Nietalleen op Twitter, Facebook of Instagram.
          </p>
          <social-wall :render-wall="allowSocialwallRender" />
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
import SocialWall from '~/components/SocialWall.vue'

export default {
  components: {
    SocialWall
  },
  computed: {
    cookiePermissions () {
      return this.$store.state['cookie-permissions'].list
    },
    allowSocialwallRender () {
      return this.cookiePermissions.findIndex(cat => cat === 'social') > -1
    }
  },
  head () {
    // page specific metadata
    return {
      title: 'Verhalen',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: '#Nietalleen - Verhalen'
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: process.env.URL + this.$route.path
        }
      ]
    }
  }
}
</script>
