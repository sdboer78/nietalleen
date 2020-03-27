<template>
  <v-dialog
    v-model="showDialog"
    persistent
    max-width="600px"
  >
    <v-card>
      <v-card-title>
        Aanmelden als vrijwilliger
      </v-card-title>
      <v-card-subtitle>
        {{ hub.name }}
      </v-card-subtitle>
      <v-divider />
      <v-card-text class="px-6">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Legal first name*" required />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Legal middle name" hint="example of helper text only on focus" />
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Legal last name*"
              hint="example of persistent helper text"
              persistent-hint
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Email*" required />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password*" type="password" required />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age*"
              required
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
              multiple
            />
          </v-col>
        </v-row>
        <small>*indicates required field</small>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="cancelForm()"
        >
          Annuleren
        </v-btn>
        <v-btn
          color="primary"
          text
          @click="submitForm()"
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
      default: false
    },
    hub: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      showDialog: this.value
    }
  },
  watch: {
    value () {
      this.showDialog = this.value
    },
    showDialog () {
      this.$emit('input', this.showDialog)
    }
  },
  methods: {
    cancelForm () {
      // @Todo: show a warning if any field has a value
      this.showDialog = false
    },
    submitForm () {
      // @Todo: validate and send the form to our email API
      this.showDialog = false
    }
  }
}
</script>
