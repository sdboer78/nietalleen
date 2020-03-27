<template>
  <v-dialog
    v-model="value"
    persistent
    scrollable
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        Aanmelden als vrijwilliger
      </v-card-title>
      <v-card-subtitle
        v-if="hub"
        class="mt-n2"
      >
        <strong>Regio:</strong> {{ hub.township }}
        <br>
        <strong>Organisatie:</strong> {{ hub.name }}
      </v-card-subtitle>
      <v-divider />
      <v-card-text class="px-6">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="mt-2"
            >
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
                v-model="phoneNumber"
                :rules="phoneNumberRules"
                label="Wat is je telefoonnummer?"
                color="black"
                validate-on-blur
                outlined
                required
                class="mb-2"
              />
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
              <p class="mt-2">
                Dit initiatief wordt gecoördineerd door de EO. Ik geef hierbij toestemming om deze gegevens te delen met de EO en betrokken organisaties en ga akkoord met de algemene voorwaarden en privacy statement van de EO.
              </p>
              <v-checkbox
                v-model="consentPrivacy"
                :rules="consentPrivacyRules"
                label="Ja, ik ga akkoord"
                outlined
                required
              />
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
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="cancelForm"
        >
          Annuleren
        </v-btn>
        <v-btn
          color="primary"
          text
          :disabled="!valid || showAlert"
          @click="submitForm"
        >
          Versturen
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'HubVolunteerForm',
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true
    },
    hub: {
      type: Object,
      default: () => {}
    }
  },
  data: () => {
    return {
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
      alertMessage: '',
      showAlert: false,
      formSubmissionSuccessMessage: 'Jouw verzoek is verstuurd naar het coördinatiepunt.',
      formSubmissionFailedMessage: 'Er is iets fout gegaan aan onze kant waardoor we je aanmelding niet hebben ontvangen. Probeer het later nog eens.'
    }
  },
  computed: {
    showHelpTypeCustom () {
      return this.helpType.includes('iets anders')
    }
  },
  methods: {
    hide () {
      this.$emit('input', false)
    },
    show () {
      this.$emit('input', true)
    },
    cancelForm () {
      // @Todo: show a warning if any field has a value
      this.hide()
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
