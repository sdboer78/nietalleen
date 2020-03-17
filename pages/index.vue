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
      <h1 class="display-1">Ik zoek hulp</h1>
      (( FORMULIER ))
    </v-container>
    <section class="grey lighten-2 pa-8">
      <v-container>
        <h2 class="headline">
          Wij laten ons niet inpakken door het corona-virus.
        </h2>
        <p>
          Wij laten ons niet inpakken door het corona-virus. Dat kan onze gezondheid aanvallen, maar niet onze medemenselijkheid. Wij staan voor je klaar, overal in Nederland. Voor een belangstellend telefoongesprek of het regelen van praktische hulp. Je bent #nietalleen!
        </p>
      </v-container>
    </section>
    <section class="grey lighten-3 pa-8">
      <v-container>
        <h2 class="headline">
          We bieden je een luisterend oor.
        </h2>
        <p>
          Misschien heb je geen hulpvraag, maar wil je alleen even je hart luchten. Geen probleem! Wij staan voor je klaar. Of ben je slecht ter been en weet je niet hoe je boodschappen nu gedaan moeten worden of zou het fijn zijn als er voor je wordt gekookt. Wij verbinden je dan door met mensen in jouw woonplaats. Zij proberen dat voor jou te regelen.
        </p>
        <v-btn href="tel:0900-0000">
          <v-icon>mdi-phone</v-icon>
          0900-0000
        </v-btn>
      </v-container>
    </section>
    <section class="grey lighten-2 pa-8">
      <v-container>
        <h2 class="headline">
          Betrokken organisaties
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </p>
        (( LOGO'S ))
      </v-container>
    </section>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>
