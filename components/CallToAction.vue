<template>
    <v-sheet class="d-flex flex-column align-center justify-center background-custom" style="min-height: 100vh;">
        <v-sheet class="pa-5 text-center bg-transparent custom-sheet-size">
            <h2 class="text-h5 text-md-h4 ma-5 font-weight-black text-pink">¡Empieza ahora!</h2>
            <p class="text-h7 text-md-h6 ma-5 font-weight-bold text-grey-darken-1">No esperes más para descubrir quiénes no te siguen de vuelta en Instagram. Nuestra herramienta gratuita está lista para ayudarte a gestionar tu lista de seguidores.</p>
            <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated"
                class="ma-5" color="pink" href="/results">
                Quien no me sigue
            </v-btn>
        </v-sheet>
    </v-sheet>
</template>
    
<script>

export default {

    name: 'CallToAction',

}

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