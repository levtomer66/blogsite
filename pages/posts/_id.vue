<template>
  <div>
    <p v-if="$fetchState.pending">Loading...</p>
    <div v-else id="content" v-html="post.postContent">
      {{ post.postContent }}
    </div>
    <div id="feature-picture">
      <img :src="post.postImg" alt="postPic" />
    </div>
  </div>
</template>

<style scoped>
* {
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      post: {
        authorName: "",
        authorPic: "",
        postCategory: "",
        postContent: "",
        postDescription: "",
        postImg: "",
        postTitle: "",
      },
    };
  },
  async mounted() {
    document.title = this.post.postTitle;
  },
  async fetch() {
    const postId = this.$route.params.id;
    const post = await this.$axios.get(
      `${this.$config.baseURL}/api/posts/${postId}`
    );
    const content = Buffer.from(post.data.postContent, "base64").toString(
      "utf8"
    );
    this.post = post.data;
    this.post.postContent = content;
  },
};
</script>
