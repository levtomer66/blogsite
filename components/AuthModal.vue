<template>
  <div>

    <b-modal id="auth-modal" hide-footer title="התחבר">
      <login-form @success="success"></login-form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LoginForm from "./LoginForm.vue";
export default {
  components: { LoginForm },
  mounted: function () {
    this.$bvModal.show("auth-modal");
  },
  methods: {
    success: function () {
      return true;
    },
  },
};
</script>
