<template>
  <div>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-8 text-center"
      >
        <v-flex
          xs12
          sm8
          md6
          lg4
          xl3
          class="pb-12"
        >
          <hero-image
            :src="require('~/assets/vegetable-basket.jpg')"
            size="400px"
            class="mx-auto mb-8"
          >
            <img
              src="~/assets/logo-niet-alleen.svg?data"
              width="200px"
            >
          </hero-image>
          <h1 class="display-1">
            Corona raakt ons allemaal: blijf om elkaar geven
          </h1>
          <p class="mt-10">
            Van Apeldoorn tot Afghanistan en van Rotterdam tot Rwanda: de gevolgen van het coronavirus raken ons allemaal. Dichtbij, in onze huizen en onze steden. Verder weg, bij onze medemensen over de hele wereld.
          </p>
          <p>
            Daarom start EO Metterdaad een noodhulpcampagne om u de mogelijkheid te geven ook financieel te helpen. Dat doen we samen met de initiatiefnemers achter nietalleen.nl en met de andere hulporganisaties in ons netwerk. Zij doen wat ze kunnen om mensen in nood te bij te staan. In Nederland én wereldwijd. Met uw gift steunt u hun belangrijke werk.
          </p>
          <p>
            Zoals altijd zien wij er zorgvuldig op toe dat donaties terecht komen waar ze nodig zijn. Dat doen we als EO Metterdaad immers al bijna 50 jaar. Geef dus met een gerust hart.
          </p>
          <img
            src="~/assets/logo-anbi.svg?data"
            class="mx-auto my-5 d-block"
            height="35"
          >
          <v-btn
            href="https://metterdaad.eo.nl/corona/doneren"
            color="primary"
            class="ma-2"
            target="_new"
            nuxt
            x-large
          >
            Doneer via EO Metterdaad
            <v-icon right>
              mdi-open-in-new
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
import HeroImage from '~/components/HeroImage.vue'

export default {
  components: { HeroImage },
  head () {
    // page specific metadata
    return {
      title: 'Doneren',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: '#Nietalleen - Doneren'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'EO Metterdaad heeft een noodhulpcampagne om u de mogelijkheid te geven ook financieel te helpen. Met uw gift steunt u het belangrijke werk van de de initiatiefnemers achter nietalleen.nl en andere hulporganisaties.'
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
