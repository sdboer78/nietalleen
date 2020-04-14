<template>
  <div>
    <section>
      <v-layout
        justify-center
        align-center
        class="pa-8 text-center"
      >
        <v-flex
          xs12
          sm8
          md6
          lg4
          xl3
          class="pb-12"
        >
          <hero-image
            :src="require('~/assets/flower.jpg')"
            size="400px"
            class="mx-auto mb-8"
          >
            <img
              src="~/assets/logo-niet-alleen.svg?data"
              width="200"
            >
          </hero-image>
          <h1 class="display-1">
            Training stervensbegeleiding NPV
          </h1>
          <p class="mt-10">
            Vanwege de coronacrisis is er een groot risico dat mensen in eenzaamheid moeten sterven. Verschillende hospices,
            verpleeghuizen en terminale thuishulpteams zijn op zoek naar versterking van hun teams door vrijwilligers.
          </p>
          <p>
            Vanuit het platform #Nietalleen willen we daar graag op inspringen en in onze kerkelijke achterbannen mensen
            motiveren om deze taak op zich te nemen. Eén van onze partners - de NPV - biedt daarom training aan voor
            vrijwilligers die zich hiervoor in willen zetten.
          </p>
          <p>
            Je kunt je aanmelden via <a href="https://npvzorg.nl/aanmelden-online-training-palliatieve-zorg/" target="_blank">deze
              link</a> en wordt dan uitgenodigd voor een telefonisch intakegesprek. Terwijl jij de
            training (op afstand) volgt, gaat de NPV op zoek naar een organisatie in jouw omgeving waar je kunt worden
            ingezet.
          </p>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
import HeroImage from '~/components/HeroImage.vue'

export default {
  components: { HeroImage },
  head () {
    // page specific metadata
    return {
      title: 'Training NPV',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: '#Nietalleen - Training NPV'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Vanwege de coronacrisis is er een groot risico dat mensen in eenzaamheid moeten sterven. Verschillende hospices, verpleeghuizen en terminale thuishulpteams zijn op zoek naar versterking van hun teams door vrijwilligers.'
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
