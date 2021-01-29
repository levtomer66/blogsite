<template>
  <div>
    <script src="https://unpkg.com/vue@2.5.17/dist/vue.min.js"></script>

    <link
      href="https://daks2k3a4ib2z.cloudfront.net/560425adca8e085154729773/css/template-escape.webflow.05d64341e.css"
      rel="stylesheet"
      type="text/css"
    />
    <div
      class="navbar w-nav"
      data-animation="over-right"
      data-collapse="tiny"
      data-duration="400"
      data-ix="navbar"
      style="opacity: 1; transition: opacity 600ms ease 0s"
    >
      <div class="w-container">
        <a class="logo w-nav-brand w--current" href="/">
          <div class="long-text">בולילים</div>
        </a>
        <nav class="nav-menu w-nav-menu" role="navigation">
          <a
            class="nav-link w-nav-link w--current"
            href="/"
            style="max-width: 940px"
            >בית</a
          ><a class="nav-link w-nav-link" href="/about" style="max-width: 940px"
            >עלינו</a
          ><a
            class="nav-link w-nav-link"
            href="/contact"
            style="max-width: 940px"
            >צרו קשר</a
          >
          <nuxt-link class="nav-link w-nav-link" v-if="this.$store.state.auth === null" to="login">התחבר</nuxt-link>
          <nuxt-link class="nav-link w-nav-link" v-if="this.$store.state.auth !== null" to="logout">התנתק</nuxt-link>
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
          עושים פיפ מקקה
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
          שמעו כיצד אנחנו עושים פיפ מקקה
        </div>
        <a
          class="button w-button"
          data-ix="hero-button"
          href="#Latest-post"
          style="
            transition: background-color 0.2s ease 0s, color 0.2s ease 0s,
              opacity 600ms ease 0s, transform 600ms ease 0s;
            opacity: 1;
            transform: scaleX(1) scaleY(1) scaleZ(1);
          "
          >ראו פוסטים אחרונים</a
        >
      </div>
    </div>
    <div class="category-section">
      <div class="w-container">
        <div class="w-dyn-list">
          <div class="w-clearfix w-dyn-items w-row">
            <div class="category-wrapper w-col w-col-2 w-dyn-item">
              <a class="category-link" href="?category=nature">?</a>
            </div>
            <div class="category-wrapper w-col w-col-2 w-dyn-item">
              <a class="category-link" href="?category=photography">נראה</a>
            </div>
            <div class="category-wrapper w-col w-col-2 w-dyn-item">
              <a class="category-link" href="?category=relaxation">עוד</a>
            </div>
            <div class="category-wrapper w-col w-col-2 w-dyn-item">
              <a class="category-link" href="?category=vacation">מה</a>
            </div>
            <div class="category-wrapper w-col w-col-2 w-dyn-item">
              <a class="category-link" href="?category=travel">נראה</a>
            </div>
            <div class="category-wrapper w-col w-col-2 w-dyn-item">
              <a class="category-link" href="?category=adventure">טיסן</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      {{ this.$store.state.auth.img }}
    </div>
    <nuxt />
  </div>
</template>

<style src=""></style>
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
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
