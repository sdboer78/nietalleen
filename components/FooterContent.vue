<template>
  <div class="mx-auto">
    <p class="caption mb-0 white--text text-center">
      #Nietalleen wordt gecoördineerd door Evangelische Omroep
    </p>
    <p class="caption mb-0 white--text text-center">
      <nuxt-link to="/over" class="white--text wrap-whitespace">Over ons</nuxt-link>
      <span class="mx-2">|</span>
      <a
        href="javascript:void(null)"
        class="white--text"
        @click.stop="showTermsConditionsDialog = true"
      >Algemene voorwaarden</a>
      <span class="mx-2 d-none d-sm-inline">|</span>
      <br class="mx-2 d-sm-none">
      <a
        href="javascript:void(null)"
        class="white--text"
        @click.stop="showPrivacyDialog = true"
      >Privacyverklaring</a>
      <span class="mx-2">|</span>
      <a
        href="javascript:void(null)"
        class="white--text"
        @click.stop="showCookiesDialog = true"
      >Cookie instellingen</a>
    </p>

    <v-dialog
      v-model="showTermsConditionsDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
          primary-title
        >
          Algemene voorwaarden
        </v-card-title>
        <v-card-text>
          <p>....</p>
          <p>Bekijk deze informatie op de website van de EO (in een nieuw venster).</p>
        </v-card-text>
        <v-divider />
        <v-card-actions @click="showTermsConditionsDialog = false">
          <v-spacer />
          <v-btn
            color="primary"
            text
          >
            Annuleer
          </v-btn>
          <v-btn
            href="https://www.eo.nl/algemene-voorwaarden"
            target="_new"
            color="primary"
            text
          >
            Bekijk
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="showPrivacyDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
          primary-title
        >
          Privacyverklaring
        </v-card-title>
        <v-card-text>
          <p>....</p>
          <p>Bekijk deze informatie op de website van de EO (in een nieuw venster).</p>
        </v-card-text>
        <v-divider />
        <v-card-actions @click="showPrivacyDialog = false">
          <v-spacer />
          <v-btn
            color="primary"
            text
          >
            Annuleer
          </v-btn>
          <v-btn
            href="https://www.eo.nl/privacy"
            target="_new"
            color="primary"
            text
          >
            Bekijk
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="showCookiesDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline"
          primary-title
        >
          Cookie-instellingen
        </v-card-title>
        <v-card-text>
          <p>....</p>
          <p>Bekijk deze informatie op de website van de EO (in een nieuw venster).</p>
        </v-card-text>
        <v-divider />
        <v-card-actions @click="showCookiesDialog = false">
          <v-spacer />
          <v-btn
            color="primary"
            text
          >
            Annuleer
          </v-btn>
          <v-btn
            href="https://cookies.nietalleen.nl/sites/EO/nietalleen.nl/settings.html"
            class="npo_cc_settings_link"
            rel="noreferrer"
            target="_new"
            color="primary"
            text
          >
            Bekijk
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'FooterContent',
  data () {
    return {
      showTermsConditionsDialog: false,
      showPrivacyDialog: false,
      showCookiesDialog: false
    }
  }
}
</script>
