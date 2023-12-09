<template>

    <v-sheet class="d-flex flex-column align-center justify-center background-custom" id="steps" style="min-height: 100vh;">
        <v-sheet class="pa-5 text-center bg-transparent">
            <h2 class="text-h4 ma-1 font-weight-black text-pink">Video tutorial: Cómo utilizar nuestra herramienta</h2>
            <p class="text-h7 ma-5 font-weight-bold text-grey-darken-1">Aprende paso a paso cómo sacar el máximo
                provecho de <span class="text-pink">Unfollowers Tracker</span> para descubrir quiénes no te siguen de
                vuelta en Instagram.</p>
        </v-sheet>

        <v-sheet class="video-container bg-transparent">
    
                <iframe class="video" src="https://www.youtube.com/embed/GxOowXWueoo" title="Descubre quién no te sigue en Instagram SIN riesgos de iniciar sesión | Unfollowers Tracker" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
        </v-sheet>

    </v-sheet>

</template>
    
<script>

export default {

    name: 'VideoTutorial',

}

</script>
    
<style scoped>
.background-custom {
    background: radial-gradient(circle, rgba(252, 228, 236, 1) 27%, rgba(236, 239, 241, 1) 50%);
}
.video-container{
    width: 90%;
    margin: 0 auto 15px auto;

    @media only screen and (min-width: 1024px) {
        width: 50%;
        
    }
}
.video {
    aspect-ratio: 16 / 9;
    width: 100%;
}
</style>