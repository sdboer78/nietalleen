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
          md5
          lg4
          xl3
        >
          <hero-image
            :src="require('~/assets/sitting-on-a-bench.jpg')"
            size="400px"
            class="mx-auto mb-8"
          >
            <img
              src="~/assets/logo-niet-alleen.svg?data"
              width="200"
            >
          </hero-image>
          <h1 class="display-1">
            Ik zoek hulp
          </h1>
          <p
            class="mb-8 subtitle-1"
          >
            Vul onderstaand formulier in en een lokale organisatie of kerk zal je zo snel mogelijk benaderen om je
            <a
              href="javascript:void(null)"
              @click.stop="showDisclaimerDialog = true"
            >zo goed mogelijk</a>
            te helpen.
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
          <p class="caption pb-6">
            Voor meer informatie over het coronavirus en de maatregelen bezoek <a target="_blank" href="https://www.rivm.nl">www.rivm.nl</a> of bel het landelijke nummer voor vragen over het coronavirus <a href="tel:08001351">0800 1351</a>.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section class="accent">
      <v-layout
        justify-center
        align-center
        class="pa-8 pt-12 text-center"
      >
        <v-flex
          xs12
          sm8
          md5
          lg4
          xl3
        >
          <h2 class="display-1 mb-4">
            Kijk hoe #Nietalleen-initiatieven verschil maken
          </h2>
          <p>
            Bekijk <a href="/verhalen">alle verhalen en social posts</a> rondom #Nietalleen.
          </p>
        </v-flex>
      </v-layout>
      <v-layout
        justify-center
        align-center
        class="px-8 pb-8 text-center"
      >
        <v-flex
          xs12
          sm12
          md12
          lg8
          xl6
        >
          <social-carousel
            :render-carousel="allowCarouselRender"
            class="mx-n8 mb-6"
          />
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
        <v-flex
          xs12
          sm8
          md5
          lg4
          xl3
        >
          <img
            src="~/assets/logo-niet-alleen.svg?data"
            width="200"
          >
          <h2 class="display-1">
            Ondanks het coronavirus staan we voor je klaar.
          </h2>
          <p class="subtitle-1">
            Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #Nietalleen.
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
        <v-flex
          xs12
          sm8
          md5
          lg4
          xl3
          class="my-5"
        >
          <h2 class="mb-12">
            <span class="display-4 mb-0 d-block" style="line-height:1.1;">
              1061
            </span>
            <span class="display-1 mb-0 d-block" style="line-height:1.1;">
              initiatieven
            </span>
          </h2>
          <p class="subtitle-1">
            Wil jij je ook aansluiten met een hulp-initiatief?
          </p>
          <v-btn
            href="hulp-bieden"
            color="primary"
            x-large
            nuxt
            class="my-4"
          >
            Aanmelden
          </v-btn>
          <p class="body-2 my-6 px-4">
            Ben je een particulier en wil je ook graag helpen? We gaan binnenkort op de website laten zien bij welke organisatie bij jou in de buurt je kan aansluiten.
          </p>
          <p class="body-2 my-6 px-4">
            Wil je je als organisatie hulp vragen? Mail ons dan op <a href="mailto:info@nietalleen.nl">info@nietalleen.nl</a>, dan nemen we zo snel mogelijk contact met je op.
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
        <v-flex
          xs12
          sm8
          md5
          lg4
          xl3
          class="my-5"
        >
          <hero-image
            :src="require('~/assets/walking-with-dog.jpg')"
            size="400px"
            class="mx-auto mb-8"
          >
            <img
              src="~/assets/logo-niet-alleen.svg?data"
              width="200"
            >
          </hero-image>
          <h2 class="display-1">
            Over ons
          </h2>
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
    <v-dialog
      v-model="showDisclaimerDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
          primary-title
        >
          Disclaimer
        </v-card-title>
        <v-card-text>
          <p>
            Met het platform #Nietalleen probeert de EO zo goed mogelijk een hulpvraag aan de
            juiste hulpaanbieder te binden. Daarmee is #Nietalleen verantwoordelijk voor het
            doorzetten van de hulpvraag naar (lokale) initiatieven. Het indienen van een hulpvraag
            betekent niet dat er recht op hulp ontstaat; de (lokale) aanbieders zullen hun best
            doen om jouw vraag zo goed mogelijk op te pakken. De kwaliteit, in algemene zin,
            van het hulpaanbod ligt bij de initiatieven zelf.
          </p>
        </v-card-text>
        <v-divider />
        <v-card-actions @click="showDisclaimerDialog = false">
          <v-spacer />
          <v-btn
            color="primary"
            text
          >
            Sluiten
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import HeroImage from '~/components/HeroImage.vue'
import NeedHelpForm from '~/components/NeedHelpForm.vue'
import Divider from '~/components/Divider.vue'
import SocialCarousel from '~/components/SocialCarousel.vue'

export default {
  components: {
    HeroImage,
    NeedHelpForm,
    Divider,
    SocialCarousel
  },
  data () {
    return {
      showDisclaimerDialog: false
    }
  },
  computed: {
    cookiePermissions () {
      return this.$store.state['cookie-permissions'].list
    },
    allowCarouselRender () {
      return this.cookiePermissions.findIndex(cat => cat === 'social') > -1
    }
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
