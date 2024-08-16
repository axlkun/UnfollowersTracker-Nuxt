<template>
    <v-sheet class="d-flex flex-md-row flex-column justify-center align-center bg-grey-lighten-4" style="min-height: 100vh;"
        id="contact">
        <v-sheet class="pa-5 text-center bg-grey-lighten-4 custom-sheet-size">
            <h2 class="text-h5 text-md-h4 ma-5 font-weight-black text-pink">Contactar</h2>
            <p class="text-h5 ma-5 font-weight-bold text-grey-darken-1">¿Tienes alguna pregunta, inquietud o simplemente
                quieres decir hola? No dudes en ponerte en contacto.</p>
            <v-btn variant="elevated" href="mailto:unfollowerstracker2024@gmail.com"
                class="ma-5" color="pink">
                <svg-icon class="mr-2" style="color: white;" type="mdi" :path="mdiEmailArrowRightOutline"></svg-icon>
                Escribir un correo
            </v-btn>
        </v-sheet>

        <img :src="imgContacto" alt="Imagen Contacto SVG" class="custom-sizing-img-contacto" loading="lazy" />
    </v-sheet>
</template>
    
<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import {  mdiEmailArrowRightOutline } from '@mdi/js';
import imgContacto from '../assets/imagen-contacto.svg';
</script>
    
<style scoped>
.custom-sizing-img-contacto {
    /* adapta la imagen de contacto*/
    max-width: 300px;
    /* vista movil */
    max-height: 400px;
    margin: -50px auto;

    @media only screen and (min-width: 600px) {
        /* resto de vistas */
        max-width: 650px;
        max-height: 650px;
        margin: 0 0 0 -80px;
    }
}

.custom-sheet-size {
    /* adapta la sección de contacto*/
    /* vista movil */
    width: 100%;
    height: auto;

    @media only screen and (min-width: 960px) {
        width: 40%;
    }
}
</style>