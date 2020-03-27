<template>
  <v-dialog
    v-model="show"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar
        flat
        dark
        color="primary"
        class="flex-grow-0"
        extension-height="85"
      >
        <v-btn
          icon
          dark
          @click="show = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>
          Vind een co&ouml;rdinatiepunt
        </v-toolbar-title>
        <template slot="extension">
          <v-text-field
            v-model="searchString"
            label="Zoek op plaatsnaam..."
            color="white"
            append-icon="mdi-magnify"
            outlined
            clearable
            class="search-field mb-n4"
          />
        </template>
      </v-toolbar>
      <v-card-text class="px-4 py-2">
        <v-row>
          <v-slide-y-transition
            v-for="hub in filteredHubs"
            :key="hub.id"
          >
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
            >
              <v-card
                outlined
                @click="openVolunteerForm(hub)"
              >
                <v-card-title>
                  {{ hub.township }}
                  <v-spacer />
                  <v-icon color="primary">
                    mdi-message-arrow-right-outline
                  </v-icon>
                </v-card-title>
                <v-card-subtitle>
                  {{ hub.email }}
                </v-card-subtitle>
                <v-card-text>
                  De organisatie '<strong>{{ hub.name }}</strong>' is hier het co&ouml;rdinatiepunt.
                </v-card-text>
              </v-card>
            </v-col>
          </v-slide-y-transition>
          <v-slide-y-transition>
            <v-col
              v-if="filteredHubs.length == 0"
              cols="12"
            >
              <p class="caption">
                Geen co&ouml;rdinatiepunten gevonden bij je zoekopdracht.
              </p>
            </v-col>
          </v-slide-y-transition>
        </v-row>
      </v-card-text>
      <hub-volunteer-form
        v-model="showHubVolunteerForm"
        :hub="selectedHub"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import HubVolunteerForm from '~/components/HubVolunteerForm.vue'

export default {
  name: 'HubFinder',
  components: { HubVolunteerForm },
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: this.value,
      showHubVolunteerForm: false,
      searchString: null,
      selectedHub: null,
      hubs: [
        // @Todo replace with real data
        {
          id: 0,
          name: 'Parochiële Caritas Instelling van R.K. Bonifatius Parochie',
          township: 'Almere',
          email: 'almere@nietalleen.nl'
        },
        {
          id: 1,
          name: 'Present Groningen',
          township: 'Groningen',
          email: 'groningen@nietalleen.nl'
        },
        {
          id: 2,
          name: 'Kerk aan het Plein',
          township: 'Voorthuizen',
          email: 'voorthuizen@nietalleen.nl'
        },
        {
          id: 3,
          name: 'Evangelie Gemeente Lisse',
          township: 'Lisse',
          email: 'lisse@nietalleen.nl'
        },
        {
          id: 4,
          name: 'Present Ede',
          township: 'Ede',
          email: 'ede@nietalleen.nl'
        },
        {
          id: 5,
          name: 'Stichting Present Ridderkerk',
          township: 'Ridderkerk',
          email: 'ridderkerk@nietalleen.nl'
        },
        {
          id: 6,
          name: 'Buren Jagermeester',
          township: 'Ede',
          email: 'ede@nietalleen.nl'
        },
        {
          id: 7,
          name: 'Stichting Present Hilversum',
          township: 'Hilversum',
          email: 'hilversum@nietalleen.nl'
        }
      ]
    }
  },
  computed: {
    filteredHubs () {
      return this.hubs.filter((hub) => {
        if (this.searchString === null) { return true }
        if (this.searchString === '') { return true }

        // @Todo replace with smart filtering based on location of the user for example
        if (hub !== undefined && hub.name !== null) {
          return hub.name.includes(this.searchString) || hub.township.includes(this.searchString) || hub.email.includes(this.searchString)
        }
      }).sort((a, b) => a.township.localeCompare(b.township))
    }
  },
  watch: {
    value () {
      this.show = this.value
    },
    show () {
      this.$emit('input', this.show)
    }
  },
  methods: {
    openVolunteerForm (hub) {
      this.selectedHub = hub
      this.showHubVolunteerForm = true
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
.search-field {
  max-width: 400px;
}
</style>
