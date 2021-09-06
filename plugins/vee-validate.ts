import Vue from 'vue'

import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure,
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

// @ts-ignore
export default ({ app }):void => {
  configure({
    defaultMessage: (_field_, values) => app.i18n.t(`messages.${values._rule_}`, values)
  })
}
