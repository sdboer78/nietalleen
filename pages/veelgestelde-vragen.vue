<template>
  <div>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-8 text-center"
      >
        <v-flex xs12 sm8 md6 lg4 xl3>
          <hero-image
            :src="require('@/assets/looking-at-dog.jpg')"
            size="400px"
            class="mx-auto mb-8"
          >
            <v-img
              :src="require('@/assets/logo-niet-alleen.svg')"
              max-width="200px"
              aspect-ratio="5"
              position="center center"
              contain
            />
          </hero-image>
          <h1 class="display-1">
            Veelgestelde vragen
          </h1>
          <v-expansion-panels
            v-model="openPanels"
            focusable
            flat
            hover
            multiple
            tile
          >
            <!-- repeat -->
            <v-expansion-panel v-for="(item,i) in 5" :key="i">
              <v-expansion-panel-header :expand-icon="openPanels.includes(i) ? 'mdi-minus' : 'mdi-plus'">
                vraag
              </v-expansion-panel-header>
              <v-expansion-panel-content>content</v-expansion-panel-content>
            </v-expansion-panel>
            <!-- repeat -->
          </v-expansion-panels>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>
<script>
import HeroImage from '~/components/HeroImage.vue'

export default {
  components: { HeroImage },
  data () {
    return {
      openPanels: []
    }
  },
  head () {
    // page specific metadata
    return {
      title: 'Veelgestelde vragen',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: '#Nietalleen - Veelgestelde vragen'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Overal in Nederland zetten talloze lokale organisaties en kerken zich in voor mensen die hulp kunnen gebruiken. Praktische hulp nodig? Een luisterend oor? Je bent #Nietalleen.'
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

<style type="text/css" lang="scss">
</style>
