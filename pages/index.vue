<template>
  <div>
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
        <h1>Ik zoek hulp</h1>
        <need-help-form />
      </v-flex>
    </v-layout>
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
          <h2>Ondanks het coronavirus (COVID-19), staan we voor je klaar.</h2>
          <p class="subtitle-1">
            Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #nietalleen.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout
        justify-center
        align-center
        class="px-8 py-12 text-center"
      >
        <v-flex xs12 sm9 md5>
          <h2>Zo werkt het</h2>
          <v-row>
            <v-col
              cols="12"
              sm="5"
              class="text-sm-left"
            >
              <p>Bel met ons nummer:</p>
              <v-btn href="tel:0800-1322" color="primary">
                <v-icon left>
                  mdi-phone
                </v-icon>
                0800-1322
              </v-btn>
              <p class="caption mb-3 mt-6">
                <strong>maandag t/m donderdag:</strong>
                van 09.00 - 21.00 uur
              </p>
              <p class="caption">
                <strong>vrijdag:</strong>
                van 09.00 - 16.00 uur
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="2"
              class="align-self-center"
            >
              <v-row class="text-center flex-column">
                <v-col class="d-sm-none">
                  <hr class="my-3">
                </v-col>
                <v-col cols="2">
                  OF
                </v-col>
                <v-col class="d-sm-none">
                  <hr class="my-3">
                </v-col>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              sm="5"
              class="text-sm-left"
            >
              <p>E-mail ons:</p>
              <v-btn href="mailto:info@nietalleen.nl" color="primary">
                <v-icon left>
                  mdi-mail
                </v-icon>
                info@nietalleen.nl
              </v-btn>
              <p class="caption mb-3 mt-6">
                <strong>Geef aan ons door:</strong>
                Naam, postcode e-mailadres en hulpvraag.
              </p>
            </v-col>
          </v-row>
          <p><br>Een lokale organisatie of kerk zal je zo snel mogelijk benaderen om je te helpen.</p>
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
          <h2>Wil jij je aansluiten met een hulp-initiatief?</h2>
          <v-btn
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
            target="_new"
            color="primary"
          >
            Aanmelden
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
