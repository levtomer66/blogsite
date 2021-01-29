<template>
  <div class="bottom-padding main-section" id="posts">
            <p v-if="$fetchState.pending">Loading...</p>

            <div class="w-container" id="Latest-post" v-else>
                <div class="section-heading">
                    <h2 class="section-title">אסור לפספס</h2>
                    <div class="med-divider"></div>
                </div>
                <div class="w-dyn-list">
                    <div  class="w-clearfix w-dyn-items w-row" >

                        <div  class="featuredthumbnail w-col w-col-6 w-dyn-item" v-for="p of posts" :key="p._id">
                            <a
                                class="featured-wrapper w-inline-block" data-ix="featured-wrapper"
                                :href="`/posts/${p._id}`"
                                style="transition: transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;">
                                <div>
                                    <div class="category-tag-2" :style="`background-color: ${p.categoryhexcolor};`">{{ p.postCategory }}</div>
                                    <div class="featured-image"
                                        :style="`background-image: url('${p.postImg}');`">
                                    </div>
                                </div>
                                <div class="featured-text">
                                    <div class="featured-title">{{ p.postTitle }}</div>
                                    <div class="featured-description">{{ p.postDescription }}</div>
                                    <div class="featured-details">
                                        <div class="w-clearfix"><img class="author-img"
                                                :src="`${p.authorPic}`">
                                            <div class="author-title lite">{{ p.authorName }}</div>
                                            <div class="lite thumbnail-date"></div>
                                        </div>
                                    </div>
                                </div>
                            </a></div>

                    </div>
                </div>
            </div>
            <div class="w-container">
                <div class="section-heading">
                    <h2 class="section-title">החדשים</h2>
                    <div class="med-divider"></div>
                </div>
                <div class="w-dyn-list">
                    <div class="w-clearfix w-dyn-items w-row">
                        <div class="blog-thumbnail w-col w-col-4 w-dyn-item" v-for="p of posts" :key="p._id"><a class="thumbnail-wrapper w-inline-block"
                                data-ix="blog-thumbnail" :href="`${p.link}`"
                                style="transition: box-shadow 0.2s ease 0s, transform 0.2s ease 0s, -webkit-transform 0.2s ease 0s;">
                                <div class="image-wrapper">
                                    <div class="thumbnail-image"
                                        :style="`background-image: url('${p.imgurl}');`">
                                    </div>
                                    <div class="category-tag" :style="`background-color: ${p.categoryhexcolor};`">{{ p.category }}</div>
                                </div>
                                <div class="thumbnail-text">
                                    <div class="blog-title">{{ p.title }}</div>
                                    <div class="preview-text">{{ p.description }}</div>
                                </div>
                                <div class="thumb-details w-clearfix"><img class="author-img"
                                        :src="`${p.authorimgurl}`">
                                    <div class="author-title">{{ p.authorname }}</div>
                                    <div class="thumbnail-date">{{ p.date }}</div>
                                </div>
                            </a></div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      activeLoginModal: null
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "product-id") {
      this.displayProductModal(to);
    } else {
      next();
    }
  },
  async fetch() {
    this.posts = await fetch('http://localhost:3001/api/posts').then(res =>
      res.json()
    )
  },
  // call fetch only on client-side
  fetchOnServer: false
}


</script>

<style>
</style>
