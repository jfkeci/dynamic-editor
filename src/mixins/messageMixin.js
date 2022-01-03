export default {
    methods: {
        setMessage(text, type = 0) {
            this.$store.commit('setMessageText', text)
            if (type == 1) {
                this.$store.commit('setMessageType', 'success')
            } else {
                this.$store.commit('setMessageType', 'danger')
            }
            this.$store.commit('showMessage')
        },
        hideMessage() {
            this.$store.commit('hideMessage')
        }
    }
}