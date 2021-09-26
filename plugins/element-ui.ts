import Vue from 'vue';
// @ts-ignore
import lang from 'element-ui/lib/locale/lang/en';
// @ts-ignore
import locale from 'element-ui/lib/locale';

const ElementUI = require('element-ui');

// configure language
locale.use(lang);

// Init ElementUI components
Vue.use(ElementUI);
