<template>
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
      <h1>Wij kunnen hulp bieden</h1>
      <p>Op deze plek willen we zoveel mogelijk mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragers en lokale organisaties/kerken actief met elkaar in contact te brengen.</p>
      <p>Ben je een organisatie/kerk en kun je hulp bieden? Meld je dan hieronder aan. Binnenkort is jouw initiatief terug te vinden op de website van #Nietalleen.</p>
      <p>Bedankt voor je hulp!</p>
      <v-btn
        href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
        target="_new"
        color="primary"
      >
        aanmelden
      </v-btn>
      <p class="caption mt-5">
        Ben je een particulier en wil je ook graag helpen? We gaan binnenkort op de website laten zien bij welke organisatie bij jou in de buurt je kan aansluiten.
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import HeroImage from '~/components/HeroImage.vue'
export default {
  components: { HeroImage },
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
