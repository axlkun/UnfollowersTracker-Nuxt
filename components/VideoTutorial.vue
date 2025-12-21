<template>

    <v-sheet class="d-flex flex-column align-center justify-center background-custom" id="steps" style="min-height: 100vh;">
        <v-sheet class="pa-5 text-center bg-transparent custom-sheet">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">How to know who unfollowed me on Instagram</h2>
            <p class="text-h7 text-md-h6 ma-5 font-weight-bold text-grey-darken-1">Learn step by step how to use the <span class="text-pink">Unfollowers Tracker</span> tool to discover who doesn't follow you back on Instagram.</p>
        </v-sheet>

        <v-sheet class="video-container bg-transparent">

                <iframe class="video" src="https://www.youtube.com/embed/gNlniCRiqyQ" title="Who doesnt follow you back on Instagram? Here&#39;s how to check" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
                
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

.custom-sheet {
    @media only screen and (min-width: 960px) {
        width: 70%;
    }
}
</style>