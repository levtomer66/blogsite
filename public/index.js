
var app = new Vue({
  el: '#app',
  data () {
    return {
      fps: [
        {
          id: 0,
          link: "/blog/from-top-down",
          category: "Photography",
          imgurl: "https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ee7220fa552c1b077739_photo-1443926818681-717d074a57af.jpg",
          title: "The Road Ahead",
          description: "The road ahead might be paved - it might not be.",
          authorimgurl: "https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg",
          authorname: "Mat Vogels",
          date: "September 25, 2015"
        },
        {
          id: 1,
          link: "/blog/from-top-daa",
          category: "Photography",
          imgurl: "https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/5614ee7220fa552c1b077739_photo-1443926818681-717d074a57af.jpg",
          title: "The Road Ahead",
          description: "The road ahead might be paved - it might not be.",
          authorimgurl: "https://daks2k3a4ib2z.cloudfront.net/5604cdfeafeb72f96de8fbe6/56150864b2f6f50c2d6ceada_128-14.jpg",
          authorname: "Mat Vogels",
          date: "September 25, 2015"
        }

      ],
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
