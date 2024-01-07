<template>
  <v-app id="app">

    <myHeader></myHeader>

    <!-- contenido principal que cambia acorde a la ruta -->
    <main>
      <router-view :blogEntry="blogEntry"></router-view>
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

    <myFooter :blogEntry="blogEntry"></myFooter>

  </v-app>
</template>

<script setup>
import api from './api';

import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';

const blogEntry = ref([]);
const sheet = ref(true);
const cookiesAccepted = ref(false);

const acceptCookies = () => {
  cookiesAccepted.value = true;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('cookiesAccepted', 'true');
  }
};

const getArticles = async () => {
  api.get('/api/articles?limit=3')
    .then(response => {
      blogEntry.value = response.data.data;
    })
    .catch(error => {
      console.error('Error al hacer la solicitud GET:', error);
    });
}

onMounted(() => {
  getArticles();

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
  width: 80%;
  object-fit: contain;
  margin: -15px auto;

  @media only screen and (min-width: 1024px) {
    width: 100%;

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