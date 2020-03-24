<template>
  <div class="footer__content">
    <div class="prefooter py-10 mx-auto text-center">
      <h4 class="display-1 white--text mb-0">
        Volg ons
      </h4>
      <v-btn
        text
        icon
        color="white"
        class="mx-3"
        target="_new"
        href="https://www.facebook.com/nietalleennl/"
        large
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn
        text
        icon
        color="white"
        class="mx-3"
        target="_new"
        href="https://twitter.com/nietalleen_nl"
        large
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </div>
    <div class="mx-auto py-5">
      <p class="caption mb-2 white--text text-center">
        #Nietalleen wordt geco&ouml;rdineerd door Protestantse Kerk in Nederland en Evangelische Omroep.
      </p>
      <p class="caption mb-0 white--text text-center">
        <nuxt-link to="/over" class="white--text wrap-whitespace">
          Over ons
        </nuxt-link>
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
    </div>

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
          <p>
            #Nietalleen wordt gecoördineerd door de Protestantse Kerken Nederland en de Evangelische Omroep.
            We hechten waarde aan duidelijkheid over ons beleid ten opzichte van de algemene voorwaarden.
          </p>
          <p>
            Voor #Nietalleen maken we gebruik van technologie op de platformen van de Evangelische Omroep.
            Bekijk daarom de algemene voorwaarden op de website van de Evangelische Omroep (in een nieuw venster).
          </p>
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
            <v-icon right>
              mdi-open-in-new
            </v-icon>
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
          <p>
            #Nietalleen wordt gecoördineerd door de Protestantse Kerken Nederland en de Evangelische Omroep.
            We hechten waarde aan duidelijkheid over ons beleid ten opzichte van uw privacy.
          </p>
          <p>
            Voor #Nietalleen maken we gebruik van technologie op de platformen van de Evangelische Omroep.
            Bekijk daarom de privacyverklaring op de website van de Evangelische Omroep (in een nieuw venster).
          </p>
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
            <v-icon right>
              mdi-open-in-new
            </v-icon>
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
          <p>
            #Nietalleen wordt gecoördineerd door de Protestantse Kerken Nederland en de Evangelische Omroep.
            We hechten waarde aan duidelijkheid over ons beleid ten opzichte van cookies en tracking.
          </p>
          <p>
            Voor #Nietalleen maken we gebruik van technologie op de platformen van de Evangelische Omroep.
            Het aanpassen van je cookie-voorkeuren gebeurt daarom via de Evangelische Omroep (in een nieuw venster).
          </p>
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
            color="primary"
            text
          >
            Aanpassen
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

<style type="text/css" lang="scss">
  .footer__content {
    width: 100%;
  }

  .prefooter {
    background-color: #D94174;
  }
</style>
