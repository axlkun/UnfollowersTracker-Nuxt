<template>
  <v-app id="app">

    <myHeader></myHeader>

    <!-- contenido principal que cambia acorde a la ruta -->
    <main>
      <router-view :blogEntry="blogEntry"></router-view>
    </main>
    
    <myFooter :blogEntry="blogEntry"></myFooter>

  </v-app>
</template>

<script setup>
import api from './api';

import myHeader from './components/Header.vue';
import myFooter from './components/Footer.vue';

const blogEntry = ref([]);

const getArticles = () => {
  api.get('/api/articles?limit=3')
        .then(response => {
          blogEntry = response.data.data;
        })
        .catch(error => {
          console.error('Error al hacer la solicitud GET:', error);
        });
}
  
onMounted(() => {
    getArticles();
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