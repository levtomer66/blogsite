<template>
  <div>
    <div
      class="navbar w-nav"
      data-animation="over-right"
      data-collapse="tiny"
      data-duration="400"
      data-ix="navbar"
      style="opacity: 1; transition: opacity 600ms ease 0s"
    >
      <div class="w-container">
        <!-- <a class="logo w-nav-brand w--current" href="/">
          <div class="long-text">הבלוג</div>
        </a> -->
        <div class="profile w-nav-brand w--current">
          <a href="#">
            <img
              :src="user.picPath"
              alt="profile"
              v-if="this.$store.state.auth !== null"
              @click="dropdown()"
            />
          </a>
          <div class="dropdown" :style="picClick ? 'display: inline-block' : null">
            <a :href="'users/' + user.id + '/settings'">הגדרות</a>
            <a @click="logout()" href="/">התנתק</a>
          </div>
        </div>
        <nav class="nav-menu w-nav-menu" role="navigation">
          <a
            class="nav-link w-nav-link w--current"
            href="/"
            style="max-width: 940px"
            >בית</a
          ><a
            class="nav-link w-nav-link"
            href="/profiles"
            style="max-width: 940px"
            >עלינו</a
          >
          <nuxt-link
            class="nav-link w-nav-link"
            v-if="this.$store.state.auth === null"
            to="login"
            >התחבר</nuxt-link
          >
          <a
            class="close-x w-hidden-main w-hidden-medium w-hidden-small"
            href="#"
            >×</a
          >
        </nav>
        <div
          class="menu-button w-clearfix w-hidden-main w-hidden-medium w-hidden-small w-nav-button"
        >
          <div class="menu-icon w-icon-nav-menu"></div>
          <div class="menu-link">MENU</div>
        </div>
      </div>
      <div class="w-nav-overlay" data-wf-ignore=""></div>
    </div>
    <div class="hero-section">
      <div class="hero-content w-container">
        <div
          class="hero-heading"
          data-ix="hero-text"
          style="
            opacity: 1;
            transform: translateX(0px) translateY(0px) translateZ(0px);
            transition: opacity 600ms ease 0s, transform 600ms ease 0s;
          "
        >
          הבלוג
        </div>
        <div
          class="hero-subheading"
          data-ix="hero-text-2"
          style="
            opacity: 1;
            transform: translateX(0px) translateY(0px) translateZ(0px);
            transition: opacity 600ms ease 0s, transform 600ms ease 0s;
          "
        >
          ים, קונספירציות, סייבר, מחקר
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>
<style scoped>
.profile {
  position: absolute;
  right: 15px;
  top: 20px;
  display: inline-block;
}

.profile img {
  position: static;
  right: 10px;
  bottom: 10px;
  width: 40px;
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 0px;
  float: left;
  border-radius: 60px;
}

.dropdown {
  display: none;
  position: absolute;
  right: 17px;
  top: 47px;
  text-align: center;
}
.dropdown a {
  display: block;
  padding: 10px;
  color: #b4d0d1;
  text-decoration: none;
  font-size: 16px;
}
.dropdown a:hover {
  color: gray;
}
</style>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  direction: rtl;
  text-align: right;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
<script>
export default {
  data() {
    return {
      picClick: false,
      user: {
        picPath:
          "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3865662376829212&width=70&ext=1614520779&hash=AeSLo8LGBwBePTu-n5w",
      },
    };
  },
  methods: {
    dropdown() {
      this.picClick = !this.picClick;
    },
    async logout() {
      await this.$store.dispatch('logout')
      await this.$axios.get(`${this.$config.baseURL}/api/users/logout`);
    }
  },
  async fetch() {
    if (this.$store.state.auth) {
      try {
        const me = await this.$axios.get(`${this.$config.baseURL}/api/users/me`)
        this.user = me.data
      } catch(e) {
        console.log("Couln't fetch me")
      }
    }
  }
};
</script>
