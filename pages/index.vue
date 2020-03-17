<template>
  <v-layout
    column
    align-stretch
    class="text-center"
  >
    <section class="grey lighten-2">
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1eDxpR0IUErARS5g1slGMmBlHpyDrPEbl" class="maps-iframe" />
    </section>
    <section class="primary white--text pa-8">
      <v-container>
        <h2 class="headline">
          Wij laten ons niet inpakken door het corona-virus.
        </h2>
        <p>
          Wij laten ons niet inpakken door het corona-virus. Dat kan onze gezondheid aanvallen, maar niet onze medemenselijkheid. Wij staan voor je klaar, overal in Nederland. Voor een belangstellend telefoongesprek of het regelen van praktische hulp. Je bent #nietalleen!
        </p>
      </v-container>
    </section>
  </v-layout>
</template>

<script>
export default {
  components: {},
  head () {
    return {
      title: '#nietalleen',
      meta: [
        { hid: 'homepage', name: 'description', content: 'Op deze plek willen we mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen.' }
      ]
    }
  }
}
</script>

<style type="text/css" lang="scss">
.maps-iframe {
  border: 0;
  height: 80vh;
  width: 100%;
}
</style>
