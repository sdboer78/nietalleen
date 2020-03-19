<template>
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
        <h2 class="display-1">Zo werkt het</h2>
        <p>
          <span class="d--block font-weight-bold" :style="'color:'+primaryColor">1.</span>
          <br>Meld je hulpinitiatief of organisatie aan via dit formulier
          <br>
        </p>
        <p>
          <span class="d--block font-weight-bold" :style="'color:'+primaryColor">2.</span>
          <br>Alle initiatieven worden verzameld op plaatselijk niveau en aan elkaar gekoppeld.
          <br>
        </p>
        <p>
          <span class="d--block font-weight-bold" :style="'color:'+primaryColor">3.</span>
          <br>Wij zorgen ervoor dat de binnengekomen hulpvragen bij de lokale kerken en organisaties wordt neergelegd. Zij overleggen samen wie de hulpvraag oppakt.
        </p>
        <h2 class="display-1">Meld je organisatie aan</h2>
        <v-btn
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
          target="_new"
          color="primary"
          x-large
        >
          aanmelden
        </v-btn>
        <p class="caption font-weight-bold mt-5">
          Als je vragen hebt of meer wilt weten, mail dan naar <a href="mailto:info@nietalleen.nl">info@nietalleen.nl</a>.
          Bellen kan ook naar het algemene nummer <a href="tel:0800 1322">0800 1322</a>.
        </p>
      </v-flex>
    </v-layout>
  </section>
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
      title: 'Wij kunnen hulp bieden',
      meta: [
        { hid: 'aanbieden', name: 'description', content: 'Op deze plek willen we mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen.' }
      ]
    }
  }
}
</script>
