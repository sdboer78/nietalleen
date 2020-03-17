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
      <h1>Ik zoek hulp</h1>
      <p class="caption mt-5">
        Deze functionaliteit komt woensdag 16 maart beschikbaar.
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  head () {
    return {
      title: 'Ik zoek hulp',
      meta: [
        { hid: 'vragen', name: 'description', content: 'Op deze plek willen we mensen die getroffen zijn door de gevolgen van het coronavirus helpen door hulpvragen en lokale organisaties actief met elkaar in contact te brengen.' }
      ]
    }
  }
}
</script>
