<template>
  <v-layout
    justify-center
    align-center
    class="pa-8 text-center"
  >
    <v-flex xs12 sm8 md5>
      <v-avatar size="200px" class="mb-5">
        <v-img
          :src="require('@/assets/kopje-thee.jpg')"
          cover
        />
      </v-avatar>
      <h1>Wij kunnen hulp bieden</h1>
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
export default {
  components: {},
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
