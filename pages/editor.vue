<template>
  <div id="app" style="display: inline; text-align: right; float: right; margin-right: 15px">
    <div>
      <label class="label">תיאור</label>
      <div class="control">
        <input name="postDescription"
          v-model="form.postDescription"
          class="input" type="text" placeholder="תיאור פוסט">
        </div>
  </div>
  <div>
      <label class="label">תמונת פוסט</label>
        <input ref="fileInput" @change="onFileSelected" type="file" name="postImg" style="display: none" /><br />
      <div class="control" v-if="form.postImg == ''">
        <button @click="$refs.fileInput.click()">העלה תמונת רקע</button>
        </div>
        <div v-else>
          <img height="250px" width="250px" @click="$refs.fileInput.click()" :src=form.postImg alt="post image">
        </div>
  </div>
  <div>
      <label class="label">קטגוריה</label>
      <ul class="control">
        <li v-for="cat of categories" :key="cat" >
        {{ cat.name }} <input type="radio" :id=cat.uri :value=cat.uri name="category" v-model="form.postCategory">
      </li>
        </ul>
  </div>
  <div>
    <div class="control">
    <medium-editor
      v-model="content"
      :options="options"
      :prefill="defaultValue"
      v-on:uploaded="uploadCallback"
    >
    </medium-editor></div>
  </div>
    <div class="field">
      <div class="control">
        <button @click="savePost()">Save!</button>
      <br />
      </div>
        </div>
        <p v-if="errors.length">
    <b>הפוסט לא נשמר כי:</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
  </div>


</template>

<style >
.medium-editor-container {
  text-align: right;
}
</style>

<script>
import categoriesJ from '../static/categories.json'
export default {
  middleware: "authenticated",
  data() {
    return {
      form: { postDescription: "", postImg: "", postCategory: "" },
      errors: [],
      content: "",
      categories: categoriesJ,
      defaultValue: "",
      options: {
        placeholder: {
          text: "",
          hideOnClick: true,
        },
        uploadUrl: "https://api.imgur.com/3/image",
        uploadUrlHeader: { Authorization: "Client-ID db856b43cc7f441" },
        file_input_name: "image",
        imgur: true,
        toolbar: {
          buttons: [
            "bold",
            "italic",
            {
              name: "anchor",
              action: "createLink",
              aria: "link",
              tagNames: ["a"],
              contentDefault: "<b>🔗</b>",
              contentFA: '<i class="fa fa-link"></i>',
            },
            "underline",
            "quote",
            "h1",
            "h2",
            "h3",
            "h4",
            {
              name: "pre",
              action: "append-pre",
              aria: "code highlight",
              tagNames: ["pre"],
              contentDefault: "<b><\\></b>",
              contentFA: '<i class="fa fa-code fa-lg"></i>',
            },
            "unorderedlist",
            "orderedlist",
            {
              name: "image",
              action: "image",
              aria: "insert image from url",
              tagNames: ["img"],
              contentDefault: "<b>image</b>",
              contentFA: '<i class="fa fa-picture-o"></i>',
            },
          ],
        },
      },
    };
  },
  async fetch() {
    if (this.$route.query.post !== undefined) {
      try {
        const post = await this.$axios.get(
          `${this.$config.baseURL}/api/posts/${this.$route.query.post}`
        );
        this.form.postDescription = post.data.postDescription;
        this.form.postImg = post.data.postImg;
        this.form.postCategory = post.data.postCategory;
        console.log(post.data);
        this.setContent(post.data.postContent);
      } catch (e) {

        this.$router.push({path: '/editor'});
        vm.$forceUpdate();
      }
    } else {
      this.setContent(Buffer.from("<h1>כתוב מאמר חדש</h1>").toString("base64"));
    }
  },
  methods: {
    onFileSelected: async function (image) {
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
      this.form.postImg = res.data.data.link;
    },
    setContent: function (con) {
      this.defaultValue = Buffer.from(con, "base64").toString("utf8");
    },
    async savePost() {
      this.errors = [];
      console.log(this.content);
      const contentBase64 = Buffer.from(this.content).toString("base64");
      var el = document.createElement("html");
      el.innerHTML = this.content;
      var h1 = el.getElementsByTagName("h1");
      if (h1.length < 1) {
        this.errors.push("חייב שיהיה כותרת h1");
      }
      if (this.form.postDescription == "") {
        this.errors.push("חייב תיאור");
      }
      if (this.form.postCategory == "") {
        this.errors.push("חייב לבחור קטגוריה");
      }

      if (!this.errors.length) {
        const data = {
          postTitle: h1[0].innerText,
          postContent: contentBase64,
          postDescription: this.form.postDescription,
          postImg: this.form.postImg,
          postCategory: this.form.postCategory,
          postIsPublished: false,
        };
        let postId = this.$route.query.post;
        if (postId === undefined) {
          console.log("Creating new post...");
          await this.$axios.post(`${this.$config.baseURL}/api/posts`, data);
        } else {
          // update (put) if editing existing post
          data.postId = postId;
          console.log("Update exsiting post..." + postId);
          await this.$axios.put(`${this.$config.baseURL}/api/posts`, data);
        }
        window.location = "/";
      }
    },

    uploadCallback(url) {
      console.log("uploaded url", url);
    },
    applyTextEdit(ev) {
      console.log(ev);
      if (ev.event.target) {
        console.log(ev.event.target.innerHTML);
        this.text = ev.event.target.innerHTML;
      }
    },
  },
};
</script>
