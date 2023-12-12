<template>
  <v-footer class="text-center d-flex flex-column" color="grey-lighten-2">

    <div class="d-flex flex-sm-row flex-column justify-space-between footer-section">

      <div class="section">
        <p>Navigation</p>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#how-works">How it works</a></li>
          <li><a href="/#steps">Video Tutorial</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

      <div class="section">
        <p>Free tools</p>

        <ul>
          <li><a href="/results">Who doesn't follow me back on Instagram</a></li>
        </ul>

      </div>

      <div class="section">
        <p class="ultimos-acrticulos">Latest articles</p>
        <ul>
          <li v-for="article in blogEntry"><a :href="'/blog/' + article.slug">{{ article.title }}</a></li>
        </ul>
      </div>

      <div class="section">
        <p>Legal</p>

        <ul>
          <li><a href="/terminos-y-condiciones-unfollowerstracker">Terms</a></li>
          <li><a href="/politica-de-privacidad-unfollowerstracker">Privacy</a></li>
          <li><a href="/politica-de-cookies-unfollowerstracker">Cookies</a></li>
        </ul>
      </div>

      <div class="section">
        <p>Have questions?</p>

        <v-btn prepend-icon="mdi mdi-email-arrow-right-outline" variant="elevated" href="mailto:axelcruz.dev@gmail.com"
          class="ma-5" color="pink">
          Contact us
        </v-btn>
      </div>

    </div>

    <div class="d-flex flex-row justify-center w-100">
      <p class="ma-1">
        {{ new Date().getFullYear() }} — Unfollowers
        <a class="reset-style" href="https://www.instagram.com/axlkun/" target="_blank">
          By <strong>@axlkun</strong>&#129489;
        </a>
        Illustration by <a class="reset-style"
          href="https://freeicons.io/mobile-illustrations-2/dcbf-spotify-account-illustration-472" target="_blank">Athul
          Mc</a>
        on <a class="reset-style" href="https://freeicons.io" target="_blank">freeicons.io</a>
      </p>

    </div>

  </v-footer>
</template>

<script>

export default {

  name: 'myFooter',

  props: ['blogEntry'],

}
</script>

<style scoped>
.footer-section {
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid gray;
  font-size: 15px
}

.footer-section {
  line-height: 2;
}

.footer-section li:hover {
  color: #E91E63;
  cursor: pointer;
}

.footer-section p {
  font-weight: 600;
}

.section a {
  color: black;

  &:hover {
    color: #E91E63;
  }
}
</style>