<template>
  <div>
    <div class="category-section">
      <div class="w-container">
        <div class="w-dyn-list">
          <div class="w-clearfix w-dyn-items w-row">
            <div
              class="category-wrapper w-col w-col-2 w-dyn-item"
              v-for="cat in categories"
              :key="cat.name"
            >
              <a class="category-link" :href="'?category=' + cat.uri">{{
                cat.name
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-padding main-section" id="posts">
      <div class="w-container" id="Latest-post">
        <div class="section-heading">
          <h2 class="section-title">
            {{ getCategoryByName($route.query.category) }}
          </h2>
          <img
            height="40px"
            width="40px"
            src="https://i.gifer.com/ZZ5H.gif"
            v-if="$fetchState.pending"
          />

          <div class="med-divider"></div>
        </div>
        <div class="w-dyn-list">
          <div class="w-clearfix w-dyn-items w-row">
            <div
              class="featuredthumbnail w-col w-col-4 w-dyn-item"
              v-for="p of posts"
              :key="p._id"
            >
              <a
                class="featured-wrapper w-inline-block"
                data-ix="featured-wrapper"
                :href="`/posts/${p._id}`"
                style="
                  transition: transform 0.2s ease 0s,
                    -webkit-transform 0.2s ease 0s;
                "
              >
                <div>
                  <div
                    class="category-tag-2"
                    :style="`background-color: ${p.categoryhexcolor};`"
                  >
                    {{ p.postCategory }}
                  </div>
                  <div
                    class="featured-image"
                    :style="`background-image: url('${p.postImg}');`"
                  ></div>
                </div>
                <div class="featured-text">
                  <div class="featured-title">{{ p.postTitle }}</div>
                  <div class="featured-description">
                    {{ p.postDescription }}
                  </div>
                  <div class="featured-details">
                    <div class="w-clearfix">
                      <img class="author-img" :src="`${p.authorPic}`" />
                      <div class="author-title lite">{{ p.authorName }}</div>
                      <div class="lite thumbnail-date"></div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesJ from "../static/categories.json";
export default {
  data() {
    return {
      posts: [],
      categories: categoriesJ,
      activeLoginModal: null,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "product-id") {
      this.displayProductModal(to);
    } else {
      next();
    }
  },
  methods: {
    getCategoryByName: function (cat) {
      const returnedCat = this.categories.filter((x) => {
        return x.uri == cat;
      })[0];
      if (returnedCat !== undefined) return returnedCat.name;
      return "הכל";
    },
  },
  async fetch() {
    console.log(this.$config);
    this.posts = await fetch(`${this.$config.baseURL}/api/posts`).then((res) =>
      res.json()
    );
  },
  // call fetch only on client-side
  fetchOnServer: false,
};
</script>
