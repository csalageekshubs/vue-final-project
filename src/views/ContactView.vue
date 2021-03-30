<template>
  <div>
    <h1>CONTACT VIEW</h1>

    <div class="form-wrapper">
      <input v-model="name" class="form-item" placeholder="Name" />
      <input
        v-model="email"
        type="email"
        class="form-item"
        placeholder="Email"
      />
      <textarea
        v-model="message"
        class="form-item"
        placeholder="Write your message"
      />

      <BaseButton @click.native="onSendButtonClicked" :disabled="!isFormFilled">
        Send 💌
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import BaseButton from "@/components/BaseButton";

export default {
  name: "ContactView",
  components: {
    BaseButton,
  },
  computed: {
    ...mapGetters({
      isFormFilled: "contact/isFormFilled",
    }),
    name: {
      get() {
        return this.$store.getters["contact/name"];
      },
      set(value) {
        this.$store.commit("contact/SET_FORM_FIELD", { key: "name", value });
      },
    },
    email: {
      get() {
        return this.$store.getters["contact/email"];
      },
      set(value) {
        this.$store.commit("contact/SET_FORM_FIELD", { key: "email", value });
      },
    },
    message: {
      get() {
        return this.$store.getters["contact/message"];
      },
      set(value) {
        this.$store.commit("contact/SET_FORM_FIELD", { key: "message", value });
      },
    },
  },

  methods: {
    onSendButtonClicked() {
      alert("Message sent: " + this.message);
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  margin: 40px auto;
  width: 50%;
  display: flex;
  flex-direction: column;
}

textarea {
  resize: none;
}

input,
textarea {
  padding: 15px;
}

.form-item {
  margin: 10px 0px;
}
</style>
