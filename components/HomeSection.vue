<template>
    <!-- Seccion de inicio -->
    <v-sheet class="bg-grey-lighten-4 container"
        id="home">
        <v-sheet class="d-flex flex-md-row flex-column justify-center home-container" style="gap: 20px;">

            <v-sheet class="d-flex flex-column bg-grey-lighten-4 hero-custom-sizing">
                <v-sheet class="mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-h5 text-center text-md-h3 mt-5 mb-7 mb-md-10 font-weight-bold text-grey-darken-3">Track Instagram Unfollowers - Check Who Doesn't Follow You Back on <span class="text-pink">Instagram</span>
                    </h1>

                    <h2 class="text-subtitle-2 text-md-subtitle-1 text-center text-grey-darken-1 mb-2 font-weight-bold">
                        Free website to see who Unfollowed you on Instagram. No passwords needed. Easily manage your social circle
                    </h2>

                    <v-sheet class="d-flex flex-md-row flex-column justify-center bg-grey-lighten-4 ga-5">
                        <v-btn variant="elevated" href="/results"
                            class="mt-10 mx-center" color="pink">
                            <svg-icon class="mr-2" style="color: white;" type="mdi" :path="mdiAccountRemove"></svg-icon>
                            Discover Unfollowers
                        </v-btn>
                        <v-btn
                            href="/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers"
                            variant="tonal" class="mt-5 mt-md-10 mx-center">
                            <svg-icon class="mr-2" style="color: black;" type="mdi" :path="mdiHelp"></svg-icon>
                            How it works
                        </v-btn>
                    </v-sheet>

                </v-sheet>

            </v-sheet>


            <!-- <v-sheet class="d-flex flex-column justify-center align-center bg-grey-lighten-4">

                <img :src="imgHome" alt="Imagen Home SVG" class="custom-sizing-img"/>
            </v-sheet> -->
            
        </v-sheet>

        <!-- Bloque del anuncio -->
         <div class="ad-container">
            <div  v-html="adsenseHtml"></div>
         </div>
        

    </v-sheet>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountRemove, mdiHelp } from '@mdi/js';

import imgHome from '../assets/hero.png';

// HTML del bloque de AdSense sin el <script>
const adsenseHtml = `
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-1163363741001629"
       data-ad-slot="3239804875"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
`;

// Ejecutar el script de AdSense cuando el componente esté montado
onMounted(() => {
  // Asegurarse de que el script de AdSense se cargue
   (adsbygoogle = window.adsbygoogle || []).push({});

//    setTimeout(() => {
//     // Asegurarse de que el script de AdSense se cargue
//     (adsbygoogle = window.adsbygoogle || []).push({});
//   }, 1000);
});

</script>

<style scoped>

.container{
    min-height: 100vh;
}

.home-container {
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    background-color: transparent;
}

</style>