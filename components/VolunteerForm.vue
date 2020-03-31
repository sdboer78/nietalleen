<template>
  <div>
    <v-expand-transition>
      <v-form
        v-if="showFields"
        ref="form"
        v-model="valid"
        lazy-validation
        class="mt-8"
      >
        <v-select
          v-model="helpType"
          :rules="helpTypeRules"
          :items="helpTypeOptions"
          label="Op welke manier kun je hulp bieden?"
          color="black"
          validate-on-blur
          outlined
          required
          multiple
          suffix="1/5"
          class="mb-2"
        />
        <v-expand-transition>
          <v-textarea
            v-if="showHelpTypeCustom"
            v-model="helpTypeCustom"
            :rules="helpTypeCustomRules"
            no-resize
            label="Op welke manier kun je hulp bieden?"
            color="black"
            validate-on-blur
            outlined
            required
            class="mb-2"
          />
        </v-expand-transition>
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
        <v-text-field
          v-model="city"
          :rules="cityRules"
          label="Wat is je woonplaats?"
          color="black"
          validate-on-blur
          outlined
          required
          suffix="3/5"
          class="mb-2"
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
          Dit initiatief wordt geco&ouml;rdineerd door de EO. Ik geef hierbij toestemming om deze gegevens te delen met de EO en betrokken organisaties en ga akkoord met de algemene voorwaarden en privacy statement van de EO.
        </p>
        <v-checkbox
          v-model="consentPrivacy"
          :rules="consentPrivacyRules"
          label="Ja, ik ga akkoord"
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
      color="white"
      class="black--text"
      :timeout="0"
      top
      multi-line
      vertical
    >
      {{ alertMessage }}
      <v-btn
        color="primary"
        text
        @click="hide"
      >
        sluiten
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'VolunteerForm',
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data: () => {
    return {
      showFields: false,
      valid: true,
      alertMessage: '',
      showAlert: false,
      fullName: '',
      fullNameRules: [
        v => !!v || 'We hebben je naam nodig'
      ],
      city: '',
      cityRules: [
        v => !!v || 'We hebben je woonplaats nodig om je te koppelen aan een organisatie in jouw buurt',
        v => !!v || 'Deze plaats komt niet voor in ons systeem' // @Todo: make this field autocomplete
      ],
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
      helpType: '',
      helpTypeRules: [
        v => !!v || 'We willen graag weten hoe je kunt helpen'
      ],
      helpTypeOptions: [
        'boodschappen',
        'hond uitlaten',
        'praatje',
        'kinderopvang',
        'iets anders'
      ],
      helpTypeCustom: '',
      helpTypeCustomRules: [
        v => !!v || 'We hebben je hulpvraag nodig'
      ],
      consentPrivacy: '',
      consentPrivacyRules: [
        v => !!v || 'Je moet akkoord gaan om je aan te melden'
      ],
      formSubmissionSuccessMessage: 'Jouw verzoek is verstuurd naar het co&ouml;rdinatiepunt.',
      formSubmissionFailedMessage: 'Er is iets fout gegaan aan onze kant waardoor we je aanmelding niet hebben ontvangen. Probeer het later nog eens.'
    }
  },
  computed: {
    showHelpTypeCustom () {
      return this.helpType.includes('iets anders')
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
    async submitForm (evt) {
      evt.preventDefault()

      if (!this.$refs.form.validate()) {
        return
      }

      // @Todo: send the form to our real email API instead of this dummy
      const response = await new Promise(resolve => setTimeout(resolve({ status: 204 }), 1000))

      if (response.status === 204) {
        this.alertMessage = this.formSubmissionSuccessMessage
        this.$refs.form.reset()
      } else {
        this.alertMessage = this.formSubmissionFailedMessage
      }
      this.showAlert = true
    }
  }
}
</script>
