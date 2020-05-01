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
            <v-icon size="16" color="grey" left>
              mdi-clock
            </v-icon>
            Elke maandag en vrijdag dag rond 16:30 op
            <img src="~/assets/logo-npo-1.svg?data" width="50">
          </p>
          <p class="font-weight-bold">
            In het nieuwe tv-programma Nietalleen.nl laat de EO zien hoe, midden in de coronacrisis, mensen voor elkaar klaarstaan. Live vanuit hun eigen huiskamers delen EO-presentatoren Bert van Leeuwen en Anne-Mar Zwart bemoedigende initiatieven die in deze bijzondere tijd ontstaan.
          </p>
          <v-img
            :src="require('~/assets/bert-van-leeuwen.jpg')"
            class="mx-n8 mx-auto my-5"
            aspect-ratio="1.75"
            position="center center"
            width="auto"
            max-width="none"
            cover
          >
            <a
              target="_blank"
              href="https://www.npostart.nl/nietalleennl/VPWON_1318786"
              class="npo-play d-flex fill-height align-center justify-center"
            >
              <span class="npo-play-button">
                <img src="~/assets/npo-player-play.svg?data">
              </span>
            </a>
          </v-img>
          <p class="text-center mt-n12">
            <v-btn
              href="https://www.npostart.nl/nietalleennl/VPWON_1318786"
              color="npo"
              class="my-2"
              target="_new"
              nuxt
              large
              dark
            >
              Bekijk op NPO Start
              <v-icon x-small right>
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </p>
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
            Het programma Nietalleen.nl is een coproductie met SkyHigh TV en op maandag en vrijdag rond 16:30 te zien bij de EO op NPO 1. Deze worden herhaald op woensdag- en zaterdagmiddag.
          </p>
          <v-divider />
          <p class="caption mt-4">
            In elke uitzending worden oproepjes gedaan waarin de hulp van kijkers gevraagd wordt. Kijkers die willen helpen kunnen mailen naar <a href="mailto:ikwilhelpen@nietalleen.nl">ikwilhelpen@nietalleen.nl</a>. De tv-redactie zal contact opnemen als de hulpvraag nog niet is opgelost. Als er geen contact wordt opgenomen dan heeft er al een match plaatsgevonden met een andere hulpaanbieder.
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

<style scoped type="text/css" lang="scss">
.npo-play {
  &:hover,
  &:active,
  &:focus {
    .npo-play-button {
      transform: scale(1.08);
    }
  }
}

.npo-play-button {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0,0,0,.8);
  padding: 20px;
  transition: transform 0.1s cubic-bezier(0.4, 0.0, 0.2, 1);

  img {
    width: 20px;
  }
}
</style>
