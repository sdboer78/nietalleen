<template>
  <v-layout
    column
    align-stretch
    class="text-center"
  >
    <v-container class="pa-8">
      <v-img
        :src="require('@/assets/logo-niet-alleen.png')"
        aspect-ratio="2.2"
        contain
      />
      <br>
      <h1>Welkom bij #nietalleen</h1>
    </v-container>
    <section class="grey lighten-1 pa-8">
      <v-container>
        <p>
          Op deze plek willen we zoveel mogelijk mensen die getroffen zijn door de gevolgen van het
          coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen.
          Vanaf woensdag kun je hier een hulpvraag kwijt voor jezelf of voor een ander.
          Ook kun je hier aangeven dat jij of jouw organisatie iets voor een ander kunt doen.
          Jouw hulpvraag of jouw hulpaanbod wordt door één van de samenwerkende organisaties opgepakt en
          doorgestuurd naar een organisatie bij jou in de buurt. Zo proberen we elkaar in deze moeilijke
          tijden te helpen en naar elkaar om te kijken.
        </p>
        <p><strong>Lokale maatschappelijke organisaties en kerken</strong></p>
      </v-container>
    </section>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>
