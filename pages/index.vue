<template>
  <div>
    <v-layout
      justify-center
      align-center
      class="pa-8 text-center"
    >
      <v-flex xs12 sm8 md5>
        <hero-image
          :src="require('@/assets/hond-uitlaten.jpg')"
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
        <h1>Ik zoek hulp</h1>
        <p class="subtitle-1 font-weight-bold">
          Ondanks het coronavirus (COVID-19), staan we voor je klaar. Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #nietalleen.
        </p>
      </v-flex>
    </v-layout>
    <section>
      <v-layout
        justify-center
        align-center
        class="px-8 py-12 accent text-center"
      >
        <v-flex xs12 sm8 md5>
          <h2>Zo werkt het</h2>
          <v-row>
            <v-col cols="2" class="text-right">
              <h3 class="display-1 ma-none primary--text">
                1
              </h3>
            </v-col>
            <v-col cols="5" class="text-left">
              <p>Bel met ons nummer:</p>
              <v-btn href="tel:0800-1322" color="primary">
                <v-icon left>
                  mdi-phone
                </v-icon>
                0800-1322
              </v-btn>
              <p class="caption mb-3 mt-6">
                <strong>maandag t/m donderdag:</strong><br>
                van 09.00 - 21.00 uur
              </p>
              <p class="caption">
                <strong>vrijdag:</strong><br>
                van 09.00 - 16.00 uur
              </p>
            </v-col>
            <v-col cols="5" class="text-left">
              <p>E-mail ons:</p>
              <v-btn href="mailto:info@nietalleen.nl" color="primary">
                <v-icon left>
                  mdi-mail
                </v-icon>
                info@nietalleen.nl
              </v-btn>
              <p class="caption mb-3 mt-6">
                <strong>Geef aan ons door:</strong><br>
                Naam, postcode e-mailadres en hulpvraag.
              </p>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col cols="2" class="text-right">
              <h3 class="display-1 ma-none primary--text">
                2
              </h3>
            </v-col>
            <v-col cols="10" class="text-left">
              <p>Een lokale organisatie of kerk zal je zo snel mogelijk benaderen om je te helpen.</p>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </section>
    <section class="px-8 py-12">
      <v-layout
        justify-center
        align-center
        class="text-center"
      >
        <v-flex xs12 sm8 md5 class="my-5">
          <h2>Wil jij je aansluiten met een hulp-initiatief?</h2>
          <v-btn
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
            target="_new"
            color="secondary"
          >
            Wij kunnen hulp bieden
          </v-btn>
          <p class="caption mt-5">
            Ben je <strong>een particulier</strong> en wil je ook graag helpen? We gaan binnenkort op de website laten zien bij welke organisatie bij jou in de buurt je kan aansluiten.
          </p>
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
    return {
      title: 'Ik zoek hulp',
      meta: [
        { hid: 'vragen', name: 'description', content: 'Op deze plek willen we mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen.' }
      ]
    }
  }
}
</script>
