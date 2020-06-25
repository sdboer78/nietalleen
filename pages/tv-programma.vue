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
            In het tv-programma Nietalleen.nl liet de EO zien hoe, midden in de coronacrisis, mensen voor elkaar klaar hebben gestaan. Live vanuit hun eigen huiskamers deelden EO-presentatoren Bert van Leeuwen en Anne-Mar Zwart bemoedigende initiatieven die in deze bijzondere tijd zijn ontstaan.
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
