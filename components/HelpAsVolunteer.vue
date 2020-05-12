<template>
  <div>
    <p>
      <span class="d-block font-weight-bold primary--text">1.</span>
      #Nietalleen zet alleen hulpvragen door naar initiatieven en niet naar individuen. Individuen die willen helpen worden in contact gebracht met initiatieven om zich daar bij aan te sluiten.
      <br>
      <volunteer-form v-model="openVolunteerForm" />
    </p>
    <p class="mt-8">
      <span class="d-block font-weight-bold primary--text">2.</span>
      Je aanmelding wordt verzonden naar het co&ouml;rdinatiepunt bij jou in de buurt.
    </p>
    <p class="mt-8">
      <span class="d-block font-weight-bold primary--text">3.</span>
      Als jouw gemeente al een co&ouml;rdinatiepunt heeft, dan worden jouw gegevens verzonden naar de co&ouml;rdinator. Die laat je weten bij welke initiatieven je kunt aansluiten.
      <br><br>Als jouw gemeente nog geen co&ouml;rdinatiepunt heeft,<br>dan moet je nog even geduld hebben. Zodra een coördinator is aangesteld worden je gegevens doorgestuurd en wordt er contact met je opgenomen.
    </p>
  </div>
</template>

<script>
import VolunteerForm from '~/components/VolunteerForm.vue'

export default {
  name: 'HelpAsVolunteer',
  components: { VolunteerForm },
  data () {
    return {
      openVolunteerForm: false
    }
  }
}
</script>
