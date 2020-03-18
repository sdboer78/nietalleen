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
        outlined
        required
      />
      <v-text-field
        v-model="emailAddress"
        :rules="emailAddressRules"
        label="Wat is je e-mailadres?"
        outlined
        required
      />
      <v-text-field
        v-model="city"
        :rules="cityRules"
        label="Wat is je woonplaats?"
        outlined
        required
      />
      <v-text-field
        v-model="phoneNumber"
        :rules="phoneNumberRules"
        label="Wat is je telefoonnummer?"
        outlined
        required
      />
      <!-- requestType -->
      <v-textarea
        v-model="requestMessage"
        :rules="requestMessageRules"
        label="Op welke manier kunnen wij hulp bieden?"
        outlined
        required
      />
      <v-radio-group
        v-model="requestAidFor"
        mandatory
      >
        <v-radio
          v-for="n in requestAidForOptions"
          :key="n"
          :label="`Ik vraag hulp voor ${n}`"
          :value="n"
        />
      </v-radio-group>

      <v-text-field
        v-if="isForNeedy"
        v-model="needyFullName"
        label="Wat is zijn/haar naam?"
        outlined
        required
      />
      <v-text-field
        v-if="isForNeedy"
        v-model="needyCity"
        label="In welke plaats woon zij/hij?"
        outlined
        required
      />
      <v-text-field
        v-if="isForNeedy"
        v-model="needyPhoneNumber"
        :rules="needyPhoneNumberRules"
        label="Wat is zijn/haar telefoonnummer?"
        outlined
        required
      />
      <p class="text-left">
        Dit initiatief wordt gecoördineerd door de EO. Ik geeft hierbij toestemming om deze gegevens te delen met de EO en met de organisaties die de hulpvraag oppakken en ga akkoord met de algemene voorwaarden eo.nl/algemenevoorwaarden en privacy statement eo.nl/privacy van de EO.
      </p>
      <v-checkbox
        v-model="consentPrivacy"
        :rules="consentPrivacyRules"
        label="Ja, ik ga akkoord"
        outlined
        required
      />
      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        block
        @click="validate"
      >
        vraag hulp
      </v-btn>
    </v-form>
    <v-btn
      href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ra6c-sHLkUCQ_b7C2EYL3rpiNnpU7XZOndQiob_pkfJUMzU3VUw1WFA0WVJZU1pLUk9PVUFLT0NHMy4u"
      target="_new"
      color="grey darken-3"
      text
      style="text-decoration: underline;"
    >
      Wij kunnen hulp bieden
    </v-btn>
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
      v => /.+@.+\..+/.test(v) || 'Het e-mailadres is niet correct'
    ],
    city: '',
    cityRules: [
      v => !!v || 'We hebben je woonplaats nodig'
    ],
    phoneNumber: '',
    phoneNumberRules: [
      v => !!v || 'We hebben je telefoonnummer nodig',
      v => /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/.test(v) || 'Dit is geen geldig telefoonnummer'
    ],
    requestType: '',
    requestMessage: '',
    requestMessageRules: [
      v => !!v || 'We hebben je hulpvraag nodig'
    ],
    requestAidFor: '',
    requestAidForOptions: [
      'mijzelf',
      'iemand anders'
    ],
    requestAidForRules: [
      v => !!v || 'Je moet een keuze maken'
    ],
    needyFullName: '',
    needyCity: '',
    needyPhoneNumber: '',
    needyPhoneNumberRules: [
      v => /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/.test(v) || 'Dit is geen geldig telefoonnummer'
    ],
    consentPrivacy: '',
    consentPrivacyRules: [
      v => !!v || 'Je moet akkoord gaan om hulp te vragen'
    ]
  }),
  computed: {
    isForNeedy () {
      return this.requestAidFor === this.requestAidForOptions[1]
    }
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
</script>

<style type="text/css" lang="scss">
</style>
