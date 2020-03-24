<template>
  <div>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-8"
      >
        <v-flex
          xs12
          sm8
          md6
          lg4
          xl3
          class="pb-12"
        >
          <h1 class="display-1 mb-0">
            #Nietalleen
          </h1>
          <p class="subtitle-2 mb-3 d-flex align-center grey--text text--darken-1">
            <v-icon size="16" color="grey" left>mdi-clock</v-icon>
            Elke woensdag om 16:45 op
            <img :src="require('@/assets/logo-npo-1.svg')" width="50" />
          </p>
          <p class="font-weight-bold">
            In het nieuwe tv-programma Nietalleen.nl laat de EO zien hoe, midden in de coronacrisis, mensen voor elkaar klaarstaan. Live vanuit hun eigen huiskamers delen EO-presentatoren Bert van Leeuwen en Anne-Mar Zwart bemoedigende initiatieven die in deze bijzondere tijd ontstaan.
          </p>
          <v-img
            :src="require('@/assets/bert-van-leeuwen.jpg')"
            class="mx-n8 mx-auto my-5"
            aspect-ratio="1.75"
            position="center center"
            width="auto"
            max-width="none"
            cover
          />
          <p>
            Het zijn inspirerende verhalen die onder andere zijn ingezonden via het online platform #Nietalleen. Via dit platform worden hulpvragers en lokale hulpaanbieders aan elkaar verbonden. In het programma zijn beelden te zien van acties die in Nederland en daarbuiten op gang zijn gekomen.
          </p>
          <p>
            Bert van Leeuwen: “Wat ik mooi vind aan Nederland is dat er in deze lastige coronatijd door het hele land initiatieven ontstaan om anderen te helpen. Al meer dan achthonderd organisaties en kerken hebben zich opgegeven voor het platform #Nietalleen. Mensen staan klaar voor anderen, dat wil ik in dit programma laten zien. Het zijn hoopvolle verhalen in tijden van stress en angst.”
          </p>
          <p>
            Bert presenteert het nieuwe programma vanuit huis en doet dat niet voor niets: “Door vanuit mijn eigen huis te presenteren, wil ik gehoor geven aan de oproep om binnen te blijven en het signaal geven dat het echt belangrijk is dat mensen nadenken voordat ze naar buiten gaan. Is het nodig? Zo niet, blijf dan thuis.” In Berts huis wordt gefilmd met drie op afstand bestuurbare camera’s. Anne-Mar is via de webcam in contact met Bert en houdt de kijker op de hoogte van de initiatieven die op gang komen via het platform #Nietalleen.
          </p>
          <p>
            Het programma Nietalleen.nl is een coproductie met SkyHigh TV en is vanaf woensdag 25 maart, dagelijks om 16.45 uur, te zien bij de EO op NPO 1.
          </p>
          <p class="text-center mt-12">
            <v-btn
              href="https://www.npostart.nl/zoeken?term=nietalleen"
              color="primary"
              class="my-2"
              target="_new"
              nuxt
              x-large
            >
              Bekijken op NPO Start
              <v-icon right>
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </p>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    // page specific metadata
    return {
      title: 'TV-programma',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: '#Nietalleen - TV-programma'
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
