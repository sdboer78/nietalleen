<template>
  <div>
    <section class="pa-8 text-center">
      <v-layout
        justify-center
        align-center
      >
        <v-flex
          xs12
          sm8
          md6
          lg4
          xl3
        >
          <h1 class="display-1 mb-2">
            #Nietalleen verhalen
          </h1>
          <p class="font-weight-bold mb-8">
            Inspireer elkaar. Deel jouw verhaal met #Nietalleen op Twitter, Facebook of Instagram.
          </p>
        </v-flex>
      </v-layout>
      <v-layout
        justify-center
        align-center
      >
        <v-flex
          xs12
          sm12
          md12
          lg12
          xl12
        >
          <social-wall
            :render-wall="allowSocialwallRender"
            class="mx-n2"
          />
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

<style type="text/css" lang="scss">
  .flockler-btn-load-more {
    background-color: #C63866 !important;
    border-radius: 10px;
    font-family: "Nunito Sans", "Helvetica Neue", Arial, sans-serif !important;
    font-size: 20px;
    line-height: 1;
    padding: 6px 32px;
  }
</style>
