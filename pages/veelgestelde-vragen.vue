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
            :src="require('~/assets/looking-at-dog.jpg')"
            size="400px"
            class="mx-auto mb-8"
          >
            <img
              src="~/assets/logo-niet-alleen.svg?data"
              width="200"
            >
          </hero-image>
          <h1 class="display-1">
            Veelgestelde vragen
          </h1>
          <v-expansion-panels
            v-model="openPanels"
            accordion
            focusable
            flat
            hover
            multiple
            class="text-left"
          >
            <v-expansion-panel v-for="(item,i) in faq" :key="i">
              <v-expansion-panel-header :expand-icon="openPanels.includes(i) ? 'mdi-minus' : 'mdi-plus'">
                {{ item.question }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <span v-html="item.answer" />
              </v-expansion-panel-content>
            </v-expansion-panel>
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
          answer: 'Met #Nietalleen verbinden we de talloze lokale en kerkelijke hulpinitiatieven aan elkaar en aan hulpvragers. De hulpvraag wordt door één van de samenwerkende organisaties opgepakt en doorgestuurd.'
        },
        {
          question: 'Hoe is #Nietalleen ontstaan?',
          answer: `#Nietalleen is aan het begin van de coronacrisis opgericht. Toen in Nederland in maart 2020 de directe gevolgen van het coronavirus zichtbaar werden sloegen de Evangelische Omroep, Protestantse Kerk Nederland, ChristenUnie en 4M op initiatief van Tiemen Westerduin de handen ineen en lanceerden #Nietalleen. Door het hele land ontstonden bij lokale kerken en maatschappelijke organisaties talloze initiatieven voor mensen die getroffen werden door de gevolgen van COVID-19. #Nietalleen heeft als doel de honderden lokale hulpinitiatieven aan hulpvragers te verbinden en om samenwerking tussen initiatieven te stimuleren.
          <br><br>De unieke kracht van #Nietalleen dat we door het hele land contacten met hulpaanbieders hebben en dus een bijna landelijk dekkend netwerk faciliteren. Op die manier kunnen hulpvragen snel door iemand uit de eigen buurt opgepakt worden.
          <br><br>Dit netwerk willen we ook in de toekomst blijven inzetten. We willen de samenwerking tussen kerken en maatschappelijke organisaties blijven stimuleren en ze helpen om zich in de lokale samenleving zichtbaar te maken als plek waar je terecht kunt voor hulp en voor een luisterend oor. Daarbij maken we gebruik van de kracht van elke lokale partner. We versterken wat er al is en helpen samenwerking te laten groeien.
          <br><br>Ook nieuwe hulpverleningsinitiatieven kunnen zich aansluiten bij #Nietalleen. Het platform heeft een christelijke basis, maar richt zich breedte van de samenleving, zowel wat betreft hulpaanbod als hulpvragers.`
        },
        {
          question: 'Hoe kunnen mensen om hulp vragen? ',
          answer: 'Door te bellen met <a href="tel:0800-1322">0800-1322</a> of via <a href="/">het webformulier</a>.'
        },
        {
          question: 'Voor welke hulp kunnen mensen bij #Nietalleen terecht?',
          answer: '#Nietalleen is voor mensen die om wat voor reden ook in nood komen en die eenmalig of kortdurend praktische hulp nodig hebben of een luisterend oor.'
        },
        {
          question: 'Hoe kunnen kerken en lokale organisaties hun diensten aanbieden?',
          answer: 'Kerken en lokale organisaties kunnen zichzelf aanmelden op <a href="/hulp-bieden">nietalleen.nl/hulp-bieden</a> door het formulier in te vullen.'
        },
        {
          question: 'Kunnen particulieren ook hun diensten aanbieden?',
          answer: 'Veruit de meeste particulieren die zich aanmelden om te helpen doen dit met de beste bedoelingen! Helaas zijn er ook mensen die misbruik willen maken van de situatie. Bestaande organisaties en initiatieven kennen de vrijwilligers met wie zij werken, waardoor we de kans op misbruik zoveel mogelijk kunnen verkleinen. Daarom zetten we geen hulpvragen door naar particulieren. Je kunt je wel aansluiten bij een van de initiatieven. Je kunt hier zelf een initiatief of organisatie voor benaderen of je kunt via de #Nietalleen coördinator van de betreffende plaats in contact worden gebracht met een van de reeds betrokken initiatieven.'
        },
        {
          question: 'Voor wie is #Nietalleen bedoeld?',
          answer: 'Voor iedereen die behoefte heeft aan een gesprek of hulp, ongeacht leeftijd of situatie. Dankzij ons landelijk dekkende netwerk kunnen we overal in Nederland hulp en aanbod verbinden.'
        },
        {
          question: 'Welke kerken en organisaties zitten er achter #Nietalleen',
          answer: 'Deze lijst breidt zich steeds verder uit. Kijk op <a href="/over">nietalleen.nl/over</a> voor de meest recente lijst.'
        },
        {
          question: 'Wordt mijn hulpvraag altijd opgepakt?',
          answer: '#Nietalleen probeert zo goed mogelijk een hulpvraag aan de juiste hulpaanbieder te binden. Daarmee is #Nietalleen verantwoordelijk voor het doorzetten van de hulpvraag naar (lokale) initiatieven. Het indienen van een hulpvraag betekent niet dat er recht op hulp ontstaat; de (lokale) aanbieders zullen hun best doen om jouw vraag zo goed mogelijk op te pakken. De kwaliteit, in algemene zin, van het hulpaanbod ligt bij de initiatieven zelf.'
        },
        {
          question: 'Kan ik ook contact opnemen met algemene vragen over het coronavirus (COVID-19)?',
          answer: 'Voor meer informatie over het coronavirus en de maatregelen bezoek <a target="_blank" href="https://www.rivm.nl">www.rivm.nl</a> of bel het landelijke nummer voor vragen over het coronavirus <a href="tel:08001351">0800 1351</a>.'
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

    &.v-expansion-panel--active {
      border: 1px solid #EFEFF4;
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
