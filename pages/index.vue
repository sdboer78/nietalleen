<template>
  <div>
    <section>
      <v-layout justify-center align-center class="pa-8 text-center">
        <v-flex xs12 sm8 md5 lg4 xl3>
          <hero-image
            :src="require('@/assets/sitting-on-a-bench.jpg')"
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
            Ik zoek hulp
          </h1>
          <p
            class="mb-8 subtitle-1"
          >
            Vul onderstaand formulier in en een lokale organisatie of kerk zal je zo snel mogelijk benaderen om je te helpen.
          </p>
          <need-help-form />
          <divider class="my-5" />
          <p>Bel met ons nummer:</p>
          <v-btn href="tel:0800-1322" color="primary" x-large>
            <v-icon left>
              mdi-phone
            </v-icon>0800-1322
          </v-btn>
          <p class="caption my-6">
            <strong>maandag t/m vrijdag:</strong>
            van 09.00 - 21.00 uur
            <br>
            <strong>zaterdag en zondag:</strong>
            van 09.00 - 20.00 uur
          </p>
          <p
            class="pa-6"
          >
            Een lokale organisatie of kerk zal je zo snel mogelijk benaderen om je te helpen.
          </p>
          <p class="caption mb-6">
            Met het platform #Nietalleen probeert de EO zo goed mogelijk een hulpvraag aan de
            juiste hulpaanbieder te binden. Daarmee is #Nietalleen verantwoordelijk voor het
            doorzetten van de hulpvraag naar (lokale) initiatieven. Het indienen van een hulpvraag
            betekent niet dat er recht op hulp ontstaat; de (lokale) aanbieders zullen hun best
            doen om jouw vraag zo goed mogelijk op te pakken. De kwaliteit, in algemene zin,
            van het hulpaanbod ligt bij de initiatieven zelf.
          </p>
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
        <v-flex xs12 sm8 md5 lg4 xl3>
          <v-img
            :src="require('@/assets/logo-niet-alleen.svg')"
            max-width="200px"
            position="center center"
            contain
            class="mx-auto mb-12"
          />
          <h2 class="display-1">
            Ondanks het coronavirus staan we voor je klaar.
          </h2>
          <p
            class="subtitle-1"
          >
            Ondanks het coronavirus (COVID-19), staan we voor je klaar. Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #Nietalleen.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout justify-center align-center class="text-center px-8 py-12">
        <v-flex
          xs12
          sm8
          md5
          lg4
          xl3
          class="my-5"
        >
          <h2>
            <span class="display-4 mb-0 d-block" style="line-height:1.1;">756</span>
            <span class="display-1 mb-2">organisaties hebben al hulp aangeboden</span>
          </h2>
          <p class="subtitle-1">
            Wil jij je ook aansluiten met een hulp-initiatief?
          </p>
          <v-btn href="hulp-bieden" color="primary" x-large nuxt class="mt-6">
            Aanmelden
          </v-btn>
          <p
            class="body-2 font-weight-bold py-8 px-4"
          >
            Ben je een particulier en wil je ook graag helpen? We gaan binnenkort op de website laten zien bij welke organisatie bij jou in de buurt je kan aansluiten.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout justify-center align-center class="text-center accent px-8 py-12">
        <v-flex
          xs12
          sm8
          md5
          lg4
          xl3
          class="my-5"
        >
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
          <h2 class="display-1">
            Over ons
          </h2>
          <p class="subtitle-1">
            Met #Nietalleen verbinden we de talloze lokale en kerkelijke hulpinitiatieven aan elkaar en aan hulpvragers.
            <br>De hulpvraag wordt door één van de samenwerkende organisaties opgepakt en doorgestuurd
          </p>
          <v-btn href="/over" color="primary" class="mt-6" x-large nuxt>
            Meer lezen over ons
          </v-btn>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
import HeroImage from '~/components/HeroImage.vue'
import NeedHelpForm from '~/components/NeedHelpForm.vue'
import Divider from '~/components/Divider.vue'

export default {
  components: {
    HeroImage,
    NeedHelpForm,
    Divider
  },
  head () {
    // page specific metadata
    return {
      title: 'Ik zoek hulp',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: '#Nietalleen'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #Nietalleen.'
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
