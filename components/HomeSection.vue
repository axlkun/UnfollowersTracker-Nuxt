<template>
    <!-- Seccion de inicio -->
    <v-sheet class="d-flex flex-md-row flex-column justify-center align-center bg-grey-lighten-4" style="min-height: 90vh" id="home">
        <v-sheet class="d-flex flex-md-row flex-column justify-center align-center home-container" style="gap: 20px;">
            <v-sheet class="d-flex flex-column justify-center align-center bg-grey-lighten-4 custom-sizing">
                <v-sheet class=" mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-h4 text-md-h3 mb-2 font-weight-bold text-grey-darken-3">Descubre quién no te sigue de
                        vuelta
                        en <span class="text-pink">Instagram</span>
                        <a href="https://www.instagram.com/" target="_blank">
                            <v-icon>
                                <img :src="instagramLogo" alt="Icono Instagram SVG" style="width: 32px; height: 32px;"
                                    loading="lazy" />
                            </v-icon>
                        </a>
                    </h1>

                    <p class="text-h7 text-md-h5 text-grey-darken-1 font-weight-bold">
                        ¡Descubre al instante quién no te sigue en Instagram sin necesidad de contraseñas! Toma el control
                        de tu
                        círculo social de forma sencilla y segura.
                    </p>

                    <v-sheet class="d-flex flex-md-row flex-column align-center bg-grey-lighten-4">
                        <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated" href="/results"
                            class="mt-10 mx-center" color="pink">
                            Quién no me sigue
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

<script>
import instagramLogo from '../assets/instagram-logo.svg';
import imgHome from '../assets/imagen-home.svg';

export default {

    name: 'HomeSection',

    data: () => ({
        instagramLogo,
        imgHome,
    }),
}

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
}
</style>