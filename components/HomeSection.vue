<template>
    <!-- Seccion de inicio -->
    <v-sheet class="bg-grey-lighten-4 container" id="home" style="min-height: 100vh">
        <v-sheet class="d-flex flex-md-row flex-column justify-center home-container">

            <v-sheet class="d-flex flex-column bg-grey-lighten-4 hero-custom-sizing">
                <v-sheet class="mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-h6 text-center text-md-h4 mt-5 mb-7 mb-md-10 font-weight-bold text-grey-darken-3">
                        Track Instagram Unfollowers - Check Who Doesn't Follow You Back on <span
                            class="text-pink">Instagram</span>
                    </h1>

                    <h2 class="text-subtitle-2 text-md-subtitle-1 text-center text-grey-darken-1 mb-md-2 font-weight-bold">
                        Free website to see who Unfollowed you on Instagram. No passwords needed.
                    </h2>

                    <v-sheet class="d-flex flex-md-row flex-column justify-center bg-grey-lighten-4 ga-5">
                        <v-btn variant="elevated" href="/results" class="mt-5 mt-md-10 mx-center" color="pink">
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
            <div v-html="adsenseHtml"></div>
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

onMounted(() => {
    
    const checkAdsbyGoogle = setInterval(() => {
        if (window.adsbygoogle) {
            // Inicializar el anuncio
            (adsbygoogle = window.adsbygoogle || []).push({});
            clearInterval(checkAdsbyGoogle); // Detener el intervalo una vez que se ha cargado
        }
    }, 300);
});

</script>

<style scoped>
.home-container {
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    background-color: transparent;
    padding-bottom: 30px;
}
</style>