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
              width="200"
            >
          </hero-image>
          <h1 class="display-1">
            Zo werkt het
          </h1>
          <v-card
            flat
            outlined
            class="help-options-panel mb-8 mx-n4"
          >
            <v-tabs
              v-model="activeTab"
              centered
              fixed-tabs
              icons-and-text
            >
              <v-tab href="#individu">
                Individu
                <v-icon>mdi-account</v-icon>
              </v-tab>
              <v-tab href="#organisatie">
                Organisatie
                <v-icon>mdi-account-group</v-icon>
              </v-tab>
            </v-tabs>
            <v-tabs-items
              v-model="activeTab"
            >
              <v-tab-item
                key="0"
                value="individu"
                class="px-4 py-6"
              >
                <help-as-volunteer />
              </v-tab-item>
              <v-tab-item
                key="1"
                value="organisatie"
                class="px-4 py-6"
              >
                <help-as-organisation />
              </v-tab-item>
            </v-tabs-items>
          </v-card>
          <p class="caption">
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
        class="px-8 py-12 text-center"
      >
        <v-flex xs12 sm10 md8 lg6 xl5>
          <h2>
            Deze organisaties hebben zich al aangemeld
          </h2>
          <organisations-map
            :render-map="allowMapRender"
            class="px-n8 mt-5"
          />
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-layout
        justify-center
        align-center
        class="px-8 py-12 accent text-center"
      >
        <v-flex xs12 sm8 md5 lg4 xl3>
          <h2 class="display-1 my-5">
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
            class="mb-5"
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
import HelpAsOrganisation from '~/components/HelpAsOrganisation.vue'
import HelpAsVolunteer from '~/components/HelpAsVolunteer.vue'
import OrganisationsMap from '~/components/OrganisationsMap.vue'

export default {
  components: { HeroImage, HelpAsOrganisation, HelpAsVolunteer, OrganisationsMap },
  data () {
    return {
      activeTab: null
    }
  },
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
      title: 'Ik kan hulp bieden',
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

<style type="text/css" lang="scss" scoped>
  .help-options-panel {
    max-width: none;
  }

  .v-tab {
    font-family: "Bellota", "Century Gothic", "Avenir", sans-serif !important;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 1.2;
    text-transform: none;

    &--active {
      font-weight: bold;
    }
  }

  .v-tabs {
    border-bottom: thin solid rgba(0, 0, 0, 0.12);
  }
</style>
