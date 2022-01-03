import en from './assets/i18n/en.json'
import hr from './assets/i18n/hr.json'

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
    locale: document.querySelector("#app").dataset.appLang || 'en',
    messages: {
        en: en,
        hr: hr
    }
})