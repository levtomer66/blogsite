<template>
  <div class="app">
    <div class="profilePic">
        <input ref="fileInput" @change="uploadProfilePic" type="file" name="userPic" style="display: none" /><br />
        <a href="#"><img @click="$refs.fileInput.click()" :src="user.picPath" /></a>
    </div>
    <p style="float: right"> שם תצוגה </p>
    <input type="text"  v-model="user.displayName" />
    <br />
    <p>אימייל</p>
     <input type="text"  v-model="user.email" /> <br />
    <div class="qas" v-for="qa in qas" :key="qa.id">
      <p>{{ qa.question }}</p>
      <input v-model="qa.answer" :type="qa.type" :id="qa.id" v-if="qa.type!='radio'" />
      <ul v-else>
      <li v-for="(op, opInd) in qa.options" :key="opInd">
        <p style="float: right">{{ op }}</p><input :value="op" v-model="qa.answer" :type="qa.type" :name="qa.id">
      </li>
      </ul>
    </div>
    <div class="submit">
        <button @click="updateUserDetails" >Update!</button>
    </div>

    {{ qas }}
  </div>
</template>
* {
    float: right;
}
<style scoped>
.app {
  text-align: right;
}
</style>
<script>
export default {
  middleware: "authenticated",
  data() {
    return {
      user: {},
      qas: [
        { id: 1, question: "מה אתה אוהב לאכול", type: "text", answer: "" },
        { id: 2, question: "תפקיד", type: "text", answer: "" },
        { id: 3, question: "תחביבים", type: "text", answer: "" },
        { id: 4, question: "עמדה פוליטית", type: "radio", options: ["שמאל", "ימין", "לא עניינכם"], answer: "" },
        { id: 5, question: "משמעות החיים", type: "radio", options: ["אין", "יש", "לא עניינכם"], answer: "" },
        { id: 6, question: "אלוהים", type: "radio", options: ["אין", "יש", "לא עניינכם"], answer: "" },
      ],
    };
  },
  async fetch() {
    try {
      const me = await this.$axios.get(`${this.$config.baseURL}/api/users/me`);
      this.user = me.data;
    } catch (e) {
      console.log("Couldn't fetch me");
    }
  },
  methods: {
      updateUserDetails: async function () {
          this.user.qas = this.qas;
          console.log(this.user);
          const save = await this.$axios.post(`${this.$config.baseURL}/api/users/updateDetails`, this.user)
      },
      uploadProfilePic: async function (image) {
      const file = image.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      const CLIENT_ID = "7d3820b2b717a2b";
      const ROOT_URL = "https://api.imgur.com";

      const res = await this.$axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer f8c2b8ade9dc01a6d0d8b4ac82d3903e02611faa`,
        },
      });
      this.user.picPath = res.data.data.link;
    },
  }
};
</script>
