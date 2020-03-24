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
            class="text-left"
          >
            <!-- repeat -->
            <v-expansion-panel v-for="(item,i) in faq" :key="i">
              <v-expansion-panel-header :expand-icon="openPanels.includes(i) ? 'mdi-minus' : 'mdi-plus'">
                {{ item.question }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.answer }}
              </v-expansion-panel-content>
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
      openPanels: [],
      faq: [
        {
          question: 'Dit is mijn vraag',
          answer: 'Dit is mijn antwoord'
        },
        {
          question: 'Dit is mijn vraag',
          answer: 'Dit is mijn tweede antwoord'
        }
      ]
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
  .v-expansion-panel {
    margin-bottom: 16px;

    & > *:last-child {
      margin-bottom: 0;
    }
  }

  .v-expansion-panel,
  .v-expansion-panel-content {
    border-radius: 4px !important;
    overflow: hidden;
  }

  .v-expansion-panel-header {
    background-color: #EFEFF4;
    font-family: "Bellota", "Century Gothic", "Avenir", sans-serif !important;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);

    &:before {
      background-color: #FFFFFF;
    }
  }

  .v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active {
    background-color: #FFFFFF;
  }

  .v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,
  .v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before {
    opacity: 0 !important;
  }

  .v-expansion-panel-header__icon {
    background-color: #EFEFF4;
    border-radius: 100%;
    padding: 2px;
  }
</style>
