// #/plugins/bugsnag.js
import Vue from 'vue'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'
import constants from '~/constants/bugsnag-api'

Bugsnag.start({
  apiKey: constants.BUGSNAG_API_KEY,
  plugins: [new BugsnagPluginVue(Vue)],
  releaseStage: process.env.NODE_ENV
})

export default (ctx, inject) => {
  inject('bugsnag', Bugsnag)
}
