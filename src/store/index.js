import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: {
            show: false,
            text: 'Something went wrong',
            type: 'danger',
        },
    },
    mutations: {
        setMessageText(state, text) {
            state.message['text'] = text;
        },
        setMessageType(state, type) {
            state.message['type'] = type;
        },
        hideMessage(state) {
            state.message.show = false
        },
        showMessage(state) {
            state.message.show = true
        },
    },
    actions: {
    },
    modules: {},
    getters: {
        getMessage: state => state.message
    },
})