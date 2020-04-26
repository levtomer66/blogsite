
var app = new Vue({
  el: '#app',
  data () {
    return {
      posts: null,
      loading: false
    }
  },
  created() {
    this.getPosts()
  },
  watch: {
    '$route' : 'getPosts'
  },
  methods: {
    getPosts() {
      var binder = this;
      binder.loading = true;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
          binder.loading = false;
          binder.posts = JSON.parse(xhr.responseText).posts;
        }
      };
      xhr.open('GET', 'https://blogsite.now.sh/api/posts?category=' + binder.$route.params.category, true);
      xhr.send()
      
    }
  }

})
