import Vue from 'vue'

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  setInteractionMode
} from 'vee-validate'

import * as rules from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
setInteractionMode('eager')

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    // @ts-ignore
    // eslint-disable-next-line import/namespace
    ...rules[rule]
  })
})

