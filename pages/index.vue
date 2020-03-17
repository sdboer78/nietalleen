<template>
  <div>
    <section class="pa-8 background-tea white--text text-center">
      <v-layout
        justify-center
        align-center
        style="min-height: 50vh;"
      >
        <v-flex xs12 sm8 md4>
          <h1 class="display-1">
            Wij laten ons niet inpakken door het corona-virus.
          </h1>
          <p>
            Dat kan onze gezondheid aanvallen, maar niet onze medemenselijkheid. Wij staan voor elkaar klaar, overal in Nederland. Voor een belangstellend telefoongesprek of het regelen van praktische hulp. Je bent #nietalleen!
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
        <v-flex xs12 sm8 md4>
          <h2>Waarom #nietalleen?</h2>
          <p>
            Op deze plek willen we zoveel mogelijk mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen. <strong>Vanaf woensdag 18 maart</strong> kun je hier een hulpvraag kwijt voor jezelf of voor een ander. Ook kun je hier aangeven dat jij of jouw organisatie iets voor een ander kunt doen. Jouw hulpvraag of jouw hulpaanbod wordt door één van de samenwerkende organisaties opgepakt en doorgestuurd naar een organisatie bij jou in de buurt. Zo proberen we elkaar in deze moeilijke tijden te helpen en naar elkaar om te kijken.
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
        <v-flex xs12 sm8 md4>
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
.background-tea {
  background-color: #C63866;
  position: relative;

  > * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    background-image: url('~assets/kopje-thee.jpg');
    background-position: center center;
    background-size: cover;
    opacity: 0.25;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 0;
  }
}
</style>
