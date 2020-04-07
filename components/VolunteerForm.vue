<template>
  <div>
    <v-expand-transition>
      <v-form
        v-if="showFields"
        ref="form"
        v-model="valid"
        lazy-validation
        class="mt-12 mb-12"
      >
        <select-pills
          v-model="helpType"
          :rules="helpTypeRules"
          :items="helpTypeOptions"
          label="Op welke manier kun je hulp bieden?"
          custom-item-label="iets anders..."
          custom-item
          color="grey darken-4"
          required
          suffix="1/5"
          class="mb-2 text-left"
        />
        <v-text-field
          v-model="fullName"
          :rules="fullNameRules"
          label="Wat is je naam?"
          color="black"
          validate-on-blur
          outlined
          required
          suffix="2/5"
        />
        <v-autocomplete
          v-model="city"
          :rules="cityRules"
          :items="cityItems"
          label="Wat is je woonplaats?"
          :loading="loadingCities"
          :search-input.sync="cityKeyword"
          cache-items
          color="black"
          validate-on-blur
          hide-no-data
          outlined
          required
          suffix="3/5"
          class="mb-2"
          @update:search-input="searchCities(cityKeyword, city)"
        />
        <v-text-field
          v-model="emailAddress"
          :rules="emailAddressRules"
          label="Wat is je e-mailadres?"
          color="black"
          validate-on-blur
          outlined
          required
          suffix="4/5"
          class="mb-2"
        />
        <v-text-field
          v-model="phoneNumber"
          :rules="phoneNumberRules"
          label="Wat is je telefoonnummer?"
          color="black"
          validate-on-blur
          outlined
          suffix="5/5"
          required
          class="mb-2"
        />
        <p class="mt-2 caption text-left">
          Dit initiatief wordt geco&ouml;rdineerd door de EO. Ik geef hierbij toestemming om deze gegevens te delen met de EO
          en met betrokken organisaties en ga akkoord met
          de algemene voorwaarden (<a href="https://eo.nl/algemenevoorwaarden" target="_blank">eo.nl/algemenevoorwaarden</a>)
          en privacy statement (<a href="https://eo.nl/privacy" target="_blank">eo.nl/privacy</a>) van de EO.
        </p>
        <v-checkbox
          v-model="consentPrivacy"
          :rules="consentPrivacyRules"
          label="Ja, ik ga akkoord"
          color="black"
          outlined
          required
        />
        <v-btn
          color="primary"
          :disabled="!valid || showAlert"
          x-large
          @click="submitForm"
        >
          Versturen
        </v-btn>
      </v-form>
    </v-expand-transition>
    <v-fade-transition>
      <v-btn
        v-if="!showFields"
        color="primary"
        class="mt-2"
        x-large
        @click="showFields = !showFields"
      >
        Aanmelden
      </v-btn>
    </v-fade-transition>
    <v-snackbar
      v-model="showAlert"
      :color="formSubmissionState"
      class="white--text"
      :timeout="0"
      top
    >
      <v-icon
        color="white"
        class="mr-4"
      >
        {{ formSubmissionState == 'success' ? 'mdi-check' : 'mdi-alert-octagon' }}
      </v-icon>
      {{ alertMessage }}
      <v-btn
        color="white"
        text
        @click="showAlert = null"
      >
        SLUIT
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import constants from '~/constants/nietalleen-api'
import selectPills from '~/components/selectpills'
import { slugify } from '~/utils/slugify'

export default {
  name: 'VolunteerForm',
  components: { selectPills },
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data: () => {
    return {
      valid: true,
      showFields: false,
      showAlert: false,
      alertMessage: '',
      formSubmissionState: null,
      formSubmissionSuccessMessage: 'Verstuurd! Jouw verzoek is verstuurd naar het coördinatiepunt.',
      formSubmissionFailedMessage: 'Er is iets fout gegaan aan onze kant waardoor we je aanmelding niet hebben ontvangen. Probeer het later nog eens.',
      mailFrom: 'noreply@nietalleen.nl',
      mailSubject: 'Aanmelding vrijwilliger via Nietalleen.nl',
      mailFields: [
        'fullName',
        'emailAddress',
        'city',
        'phoneNumber',
        'helpType'
      ],
      fullName: '',
      fullNameRules: [
        v => !!v || 'We hebben je naam nodig'
      ],
      city: '',
      cityRules: [
        v => !!v || 'We hebben je woonplaats nodig om je te koppelen aan een organisatie in jouw buurt'
      ],
      cityItems: [],
      cityKeyword: null,
      loadingCities: null,
      emailAddress: '',
      emailAddressRules: [
        v => !!v || 'We hebben je e-mailadres nodig',
        v => /.+@.+\..+/.test(v) || 'Het e-mailadres is niet correct'
      ],
      phoneNumber: '',
      phoneNumberRules: [
        v => !!v || 'We hebben je telefoonnummer nodig',
        v => /^((\+|00(\s|\s?-\s?)?)31(\s|\s?-\s?)?(\(0\)[-\s]?)?|0)[1-9]((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/.test(v) || 'Dit is geen geldig telefoonnummer'
      ],
      helpType: [],
      helpTypeRules: [
        v => !!v || 'We willen graag weten hoe je kunt helpen'
      ],
      helpTypeOptions: [
        'boodschappen',
        'hond uitlaten',
        'praatje',
        'kinderopvang'
      ],
      consentPrivacy: '',
      consentPrivacyRules: [
        v => !!v || 'Je moet akkoord gaan om je aan te melden'
      ]
    }
  },
  computed: {
    mailTo () {
      // @TODO: somehow map city name to existing email address for th  e matching local hub
      const cityNameSlug = slugify(this.city)
      return `${cityNameSlug}@nietalleen.nl`
    }
  },
  watch: {
    value () {
      this.showFields = this.value
    },
    showFields () {
      this.$emit('input', this.showFields)
    }
  },
  methods: {
    hide () {
      this.$emit('input', false)
    },
    show () {
      this.$emit('input', true)
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    validate () {
      this.$refs.form.validate()
    },
    searchCities (keyword) {
      keyword && keyword !== this.city && this.getMatchingCities(keyword)
    },
    async getMatchingCities (keyword) {
      this.loadingCities = 'secondary'
      this.cityItems = []

      const response = await this.$axios.get(`${constants.NIETALLEEN_API_HOST}/${constants.NIETALLEEN_API_ENDPOINT_LOCATIONS}`,
        {
          params: {
            city: keyword
          }
        })
      this.cityItems = response.data.items.map(item => item.city)
      this.loadingCities = null
    },
    async submitForm (evt) {
      evt.preventDefault()

      if (!this.$refs.form.validate()) {
        return
      }
      const {
        emailAddress,
        mailFrom,
        mailTo,
        mailSubject,
        mailFields
      } = this

      const formData = new FormData()
      formData.append('from', mailFrom)
      formData.append('to', mailTo)
      formData.append('cc', emailAddress)
      formData.append('subject', mailSubject)

      mailFields.map((field) => {
        this[field] !== null && this[field] !== '' && formData.append(field, this[field])
      })

      const response = await this.$axios.post(`${constants.NIETALLEEN_API_HOST}/${constants.NIETALLEEN_API_ENDPOINT_MAILFORM}`, formData)

      if (response.statusText === 'OK') {
        this.formSubmissionState = 'success'
        this.alertMessage = this.formSubmissionSuccessMessage
        this.$refs.form.reset()
        this.showFields = false
      } else {
        this.formSubmissionState = 'error'
        this.alertMessage = this.formSubmissionFailedMessage
      }
      this.showAlert = true
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
  ::v-deep .v-input .v-progress-linear {
    top: calc(100% - 4px);
    width: calc(100% - 4px);
    left: 2px;
    right: 2px;
  }
</style>
