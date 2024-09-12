<template>
    <!-- Seccion de inicio -->
    <v-sheet class="d-flex flex-md-row flex-column justify-center align-center bg-grey-lighten-4"
        id="home" style="min-height: 90vh;">
        <v-sheet class="d-flex flex-md-row flex-column justify-center align-center home-container" style="gap: 20px;">

            <v-sheet class="d-flex flex-column bg-grey-lighten-4 custom-sizing">
                <v-sheet class=" mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-h5 text-center text-md-h3 text-md-left mt-5 mb-10 font-weight-bold text-grey-darken-3">Track Instagram Unfollowers - Check Who Doesn't Follow You Back on <span class="text-pink">Instagram</span>
                    </h1>

                    <h2 class="text-subtitle-1 text-center text-md-left text-grey-darken-1 mb-5 font-weight-bold">
                        Free website to see who Unfollowed you on Instagram. No passwords needed. Easily manage your social circle
                    </h2>

                    <v-sheet class="d-flex flex-md-row flex-column align-center bg-grey-lighten-4 ga-5">
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


            <v-sheet class="d-flex flex-column justify-center align-center bg-grey-lighten-4">

                <img :src="imgHome" alt="Imagen Home SVG" class="custom-sizing-img"/>
            </v-sheet>
            
        </v-sheet>
    </v-sheet>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountRemove, mdiHelp } from '@mdi/js';

import imgHome from '../assets/hero.png';

</script>

<style scoped>
.home-container {
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    background-color: transparent;

    @media only screen and (min-width: 1280px) {
        margin-top: -40px;
      }
}

</style>