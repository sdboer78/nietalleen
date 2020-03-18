<template>
  <div
    class="need-help-form"
  >
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="need-help-form__form"
    >
      <v-text-field
        v-model="fullName"
        :rules="fullNameRules"
        label="Wat is je naam?"
        required
      />
      <v-text-field
        v-model="emailAddress"
        :rules="emailAddressRules"
        label="Wat is je e-mailadres?"
        required
      />
      <v-text-field
        v-model="city"
        :rules="[v => !!v || 'Graag een woonplaats invullen']"
        label="In welke plaats woon je?"
        required
      />
      <p class="text-left">
        Dit initiatief wordt gecoördineerd door de EO. Ik geeft hierbij toestemming om deze gegevens te delen met de EO en met de organisaties die de hulpvraag oppakken en ga akkoord met de algemene voorwaarden eo.nl/algemenevoorwaarden en privacy statement eo.nl/privacy van de EO.
      </p>
      <v-checkbox
        v-model="consentPrivacy"
        :rules="[v => !!v || 'Je moet akkoord gaan om hulp te vragen']"
        label="Ja, ik ga akkoord"
        required
      />
      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        @click="validate"
      >
        vraag hulp
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'NeedHelpForm',
  data: () => ({
    valid: true,
    fullName: '',
    fullNameRules: [
      v => !!v | 'We hebben je naam nodig',
      v => (v && v.length <= 5) || 'Je naam moet langer zijn dan 5 karakters'
    ],
    emailAddress: '',
    emailAddressRules: [
      v => !!v || 'We hebben je e-mailadres nodig',
      v => /.+@.+\..+/.test(v) || 'het e-mailadres is nog niet compleet'
    ],
    city: '',
    phoneNumber: '',
    requestType: '',
    requestMessage: '',
    consentPrivacy: '',
    requestAidFor: '',
    requestAidForOptions: [
      'mijzelf',
      'iemand anders'
    ],
    needyFullName: '',
    needyCity: '',
    needyPhoneNumber: ''
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
</script>

<style type="text/css" lang="scss">
</style>
