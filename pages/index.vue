<template>
  <div>
    <section class="pa-8 white">
      <v-layout
        justify-center
        align-center
        class="text-center"
      >
        <v-flex xs12 sm8 md6>
          <h1 class="display-1">
            Wij laten ons niet inpakken door het corona-virus.
          </h1>
          <p>
            Dat kan onze gezondheid aanvallen, maar niet onze medemenselijkheid. Wij staan voor je klaar, overal in Nederland. Voor een belangstellend telefoongesprek of het regelen van praktische hulp. Je bent #nietalleen!
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section class="pa-8" style="background-color:#EFEFF4;">
      <v-layout
        justify-center
        align-center
        class="text-center"
      >
        <v-flex xs12 sm8 md6>
          <h2>Waarom #nietalleen?</h2>
          <p>
            Op deze plek willen we zoveel mogelijk mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen. Vanaf woensdag kun je hier een hulpvraag kwijt voor jezelf of voor een ander. Ook kun je hier aangeven dat jij of jouw organisatie iets voor een ander kunt doen. Jouw hulpvraag of jouw hulpaanbod wordt door één van de samenwerkende organisaties opgepakt en doorgestuurd naar een organisatie bij jou in de buurt. Zo proberen we elkaar in deze moeilijke tijden te helpen en naar elkaar om te kijken.
          </p>
        </v-flex>
      </v-layout>
    </section>
    <section class="pa-8">
      <v-layout
        justify-center
        align-center
        class="text-center"
      >
        <v-flex xs12 sm8 md6>
          <h2>Meld jouw lokale organisatie aan!</h2>
          <v-btn
            href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
            target="_new"
            color="primary"
          >
            Wij kunnen helpen
          </v-btn>
          <p class="caption mt-5">
            Ben je een particulier en wil je ook graag helpen? We gaan binnenkort op de website laten zien bij welke organisatie bij jou in de buurt je kan aansluiten.
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
      title: 'Home',
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
  height: 100%;
  width: 100%;
}
</style>
