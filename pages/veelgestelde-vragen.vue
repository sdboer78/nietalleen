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
                <span v-html="item.answer"></span>
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
          question: 'Wat is #Nietalleen?',
          answer: 'Een online website en platform waar hulpvragen van particulieren en aanbod van diensten door kerken en lokale organisaties bij elkaar gebracht worden.'
        },
        {
          question: 'Waarom is #Nietalleen opgericht?',
          answer: 'Kerken en lokale (hulp)organisaties bundelen de krachten, zodat overal in het land praktische en betrouwbare hulp geboden kan worden en de initiatieven elkaar kunnen versterken. Een hulpvraag wordt opgepakt en doorgestuurd naar een organisatie bij de hulpvrager in de buurt'
        },
        {
          question: 'Hoe kunnen mensen om hulp vragen? ',
          answer: 'Door te bellen met <a href="tel:0800-1322">0800-1322</a>'
        },
        {
          question: 'Wat kunnen mensen verwachten van #Nietalleen?',
          answer: 'Het gaat om praktische hulp én een luisterend oor. Dus om boodschappen doen of medicijnen halen, honden uitlaten, belrondes onder oudere gemeenteleden doen en voedsel inzamelen voor de voedselbank.'
        },
        {
          question: 'Hoe kunnen kerken en lokale organisaties hun diensten aanbieden?',
          answer: 'Kerken en lokale organisaties kunnen zichzelf aanmelden op <a href="https://nietalleen.nl/hulp-bieden">https://nietalleen.nl/hulp-bieden</a> door het formulier in te vullen.'
        },
        {
          question: 'Kunnen particulieren ook hun diensten aanbieden?',
          answer: 'Binnenkort kunnen ook particulieren hun hulpaanbod hier aangeven, dan is op <a href="https://nietalleen.nl/">https://nietalleen.nl/</a> te zien bij welke organisatie in de buurt er aansluiting gemaakt kan worden. '
        },
        {
          question: 'Voor wie is #Nietalleen bedoeld?',
          answer: 'Voor iedereen die behoefte heeft aan een gesprek of hulp, ongeacht leeftijd of situatie. Dankzij ons landelijk dekkende netwerk kunnen we overal in Nederland hulp en aanbod verbinden.'
        },
        {
          question: 'Welke kerken en organisaties zitten er achter #Nietalleen',
          answer: 'Christelijk Gereformeerde Kerken<br>ChristenUnie<br>Diaconaal Steunpunt<br>Evangelische Omroep<br>Gereformeerde Kerken Vrijgemaakt<br>Kerk in Actie<br>Missie Nederland<br>Navigators<br>Nederlands Gereformeerde Kerken<br>Protestantse Kerk in Nederland<br>Rooms Katholieke Kerk<br>SGP<br>Stichting Agapè<br>Hip Helpt<br>Stichting Present<br>Stichting Schuldhulpmaatje<br>Tear<br>Tot Heil des Volks<br>4e Musketier<br>Youth for Christ<br>En nog steeds breidt de lijst zich uit… kijk op <a href="https://nietalleen.nl/over/">https://nietalleen.nl/over/</a> voor de meest recente lijst.<br>PKN en EO coördineren de onderlinge samenwerking.'
        },
        {
          question: 'Wordt mijn hulpvraag altijd opgepakt?',
          answer: 'Met het platform #Nietalleen probeert de EO zo goed mogelijk een hulpvraag aan de juiste hulpaanbieder te binden. Daarmee is #Nietalleen verantwoordelijk voor het doorzetten van de hulpvraag naar (lokale) initiatieven. Het indienen van een hulpvraag betekent niet dat er recht op hulp ontstaat; de (lokale) aanbieders zullen hun best doen om jouw vraag zo goed mogelijk op te pakken. De kwaliteit, in algemene zin, van het hulpaanbod ligt bij de initiatieven zelf.'
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
