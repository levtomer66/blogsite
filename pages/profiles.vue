<template>
  <div class="container">
    <div class="row">
        <img
            height="40px"
            width="40px"
            src="https://i.gifer.com/ZZ5H.gif"
            v-if="$fetchState.pending"
          />
        <div class="col-md-3 col-sm-6" v-for="u in users" :key="u._id">
            <div class="our-team">
                <a :href="'/profiles/' + u._id" >
                <img :src="u.picPath" alt="Profle Picutre">
                </a>
                <h3 class="title">{{ u.firstName }}</h3>
                <ul class="social">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                </ul>
                <span class="post">Owner</span>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.our-team{
	text-align: center;
}
.our-team img{
	width: 100%;
	height: auto;
	border-radius: 50%;
}
.our-team .title{
	font-size: 28px;
	font-style: italic;
	color: #444;
	text-transform: capitalize;
	margin: -15px 0 15px;
	opacity: 0.8;
	transform: rotate(-3deg);
}
.our-team .social{
	list-style: none;
	padding: 0;
	margin: 0 0 10px 0;
}
.our-team .social li{
	display: inline-block;
}
.our-team .social li a{
	display: block;
	font-size: 20px;
	color: #666;
	margin-right: 8px;
	transition: all 0.3s ease 0s;
}
.our-team .social li a:hover{
	color: #660d79;
}
.our-team .post {
	display: block;
	font-size: 15px;
	font-weight: 600;
    color: #444;
	text-transform: uppercase;
}
@media only screen and (max-width: 990px){
	.our-team{ margin-bottom: 35px; }
}
</style>
<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  async fetch() {
    const users = await this.$axios.get(
      "http://localhost:3001/api/users/getAbout"
    );
    this.users = users.data;
  },
};
</script>
