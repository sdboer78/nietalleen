<template>
  <div>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-8 text-center"
      >
        <v-flex xs12 sm8 md6 lg4 xl3>
          <hero-image
            :src="require('@/assets/walking-with-dog.jpg')"
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
            Over ons
          </h1>
          <div class="headline">
            Wat is #Nietalleen?
          </div>
          <p class="mt-10">
            Steeds meer mensen worden getroffen door de gevolgen van het coronavirus (COVID-19).
            Door de verspreiding van het virus komen veel initiatieven los bij lokale kerken en
            (christelijke) maatschappelijke organisaties. De komende tijd zullen veel mensen
            onze hulp nodig hebben.
          </p>
          <p>
            Met #Nietalleen verbinden we de talloze lokale hulpinitiatieven aan hulpvragers en aan elkaar.
            De hulpvraag en het hulpaanbod wordt door één van de samenwerkende organisaties opgepakt en
            doorgestuurd naar een organisatie bij jou in de buurt. Zo helpen we elkaar in deze bijzondere
            tijd, want je bent #Nietalleen.
          </p>
          <div class="mt-12">
            <v-btn
              href="/"
              color="primary"
              class="ma-2"
              nuxt
              x-large
            >
              Help je hulp nodig?
            </v-btn>
            <v-btn
              href="/hulp-bieden"
              class="ma-2"
              nuxt
              x-large
            >
              Wil je hulp bieden?
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout
        justify-center
        align-center
        class="px-8 py-12 white--text text-center"
        style="background:linear-gradient(135deg, #c63866, #fe676e, #fd8f52);"
      >
        <v-flex xs12 sm8 md6 lg4 xl3>
          <h2 class="display-1">
            De volgende organisaties hebben zich aangesloten bij #Nietalleen
          </h2>
          <v-row class="partner-list">
            <v-col>
              <p>Diaconaal Steunpunt</p>
              <p>Christelijk Gereformeerde Kerken</p>
              <p>ChristenUnie</p>
              <p>Evangelische Omroep</p>
              <p>Gereformeerde Kerken Vrijgemaakt</p>
              <p>Kerk in Actie</p>
              <p>Missie Nederland</p>
              <p>Navigators</p>
              <p>Nederlands Gereformeerde Kerken</p>
              <p>Compassion</p>
              <p>KBO-PCOB</p>
            </v-col>
            <v-col>
              <p>Protestantse Kerk in Nederland</p>
              <p>Rooms Katholieke Kerk</p>
              <p>SGP</p>
              <p>Stichting Agapè</p>
              <p>HipHelpt</p>
              <p>Stichting Present</p>
              <p>Schuldhulpmaatje</p>
              <p>Tear</p>
              <p>Tot Heil des Volks</p>
              <p>4e Musketier</p>
              <p>Youth for Christ</p>
              <p>...</p>
            </v-col>
          </v-row>
          <p class="mt-6 font-italic">
            En nog steeds breidt deze lijst zich uit...
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-12 text-center"
      >
        <v-flex xs12 sm8 md6 lg4 xl3>
          <hero-image
            :src="require('@/assets/cooking.jpg')"
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
          <h2 class="display-1">
            Gebruik dit logo en de social posts voor jouw lokale initiatief!
          </h2>
          <p class="subtitle-1 mb-12">
            Organisaties en kerken zetten zich in voor mensen die hulp kunnen gebruiken onder de naam #Nietalleen. Download hieronder het logo, verschillende posters, social posts voor Facebook en Twitter om te gebruiken bij jouw lokale initiatief.
          </p>
          <v-btn
            href="https://download.eo.nl/eo/nietalleen/Downloads-Nietalleen-logo.jpg"
            color="primary"
            class="ma-2"
            target="_new"
            large
          >
            <v-icon left>mdi-download</v-icon>
            Logo
          </v-btn>
          <v-btn
            href="https://download.eo.nl/eo/nietalleen/Downloads-Nietalleen-posters.zip"
            color="primary"
            class="ma-2"
            target="_new"
            large
          >
            <v-icon left>mdi-download</v-icon>
            Posters
          </v-btn>
          <br />
          <v-btn
            href="https://download.eo.nl/eo/nietalleen/Downloads-Nietalleen-facebook.zip"
            color="primary"
            class="ma-2"
            target="_new"
            large
          >
            <v-icon left>mdi-download</v-icon>
            Social posts voor Facebook
          </v-btn>
          <v-btn
            href="https://download.eo.nl/eo/nietalleen/Downloads-Nietalleen-twitter.zip"
            color="primary"
            class="ma-2"
            target="_new"
            large
          >
            <v-icon left>mdi-download</v-icon>
            Social posts voor Twitter
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
      title: 'Over ons',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: '#Nietalleen - Over ons'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #Nietalleen.'
        }
      ]
    }
  }
}
</script>

<style type="text/css" lang="scss">
  .partner-list p {
    line-height: 1.2;
  }
</style>
