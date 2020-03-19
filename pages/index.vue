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
          <h1 class="display-1">Ik zoek hulp</h1>
          <p>
            Vul onderstaand formulier in en een lokale organisatie of kerk zal je zo snel mogelijk benaderen om je te helpen.
          </p>
          <need-help-form />
          <p><br><br>of<br><br></p>
          <p>Bel met ons nummer:</p>
          <v-btn
            href="tel:0800-1322"
            color="primary"
            x-large
          >
            <v-icon left>
              mdi-phone
            </v-icon>
            0800-1322
          </v-btn>
          <p class="caption my-6">
            <strong>maandag t/m donderdag:</strong>
            van 09.00 - 21.00 uur
            <br>
            <strong>vrijdag:</strong>
            van 09.00 - 16.00 uur
          </p>
          <p class="text-left pa-6">
            Een lokale organisatie of kerk zal je zo snel mogelijk benaderen om je te helpen.
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
        <v-flex xs12 sm8 md5>
          <v-img
            :src="require('@/assets/logo-niet-alleen.svg')"
            max-width="200px"
            position="center center"
            contain
            class="mx-auto mb-12"
          />
          <h2 class="display-1">Ondanks het coronavirus staan we voor je klaar.</h2>
          <p class="subtitle-1">
            Ondanks het coronavirus (COVID-19), staan we voor je klaar. Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #Nietalleen.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout
        justify-center
        align-center
        class="text-center px-8 py-12"
      >
        <v-flex xs12 sm8 md5 class="my-5">
          <hero-image
            :src="require('@/assets/hond-uitlaten.jpg')"
            size="400px"
            class="mx-auto mb-8 white--text"
          >
            <div class="d-flex flex-column">
              <span class="display-4 mb-0">133</span>
              <span class="display-1 mt-n8">organisaties</span>
            </div>
          </hero-image>
          <h2 class="display-1">hebben al hulp aangeboden</h2>
          <p class="subtitle-1">
            Wil jij je ook aansluiten met een hulp-initiatief?
          </p>
          <v-btn
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
            target="_new"
            color="primary"
            x-large
            class="mt-6"
          >
            Aanmelden
          </v-btn>
          <p class="body-2 font-weight-bold pa-12">
            Ben je een particulier en wil je ook graag helpen? We gaan binnenkort op de website laten zien bij welke organisatie bij jou in de buurt je kan aansluiten.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout
        justify-center
        align-center
        class="text-center accent px-8 py-12"
      >
        <v-flex xs12 sm8 md5 class="my-5">
          <h2 class="display-1">Over ons</h2>
          <p class="subtitle-1">
            Met #Nietalleen verbinden we de talloze lokale en kerkelijke hulpinitiatieven aan elkaar en aan hulpvragers.
            <br>De hulpvraag wordt door één van de samenwerkende organisaties opgepakt en doorgestuurd
          </p>
          <v-btn
            href="/over"
            color="primary"
            class="mt-6"
            x-large
            nuxt
          >
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
export default {
  components: {
    HeroImage,
    NeedHelpForm
  },
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
