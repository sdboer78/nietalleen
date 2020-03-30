<template>
  <div>
    <p>
      <span class="d-block font-weight-bold primary--text">1.</span>
      Meld je aan als vrijwilliger via dit formulier.
      <br>
      <volunteer-form v-model="openVolunteerForm" />
    </p>
    <p class="mt-8">
      <span class="d-block font-weight-bold primary--text">2.</span>
      Je aanmelding wordt verzonden naar het co&ouml;rdinatiepunt bij jou in de buurt.
    </p>
    <p class="mt-8">
      <span class="d-block font-weight-bold primary--text">3.</span>
      Het co&ouml;rdinatiepunt neemt zo snel mogelijk contact met je op.
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
