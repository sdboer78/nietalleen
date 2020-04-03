<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="need-help-form__form text-left"
  >
    <select-pills
      v-model="helpType"
      :rules="helpTypeRules"
      :items="helpTypeOptions"
      label="Waar heb je hulp bij nodig?"
      custom-item-label="iets anders..."
      custom-item
      required
      class="mb-4"
    />
    <v-expand-transition>
      <v-btn
        v-if="helpType.length <= 0"
        color="primary"
        class="mr-4"
        block
        x-large
        @click="validate"
      >
        Volgende stap
      </v-btn>
    </v-expand-transition>
    <v-expand-transition>
      <div v-if="helpType.length > 0">
        <v-text-field
          v-model="fullName"
          :rules="fullNameRules"
          label="Wat is je naam?"
          color="black"
          validate-on-blur
          outlined
          required
        />
        <v-text-field
          v-model="emailAddress"
          :rules="emailAddressRules"
          label="Wat is je e-mailadres?"
          color="black"
          validate-on-blur
          outlined
          required
          class="mb-2"
        />
        <v-text-field
          v-model="postalCode"
          :rules="postalCodeRules"
          label="Wat is je postcode?"
          color="black"
          validate-on-blur
          outlined
          required
          class="mb-2"
        />
        <v-text-field
          v-model="phoneNumber"
          :rules="phoneNumberRules"
          label="Wat is je telefoonnummer?"
          color="black"
          validate-on-blur
          outlined
          required
          class="mb-2"
        />
        <v-radio-group
          v-model="needy"
          color="black"
          mandatory
        >
          <template v-slot:label>
            <p class="black--text">
              Ik vraag hulp voor...
            </p>
          </template>
          <v-radio
            v-for="n in needyOptions"
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
              <p class="mt-5 black--text">
                Onderstaande gegevens helpen ons bij het beantwoorden van de hulpvraag, maar het is niet verplicht om deze gegevens te verzenden.
              </p>
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
        <p class="mt-5 caption">
          Dit initiatief wordt geco&ouml;rdineerd door de EO. Ik geef hierbij toestemming om deze gegevens te delen met de EO
          en met de organisaties die de hulpvraag oppakken en ga akkoord met
          de algemene voorwaarden (<a href="https://eo.nl/algemenevoorwaarden" target="_blank">eo.nl/algemenevoorwaarden</a>)
          en privacy statement (<a href="https://eo.nl/privacy" target="_blank">eo.nl/privacy</a>) van de EO.
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
          class="mt-2 mr-4"
          block
          x-large
          @click="submit"
        >
          Vraag hulp
        </v-btn>
        <p class="mt-4 mb-12 text-center grey--text">
          Je hulpvraag wordt vertrouwelijk behandeld.
        </p>
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
import selectPills from '~/components/selectpills'

export default {
  name: 'NeedHelpForm',
  components: { selectPills },
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
    helpType: [],
    helpTypeRules: [
      v => (!!v && v.length > 0) || 'Laat ons weten waarmee we kunnen helpen'
    ],
    helpTypeValidationState: '',
    helpTypeMessages: [],
    helpTypeOptions: [
      'boodschappen',
      'praatje',
      'hond uitlaten',
      'kinderopvang'
    ],
    needy: '',
    needyOptions: [
      'mijzelf',
      'iemand anders'
    ],
    needyRules: [
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
    popupMessage: '',
    showPopup: false,
    formSubmissionSuccessMessage: 'Jouw verzoek wordt door ons team zo snel mogelijk doorgezet naar een lokale organisatie die past bij jouw hulpvraag.',
    formSubmissionFailedMessage: 'Er is iets fout gegaan aan onze kant waardoor we je verzoek niet hebben ontvangen. Probeer het later nog eens.'
  }),
  computed: {
    isForNeedy () {
      return this.needy === this.needyOptions[1]
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

      if (!this.$refs.form.validate()) {
        return
      }

      const {
        fullName,
        emailAddress,
        postalCode,
        phoneNumber,
        helpType,
        consentPrivacy,
        needy,
        needyFullName,
        needyPhoneNumber,
        needyEmailAddress,
        needyPostalCode
      } = this

      const response = await postMessage({
        fullName,
        emailAddress,
        postalCode,
        phoneNumber,
        helpType,
        consentPrivacy,
        needy,
        needyFullName,
        needyPhoneNumber,
        needyEmailAddress,
        needyPostalCode
      })

      if (response.status === 204) {
        this.popupMessage = this.formSubmissionSuccessMessage
        this.$refs.form.reset()
      } else {
        this.popupMessage = this.formSubmissionFailedMessage
      }

      this.showPopup = true
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  .v-text-field {
    opacity: 0;
    transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);

    &--is-booted {
      opacity: 1;
    }
  }

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

  // overwrite autofill styling
  input,
  textarea,
  select {
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      box-shadow: 0 0 0px 1000px #fff inset;
      -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    }
  }
</style>
