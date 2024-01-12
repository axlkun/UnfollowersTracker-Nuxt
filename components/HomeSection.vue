<template>
    <!-- Seccion de inicio -->
    <v-sheet class="d-flex flex-md-row flex-column justify-center align-center bg-grey-lighten-4" style="min-height: 90vh"
        id="home">
        <v-sheet class="d-flex flex-md-row flex-column justify-center align-center home-container" style="gap: 20px;">
            <v-sheet class="d-flex flex-column justify-center align-center bg-grey-lighten-4 custom-sizing">
                <v-sheet class=" mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-h4 text-md-h3 mb-2 font-weight-bold text-grey-darken-3">Track Instagram Unfollowers - Check Who Doesn't Follow You Back on <span class="text-pink">Instagram</span>

                        <v-icon>
                            <img :src="instagramLogo" alt="Icono Instagram SVG" style="width: 32px; height: 32px;"
                                loading="lazy" />
                        </v-icon>
                    </h1>

                    <h2 class="text-h7 text-md-h5 text-grey-darken-1 font-weight-bold">
                        Free App to see who Unfollowed you on Instagram. No passwords needed. Easily manage your social circle. .
                    </h2>

                    <v-sheet class="d-flex flex-md-row flex-column align-center bg-grey-lighten-4">
                        <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated" href="/results"
                            class="mt-10 mx-center" color="pink">
                            Discover Unfollowers
                        </v-btn>
                    </v-sheet>

                </v-sheet>

            </v-sheet>

            <v-sheet class="d-flex flex-column justify-center align-center bg-grey-lighten-4">

                <img :src="imgHome" alt="Imagen Home SVG" class="custom-sizing-img home-img" loading="lazy" />
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script setup>
import instagramLogo from '../assets/instagram-logo.svg';
import imgHome from '../assets/imagen-home.svg';

</script>

<style scoped>
.home-container {
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
    background-color: transparent;
}

.home-img {
    margin: -25px 0;
    max-height: 900px;
}</style>