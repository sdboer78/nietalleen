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
        v-model="postalCode"
        :rules="postalCodeRules"
        label="Wat is je postcode?"
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
      <v-select
        v-model="requestType"
        :rules="requestTypeRules"
        :items="requestTypeOptions"
        label="Op welke manier kunnen we hulp bieden?"
        outlined
        required
        multiple
      />
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
      <v-checkbox
        v-if="isForNeedy"
        v-model="consentPrivacyNeedy"
        :rules="consentPrivacyNeedyRules"
        label="Ik heb toestemming om zijn/haar gegevens te verstrekken."
        outlined
        required
      />
      <v-text-field
        v-if="isForNeedy"
        v-model="needyFullName"
        label="Wat is zijn/haar naam?"
        outlined
      />
      <v-text-field
        v-if="isForNeedy"
        v-model="needyPostalCode"
        label="Wat is zijn/haar postcode?"
        outlined
      />
      <v-text-field
        v-if="isForNeedy"
        v-model="needyPhoneNumber"
        :rules="needyPhoneNumberRules"
        label="Wat is zijn/haar telefoonnummer?"
        outlined
      />
      <v-text-field
        v-if="isForNeedy"
        v-model="needyEmailAddress"
        :rules="needyEmailAddressRules"
        label="Wat is zijn/haar e-mailadres?"
        outlined
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
        @click="submit"
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
      class="mt-3 "
    >
      Wij kunnen hulp bieden
    </v-btn>
  </div>
</template>

<script>
import postMessage from '~/utils/obi4wan-api'

export default {
  name: 'NeedHelpForm',
  data: () => ({
    valid: true,
    fullName: '',
    fullNameRules: [
      v => !!v || 'We hebben je naam nodig'
    ],
    emailAddress: '',
    emailAddressRules: [
      v => !!v || 'We hebben je e-mailadres nodig',
      v => /.+@.+\..+/.test(v) || 'Het e-mailadres is niet correct'
    ],
    postalCode: '',
    postalCodeRules: [
      v => !!v || 'We hebben je postcode nodig',
      v => /^\d{4}\s?\w{2}$/.test(v) || 'Dit is geen geldige postcode'
    ],
    phoneNumber: '',
    phoneNumberRules: [
      v => !!v || 'We hebben je telefoonnummer nodig',
      v => /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/.test(v) || 'Dit is geen geldig telefoonnummer'
    ],
    requestType: '',
    requestTypeRules: [
      v => !!v || 'We willen graag weten hoe we kunnen helpen'
    ],
    requestTypeOptions: [
      'boodschappen',
      'hond uitlaten',
      'praatje',
      'kinderopvang',
      'Iets anders'
    ],
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
    needyPostalCode: '',
    needyPostalCodeRules: [
      v => v === '' || /^\d{4}\s?\w{2}$/.test(v) || 'Dit is geen geldige postcode'
    ],
    needyPhoneNumber: '',
    needyPhoneNumberRules: [
      v => v === '' || /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/.test(v) || 'Dit is geen geldig telefoonnummer'
    ],
    needyEmailAddress: '',
    needyEmailAddressRules: [
      v => v === '' || /.+@.+\..+/.test(v) || 'Het e-mailadres is niet correct'
    ],
    consentPrivacyNeedy: '',
    consentPrivacyNeedyRules: [
      v => !!v || 'Je moet toestemming hebben om de gegevens van een ander te verstrekken'
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
    submit (evt) {
      evt.preventDefault()

      if (!this.$refs.form.validate()) {
        return
      }

      const {
        fullName,
        emailAddress,
        postalCode,
        phoneNumber,
        requestType,
        requestMessage,
        consentPrivacy,
        requestAidFor,
        needyFullName,
        needyPhoneNumber,
        needyEmailAddress,
        needyPostalCode
      } = this.data

      const message = {
        fullName,
        emailAddress,
        postalCode,
        phoneNumber,
        requestType,
        requestMessage,
        consentPrivacy,
        requestAidFor,
        needyFullName,
        needyPhoneNumber,
        needyEmailAddress,
        needyPostalCode
      }

      postMessage(message)
    }
  }
}
</script>

<style type="text/css" lang="scss">
</style>
