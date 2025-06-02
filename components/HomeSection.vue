<template>
    <!-- Seccion de inicio -->
    <v-sheet class="bg-grey-lighten-4 container" id="home">
        <v-sheet class="d-flex flex-md-row flex-column justify-center home-container pb-md-5">

            <v-sheet class="d-flex flex-column bg-grey-lighten-4 hero-custom-sizing">
                <v-sheet class="mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-h6 text-center text-md-h4 mt-5 mb-7 mb-md-10 font-weight-bold text-grey-darken-3">
                        See Who's Not Following You Back on <span
                            class="text-pink">Instagram</span>
                    </h1>

                    <h2 class="text-subtitle-2 text-md-subtitle-1 text-center text-grey-darken-1 mb-md-2 font-weight-bold">
                        Unfollowers Tracker is the safest way to find out who unfollowed you on Instagram.
                    </h2>

                    <v-sheet class="d-flex flex-md-row flex-column justify-center bg-grey-lighten-4 ga-3 ga-md-5">
                        <v-btn variant="elevated" href="/results" class="mt-5 mt-md-10 mx-center" color="pink">
                            <!-- <svg-icon class="mr-2" style="color: white;" type="mdi" :path="mdiAccountRemove"></svg-icon> -->
                            <v-icon :icon="mdiAccountRemove" class="mr-2"/>
                            Discover Unfollowers
                        </v-btn>
                        <v-btn
                            href="/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers"
                            variant="tonal" class="mt-5 mt-md-10 mx-center">
                            <!-- <svg-icon class="mr-2" style="color: black;" type="mdi" :path="mdiHelp"></svg-icon> -->
                            <v-icon :icon="mdiHelp" class="mr-2"/>
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
        <!-- <div class="ad-container">
            <div v-html="adsenseHtml"></div>
        </div> -->


    </v-sheet>
</template>

<script setup>
// import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountRemove, mdiHelp } from '@mdi/js';

//import imgHome from '../assets/hero.png';

// HTML del bloque de AdSense sin el <script>
// const adsenseHtml = `
//   <ins class="adsbygoogle"
//        style="display:block"
//        data-ad-client="ca-pub-1163363741001629"
//        data-ad-slot="3239804875"
//        data-ad-format="auto"
//        data-full-width-responsive="true"></ins>
// `;

// onMounted(() => {
    
//     const checkAdsbyGoogle = setInterval(() => {
//         if (window.adsbygoogle) {
//             // Inicializar el anuncio
//             (adsbygoogle = window.adsbygoogle || []).push({});
//             clearInterval(checkAdsbyGoogle); // Detener el intervalo una vez que se ha cargado
//         }
//     }, 300);
// });

</script>

<style scoped>
.home-container {
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    background-color: transparent;
}
</style>