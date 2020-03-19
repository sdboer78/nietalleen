<template>
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
      color="black"
      validate-on-blur
      outlined
      required
      suffix="1/6"
    />
    <v-expand-transition>
      <v-btn
        v-if="!fullName"
        color="primary"
        class="mr-4"
        block
        x-large
        @click="validate"
      >
        volgende stap
      </v-btn>
    </v-expand-transition>
    <v-expand-transition>
      <div v-if="fullName">
        <v-text-field
          v-model="emailAddress"
          :rules="emailAddressRules"
          label="Wat is je e-mailadres?"
          color="black"
          validate-on-blur
          outlined
          required
          suffix="2/6"
          class="mb-4"
        />
        <v-text-field
          v-model="postalCode"
          :rules="postalCodeRules"
          label="Wat is je postcode?"
          color="black"
          validate-on-blur
          outlined
          required
          suffix="3/6"
          class="mb-4"
        />
        <v-text-field
          v-model="phoneNumber"
          :rules="phoneNumberRules"
          label="Wat is je telefoonnummer?"
          color="black"
          validate-on-blur
          outlined
          required
          suffix="4/6"
          class="mb-4"
        />
        <v-select
          v-model="requestType"
          :rules="requestTypeRules"
          :items="requestTypeOptions"
          label="Op welke manier kunnen we hulp bieden?"
          color="black"
          validate-on-blur
          outlined
          required
          multiple
          suffix="5/6"
          class="mb-4"
        />
        <v-expand-transition>
          <v-textarea
            v-if="showRequestMessage"
            v-model="requestMessage"
            :rules="requestMessageRules"
            no-resize
            label="Op welke manier kunnen wij hulp bieden?"
            color="black"
            validate-on-blur
            outlined
            required
            class="mb-4"
          />
        </v-expand-transition>
        <v-radio-group
          v-model="requestAidFor"
          color="black"
          mandatory
        >
          <template v-slot:label>
            <p>Ik vraag hulp voor... (6/6)</p>
          </template>
          <v-radio
            v-for="n in requestAidForOptions"
            :key="n"
            :label="`${n}`"
            :value="n"
          />
        </v-radio-group>
        <v-expand-transition>
          <v-sheet
            v-if="isForNeedy"
            elevation="3"
          >
            <div class="px-4 pt-2 pb-0">
              <v-checkbox
                v-model="consentPrivacyNeedy"
                :rules="consentPrivacyNeedyRules"
                label="Ik heb toestemming om zijn/haar gegevens te verstrekken."
                color="black"
                outlined
                required
              />
              <v-text-field
                v-model="needyFullName"
                label="Wat is zijn/haar naam?"
                color="black"
                validate-on-blur
                outlined
              />
              <v-text-field
                v-model="needyPostalCode"
                label="Wat is zijn/haar postcode?"
                color="black"
                validate-on-blur
                outlined
              />
              <v-text-field
                v-model="needyPhoneNumber"
                :rules="needyPhoneNumberRules"
                label="Wat is zijn/haar telefoonnummer?"
                color="black"
                validate-on-blur
                outlined
              />
              <v-text-field
                v-model="needyEmailAddress"
                :rules="needyEmailAddressRules"
                label="Wat is zijn/haar e-mailadres?"
                color="black"
                validate-on-blur
                outlined
              />
            </div>
          </v-sheet>
        </v-expand-transition>
        <p class="text-left mt-5">
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
          :disabled="!valid || showPopup"
          color="primary"
          class="mr-4"
          block
          x-large
          @click="submit"
        >
          vraag hulp
        </v-btn>
      </div>
    </v-expand-transition>
    <v-snackbar
      v-model="showPopup"
      color="white"
      class="black--text"
      :timeout="0"
      top
      multi-line
      vertical
    >
      {{ popupMessage }}
      <v-btn
        color="primary"
        text
        @click="showPopup = null"
      >
        sluit
      </v-btn>
    </v-snackbar>
  </v-form>
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
      'iets anders'
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
    ],
    formSubmissionResponse: {},
    popupMessage: '',
    showPopup: false,
    formSubmissionSuccessMessage: 'Jouw verzoek wordt door ons team zo snel mogelijk doorgezet naar een lokale organisatie die past bij jouw hulpvraag.',
    formSubmissionFailedMessage: 'Er is iets fout gegaan aan onze kant waardoor we je verzoek niet hebben ontvangen. Probeer het later nog eens.'
  }),
  computed: {
    isForNeedy () {
      return this.requestAidFor === this.requestAidForOptions[1]
    },
    showRequestMessage () {
      return this.requestType.includes('iets anders')
    }
  },
  watch: {
    formSubmissionResponse () {
      if (this.formSubmissionResponse.status === '204') {
        this.popupMessage = this.formSubmissionSuccessMessage
      } else {
        this.popupMessage = this.formSubmissionFailedMessage
      }
      this.showPopup = true
    }
  },
  methods: {
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    validate () {
      this.$refs.form.validate()
    },
    async submit (evt) {
      evt.preventDefault()

      // show loading bar

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
      } = this

      this.formSubmissionResponse = await postMessage({
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
      })
    }
  }
}
</script>

<style type="text/css" lang="scss">
  .v-text-field .v-text-field__suffix {
    color: #8F9094;
    font-size: 0.9em;
    letter-spacing: 1px;
  }

  .v-textarea .v-text-field__suffix {
    padding-right: 12px;
  }

  .v-select__slot .v-label {
    padding-right: 1.5em;
  }
</style>
