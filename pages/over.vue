<template>
  <div>
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
            class="mx-auto my-8"
            position="center center"
            contain
          />
          <h1 class="display-1">
            Wij laten mensen niet alleen!
          </h1>
        </v-flex>
      </v-layout>
      <v-layout
        justify-center
        align-center
        class="px-8 py-12 text-center white"
      >
        <v-flex xs12 sm8 md5 class="my-5">
          <p class="subtitle-1 font-weight-bold">
            Ondanks het coronavirus (COVID-19), staan we voor je klaar. Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #nietalleen.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section class="px-8 py-12 accent">
      <v-layout
        justify-center
        align-center
        class="text-center"
      >
        <v-flex xs12 sm8 md5 class="my-5">
          <h2>Dit is #nietalleen</h2>
          <p>
            Steeds meer mensen worden getroffen door de gevolgen van het coronavirus (COVID-19). De komende tijd zullen veel mensen onze hulp nodig hebben. Met dit platform verbinden we de talloze lokale hulpinitiatieven aan elkaar en aan hulpvragers. Samen ben je meer dan alleen! De hulpvraag en het hulpaanbod wordt door één van de samenwerkende organisaties opgepakt en doorgestuurd naar een organisatie bij jou in de buurt. Zo helpen we elkaar in deze bijzondere tijd, want je bent #nietalleen.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section class="px-8 py-12">
      <v-layout
        justify-center
        align-center
        class="text-center"
      >
        <v-flex xs12 sm8 md5 class="my-5">
          <h2>Wil jij je aansluiten met een hulp-initiatief?</h2>
          <v-btn
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
            target="_new"
            color="primary"
          >
            Wij kunnen hulp bieden
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
export default {
  components: {},
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
