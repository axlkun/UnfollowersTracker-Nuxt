<template>
  <v-footer class="text-center d-flex flex-column" color="grey-lighten-2">

    <div class="d-flex flex-sm-row flex-column justify-space-between footer-section">

      <div class="section">
        <p>Navigation</p>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#how-works">How it works</a></li>
          <li><a href="/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers">Tutorial</a></li>
          <li><a href="/#faqs">FAQ</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>

      <div class="section">
        <p>Free tools</p>

        <ul>
          <li><a href="/results">See who doesn’t follow you back on Instagram</a></li>
          <li><a href="/pending-requests">Find out who hasn’t accepted your follow request</a></li>
        </ul>

      </div>

      <div class="section">
        <p>Legal</p>

        <ul>
          <li><a href="/terms-and-conditions-unfollowerstracker">Terms</a></li>
          <li><a href="/privacy-policy-unfollowerstracker">Privacy</a></li>
          <li><a href="/cookie-policy-unfollowerstracker">Cookies</a></li>
        </ul>
      </div>

      <div class="section">
        <p>Have questions?</p>

        <v-btn variant="elevated" href="mailto:unfollowerstracker2024@gmail.com"
                class="ma-5" color="pink">
                <svg-icon class="mr-2" style="color: white;" type="mdi" :path="mdiEmailArrowRightOutline"></svg-icon>
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
      </p>

    </div>

  </v-footer>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import {  mdiEmailArrowRightOutline } from '@mdi/js';
</script>

<style scoped>
.footer-section {
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid gray;
  font-size: 15px;

  @media only screen and (min-width: 1599px) {
    width: 75%;
}
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