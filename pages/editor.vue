<template>
  <div>
    <medium-editor
      v-model="content"
      :options="options"
      :prefill="defaultValue"
      v-on:uploaded="uploadCallback"
    >
    </medium-editor>
    <button @click="savePost()">Save!</button>
    <p v-if="errors.length">
    <b>הפוסט לא נשמר כי:</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
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
export default {
  data() {
    return {
      errors: [],
      content: "",
      defaultValue: "",
      options: {
        placeholder: {
          text: "כתוב טקסט כאן",
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
  async mounted() {
    if (this.$route.query.post !== undefined) {
      const post = await this.$axios.get(
        `http://localhost:3001/api/posts/${this.$route.query.post}`
      );
      this.setContent(post.data.postContent);
    } else {
      this.setContent(Buffer.from("<h1>כתוב מאמר חדש</h1>").toString("base64"));
    }
  },
  methods: {
    setContent: function (con) {
      this.defaultValue = Buffer.from(con, "base64").toString("ascii");
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
      var img = el.getElementsByTagName("img");
      if (img.length < 1) {
        this.errors.push("חייבת להיות לפחות תמונה אחת");
      }
      if (!this.errors.length) {
        const data = {
          postTitle: h1[0].innerText,
          postContent: contentBase64,
          postDescription: "פה יבוא תיאור לא יודע איך עדיין",
          postImg: img[0].src,
          postCategory: "קטגוריה",
          postIsPublished: false,
        };
        let postId = this.$route.query.post;
        if (postId === undefined) {
          console.log("Creating new post...");
          await this.$axios.post("http://localhost:3001/api/posts", data);
        } else {
          // update (put) if editing existing post
          data.postId = postId;
          console.log("Update exsiting post..." + postId);
          await this.$axios.put("http://localhost:3001/api/posts", data);
        }
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
