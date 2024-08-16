<template>
    <v-sheet class="d-flex flex-column align-center justify-center background-custom" style="min-height: 70vh;">
        <v-sheet class="pa-5 text-center bg-transparent custom-sheet-size">
            <h2 class="text-h5 text-md-h4 ma-5 font-weight-black text-pink">¡Start now!</h2>
            <p class="text-h7 text-md-h6 ma-5 font-weight-bold text-grey-darken-1">Don't wait any longer to find out who doesn't follow you back on Instagram. Our free tool is ready to help you manage your follower list.</p>
            <v-btn variant="elevated"
                class="ma-5" color="pink" href="/results">
                <svg-icon class="mr-2" style="color: white;" type="mdi" :path="mdiAccountRemove"></svg-icon>
                Discover Unfollowers
            </v-btn>
        </v-sheet>
    </v-sheet>
</template>
    
<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import {  mdiAccountRemove } from '@mdi/js';
</script>
    
<style scoped>

.custom-sheet-size {
    /* adapta la sección de contacto*/
    /* vista movil */
    width: 100%;
    height: auto;

    @media only screen and (min-width: 960px) {
        width: 40%;
    }
}

.background-custom{
    background: radial-gradient(circle, rgba(252,228,236,1) 27%, rgba(236,239,241,1) 50%);
}
</style>