<template>
  <v-app id="app">

    <myHeader></myHeader>

    <!-- contenido principal que cambia acorde a la ruta -->
    <main>
      <NuxtPage/>
    </main>

    <ClientOnly fallback-tag="span" fallback="Loading comments...">

      <div class="text-center">
        <v-bottom-sheet v-model="sheet" v-if="!cookiesAccepted">
          <v-card class="text-center">
            <v-card-text>
              <div class="text-caption">
                We use cookies to enhance your experience and display ads. By browsing the site, you agree to our
Cookie Policy. You can change settings in your browser at any time.
              </div>
            </v-card-text>
            <v-card-actions class="mx-auto">
              <v-btn size="small" variant="text" color="pink" href="/cookie-policy-unfollowerstracker">
                Read more
              </v-btn>
              <v-btn size="x-small" variant="tonal" color="pink" @click="acceptCookies">
                Accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-bottom-sheet>
      </div>
    </ClientOnly>

    <myFooter></myFooter>

  </v-app>
</template>

<script setup>

import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';

const sheet = ref(true);
const cookiesAccepted = ref(false);

const acceptCookies = () => {
  cookiesAccepted.value = true;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('cookiesAccepted', 'true');
  }
};

onMounted(() => {
  
  if (typeof localStorage !== 'undefined') {
    cookiesAccepted.value = localStorage.getItem('cookiesAccepted') === 'true';
    sheet.value = !cookiesAccepted.value;
  }
});


</script>

<style>
.custom-sizing {
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: 960px) {
    width: 75%;
    margin: 0;
  }
}

.custom-sizing-img {
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: contain;
  margin: 0 auto;
  margin-top: -75px;
  margin-bottom: -35px;

  @media only screen and (min-width: 1024px) {
    width: 100%;
    margin: 0;

  }
}

.hero-custom-sizing {
  width: 90%;
  margin: 0 auto;

  @media only screen and (min-width: 960px) {
    width: 65%;
    margin: 0;
  }
}

.ad-container {
  width: 90%;
  max-width: 75rem;
  margin: 0 auto;

  @media only screen and (min-width: 960px) {
      width: 80%;
  }
}

.reset-style {
  /* le quita los estilos a los enlaces */
  text-decoration: none;
  color: inherit;
}

/* terminos y privacidad */

.privacy h1 {
  color: #E91E63;
}

.privacy {

  width: 90%;
  margin: 0 auto;
  line-height: 1.8;

  @media only screen and (min-width: 960px) {
    /* resto de vistas */
    max-width: 50%;
    min-height: 100vh;
  }
}

.section {
  margin: 20px 0;
}

.fecha {
  color: gray;
}
</style>