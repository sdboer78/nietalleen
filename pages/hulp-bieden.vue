<template>
  <div>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-8 text-center"
      >
        <v-flex xs12 sm8 md5 lg4 xl3>
          <hero-image
            :src="require('@/assets/love-your-neighbour.jpg')"
            size="400px"
            class="mx-auto mb-8"
          >
            <v-img
              :src="require('@/assets/logo-niet-alleen.svg')"
              max-width="200px"
              aspect-ratio="5"
              position="center center"
              contain
            />
          </hero-image>
          <h1 class="display-1">
            Zo werkt het
          </h1>
          <p>
            <span class="d--block font-weight-bold primary--text">1.</span>
            <br>Meld je hulpinitiatief of organisatie aan via dit formulier
            <br>
          </p>
          <p>
            <span class="d--block font-weight-bold primary--text">2.</span>
            <br>Alle initiatieven worden verzameld op plaatselijk niveau en aan elkaar gekoppeld.
            <br>
          </p>
          <p>
            <span class="d--block font-weight-bold primary--text">3.</span>
            <br>Wij zorgen ervoor dat de binnengekomen hulpvragen bij de lokale kerken en organisaties wordt neergelegd. Zij overleggen samen wie de hulpvraag oppakt.
          </p>
          <h2 class="mt-12">
            Meld je organisatie aan
          </h2>
          <v-btn
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
            target="_new"
            color="primary"
            x-large
          >
            aanmelden
          </v-btn>
          <p class="caption font-weight-bold mt-5">
            Als je vragen hebt of meer wilt weten, mail dan naar <a href="mailto:info@nietalleen.nl">info@nietalleen.nl</a>.
            Bellen kan ook naar het algemene nummer <a href="tel:0800 1322">0800 1322</a>.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout
        justify-center
        align-center
        class="py-12 text-center"
      >
        <v-flex xs12 sm10 md8 lg6 xl5>
          <h2 class="mb-5 px-8">
            Deze organisaties hebben zich al aangemeld
          </h2>
          <helpers-map :render-map="allowMapRender" />
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout
        justify-center
        align-center
        class="px-8 py-12 accent text-center"
      >
        <v-flex xs12 sm10 md8 lg6 xl5 class="my-5">
          <h2 class="display-1 mb-5 px-8">
            Corona raakt ons allemaal: blijf om elkaar geven
          </h2>
          <v-img
            :src="require('@/assets/logo-anbi.svg')"
            class="mx-auto my-5"
            max-width="40px"
            aspect-ratio="1.27"
            position="center center"
            contain
          />
          <p class="mb-5">EO Metterdaad start een noodhulpcampagne om u de mogelijkheid te geven ook financieel te helpen.</p>
          <v-btn
            href="/doneren"
            color="primary"
            x-large
          >
            Informatie over doneren
          </v-btn>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
import HeroImage from '~/components/HeroImage.vue'
import HelpersMap from '~/components/HelpersMap.vue'

export default {
  components: { HeroImage, HelpersMap },
  computed: {
    cookiePermissions () {
      return this.$store.state['cookie-permissions'].list
    },
    allowMapRender () {
      return this.cookiePermissions.findIndex(cat => cat === 'social') > -1
    }
  },
  head () {
    return {
      title: 'Wij kunnen hulp bieden',
      meta: [
        {
          hid: 'aanbieden',
          name: 'description',
          content:
            'Op deze plek willen we mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen.'
        }
      ]
    }
  }
}
</script>
