<template>
  <div>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-12 text-center"
      >
        <v-flex xs12 sm8 md5>
          <hero-image
            :src="require('@/assets/love-neighbour.jpg')"
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
            Over ons
          </h2>
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
              href="hulp-bieden"
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
        <v-flex xs12 sm8 md5>
          <h2 class="display-1">
            De volgende organisaties hebben zich aangesloten bij #Nietalleen
          </h2>
          <v-row class="subtitle-1">
            <v-col>
              Diaconaal Steunpunt
              <br>Christelijk Gereformeerde Kerken
              <br>ChristenUnie
              <br>Evangelische Omroep
              <br>Gereformeerde Kerken Vrijgemaakt
              <br>Kerk in Actie
              <br>Missie Nederland
              <br>Navigators
              <br>Nederlands Gereformeerde Kerken
            </v-col>
            <v-col>
              Protestantse Kerk in Nederland
              <br>Rooms Katholieke Kerk
              <br>SGP
              <br>Stichting Agapè
              <br>Stichting HipHelpt
              <br>Stichting Present
              <br>Schuldhulpmaatje
              <br>Tear
              <br>Tot Heil des Volks
              <br>4e Musketier
              <br>Youth for Christ
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-12 text-center"
      >
        <v-flex xs12 sm8 md5>
          <hero-image
            :src="require('@/assets/kopje-thee.jpg')"
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
            Gebruik dit logo en social posts voor jouw lokale initiatief!
          </h2>
          <div class="subtitle-1">
            Organisaties en kerken zetten zich in voor mensen die hulp kunnen gebruiken onder de naam #Nietalleen. Download hier het logo om te gebruiken bij jouw lokale initiatief.
          </div>
          <v-btn
            href="https://portal.eo.nl/over-de-eo/pers/artikel/2020/03/platform-nietalleen-voor-verbinding-coronahulp"
            color="primary"
            class="mt-10"
            x-large
          >
            Download
          </v-btn>
          <h2 class="display-1 mt-8">
            Zo werkt het
          </h2>
          <p>
            <span class="d--block font-weight-bold" :style="'color:'+primaryColor">1.</span>
            <br>Download het logo. Voeg desgewenst de plaatsnaan toe als je handig bent met Adobe Photoshop&copy;
          </p>
          <p class="pb-12">
            <span class="d--block font-weight-bold" :style="'color:'+primaryColor">2.</span>
            <br>Verspreid de social media post via je lokale kanalen
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
  computed: {
    primaryColor () {
      return this.$vuetify.theme.themes.light.primary
    }
  },
  head () {
    return {
      title: 'Over',
      meta: [
        { hid: 'over', name: 'description', content: 'Op deze plek willen we mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen.' }
      ]
    }
  }
}
</script>
