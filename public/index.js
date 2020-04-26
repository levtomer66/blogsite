
var app = new Vue({
  el: '#app',
  data () {
    return {
      posts: null
    }
  },
  mounted() {
    var binder = this;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200){
        binder.posts = JSON.parse(xhr.responseText).posts;
      }
    };
    xhr.open('GET', 'https://blogsite.now.sh/api/posts', true);
    xhr.send()
  }
})
