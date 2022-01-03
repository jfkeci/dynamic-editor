<template>
  <b-alert v-if="message.show" :variant="message.type" show>
    <div v-if="$dbg">{{ message.text }}</div>
    <div v-else>{{ message.text }}</div>
  </b-alert>
</template>

<script>
import _ from "lodash";
export default {
  name: "Message",
  computed: {
    message() {
      return this.$store.getters.getMessage;
    },
  },
  watch: {
    message: {
      handler: _.debounce(function () {
        this.hideMessage();
      }, 6000),
      deep: true,
    },
  },
};
</script>