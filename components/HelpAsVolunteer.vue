<template>
  <div>
    <p>
      <span class="d-block font-weight-bold primary--text">1.</span>
      Zoek tussen de 300+ co&ouml;rdinatiepunten in Nederland naar eentje bij jou in de buurt.
      <br>
      <v-btn
        color="primary"
        class="mt-2"
        x-large
        @click="showHubFinder = !showHubFinder"
      >
        Open de lijst
      </v-btn>
      <hub-finder v-model="showHubFinder" />
    </p>
    <p class="mt-8">
      <span class="d-block font-weight-bold primary--text">2.</span>
      Meld je aan bij dat co&ouml;rdinatiepunt door erop te klikken.
    </p>
    <p class="mt-8">
      <span class="d-block font-weight-bold primary--text">3.</span>
      Het co&ouml;rdinatiepunt neemt zo snel mogelijk contact met je op.
    </p>
  </div>
</template>

<script>
import HubFinder from '~/components/HubFinder.vue'

export default {
  name: 'HelpAsVolunteer',
  components: { HubFinder },
  data () {
    return {
      showHubFinder: false
    }
  }
}
</script>
