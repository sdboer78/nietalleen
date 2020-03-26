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
            :src="require('~/assets/love-your-neighbour.jpg')"
            size="400px"
            class="mx-auto mb-8"
          >
            <img
              src="~/assets/logo-niet-alleen.svg?data"
              width="200px"
            >
          </hero-image>
          <h1 class="display-1">
            Zo werkt het
          </h1>
          <p>
            <span class="d-block font-weight-bold primary--text">1.</span>
            Meld je hulpinitiatief of organisatie aan via dit formulier<br>
            <v-btn
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
              target="_new"
              color="primary"
              class="mt-2"
              x-large
            >
              Aanmelden
            </v-btn>
          </p>
          <p class="mt-8">
            <span class="d-block font-weight-bold primary--text">2.</span>
            Alle initiatieven worden verzameld op plaatselijk niveau en aan elkaar gekoppeld.
            <br>
          </p>
          <p class="mt-8">
            <span class="d-block font-weight-bold primary--text">3.</span>
            Wij zorgen ervoor dat de binnengekomen hulpvragen bij de lokale kerken en organisaties wordt neergelegd. Zij overleggen samen wie de hulpvraag oppakt.
          </p>
          <p class="caption mt-12">
            Als je vragen hebt of meer wilt weten, mail dan naar <a href="mailto:info@nietalleen.nl">info@nietalleen.nl</a>.
            Bellen kan ook naar het algemene nummer <a href="tel:0800 1322">0800 1322</a>.
          </p>
          <p class="caption mt-4">
            Wil je de vermelding van jouw organisatie wijzigen of, om wat voor reden dan ook, <strong>afmelden</strong>? Dat kan via <a href="https://bit.ly/afm-lokale-organisaties">dit formulier</a>. Bellen kan ook naar het algemene nummer <a href="tel:0800 1322">0800 1322</a>.
          </p>
          <p class="caption mt-4">
            Voor meer informatie over het coronavirus en de maatregelen bezoek <a target="_blank" href="https://www.rivm.nl">www.rivm.nl</a> of bel het landelijke nummer voor vragen over het coronavirus <a href="tel:08001351">0800 1351</a>.
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
        <v-flex
          xs12
          sm10
          md8
          lg6
          xl5
          class="my-5"
        >
          <h2 class="display-1 mb-5 px-8">
            Corona raakt ons allemaal:<br>
            blijf om elkaar geven
          </h2>
          <img
            src="~/assets/logo-anbi.svg?data"
            class="mx-auto my-5 d-block"
            height="35"
          >
          <p class="mb-5">
            EO Metterdaad is een noodhulpcampagne gestart om u de mogelijkheid te geven ook financieel te helpen.
          </p>
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
    // page specific metadata
    return {
      title: 'Wij kunnen hulp bieden',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: '#Nietalleen - Hulp bieden'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Op deze plek willen we mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen.'
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
