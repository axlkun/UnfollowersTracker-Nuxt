<template>
    <div>

        <div class="ad-container">
            <div v-html="adsenseHtml"></div>
        </div>

        <v-sheet class="d-flex flex-column justify-center custom-sizing mx-auto" style="min-height: 75vh"
            id="how-works">

            <v-sheet class="pa-5 text-center">
                <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">How does the Unfollowers Tracker tool
                    work?
                </h2>
                <p class="text-h7 text-md-h6 ma-5 font-weight-bold text-grey-darken-1">Our tool analyzes your provided
                    data
                    and
                    compares your list of followers with the list of people you follow. It then shows you who doesn't
                    follow
                    you
                    back on Instagram.</p>
            </v-sheet>

            <v-expansion-panels v-model="openSteps" multiple>

                <v-expansion-panel v-for="item in stepsItems" :key="item.id" :class="item.color" class="ma-5">
                    <v-expansion-panel-title class="text-h7 text-md-h6 d-flex align-center" style="min-height: 80px"
                        :class="item.color2">
                        <span class="mr-3" aria-hidden="true">{{ item.icon }}</span>
                        <h3 class="text-h7 text-md-h6" style="line-height: 1.5;">
                            {{ item.title }}
                        </h3>
                        <!-- <svg-icon class="ma-2" style="color: gray;" type="mdi" :path="mdiChevronDown"></svg-icon> -->

                    </v-expansion-panel-title>
                    <v-expansion-panel-text style="line-height: 2;">
                        <p v-html="item.description"></p>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

        </v-sheet>
    </div>
</template>

<script setup>
// import SvgIcon from '@jamescoyle/vue-icon';
// import { mdiChevronDown } from '@mdi/js';
import { onMounted, ref } from 'vue';

const stepsItems = [ /* texto para la seccion de tutorial */
    {
        id: 1,
        color: 'bg-green-lighten-5',
        color2: 'text-green-darken-4',
        icon: '📥',
        title: '1 - Request Your Information from Instagram',
        description: `1- On Instagram go to your profile, open the top-right menu (Settings and Activity), use the search bar at the top 
        and type <strong>"Download Your Information"</strong> and select it.<br> 
        2- Tap on <strong>"Create export"</strong>, choose your Instagram profile and select <strong>"Export to device"</strong><br>
        3- In the "Notify" section, select the email address where you want to receive the ZIP file<br>
        3- Tap on <strong>"Customize information"</strong>, deselect all pre-selected options and scroll to the "Connections" section and choose 
        ONLY <strong>"Followers and Following"</strong>, then press <strong>"Save"</strong><br>
        4- Click on <strong>"Date range"</strong>, select <strong>"All time"</strong>, and press "Save".<br>
        5- Click on <strong>"Format"</strong>, select <strong>"JSON"</strong>, and press <strong>"Save"</strong>. Finally, press 
        <strong>"Start export."</strong>`
    },
    {
        id: 2,
        color: 'bg-indigo-lighten-5',
        color2: 'text-indigo-darken-4',
        icon: '📧',
        title: '2 - Download the ZIP',
        description: '1- You will receive an email from Instagram (this usually takes about 5 minutes).<br> 2- Open the email sent by Instagram with the subject <strong>"Your Meta information download is ready"</strong> and click on <strong>"Download Your Information"</strong><br> 3- This will open a new Instagram tab showing the available download. Click on "Download" and confirm that it\'s your account. The download will start automatically.'
    },
    {
        id: 3,
        color: 'bg-yellow-lighten-5',
        color2: 'text-yellow-darken-4',
        icon: '📂',
        title: '3 - Upload the ZIP',
        description: 'On <a href="/results">Unfollowers Tracker tool</a>, click on "Select the ZIP file" to open the file explorer, and choose the ZIP file you downloaded earlier. Once the file is uploaded, click "Discover Unfolowers" and see who unfollowed you on Instagram!'
    }
]

// Solo el primer panel abierto al inicio
const openSteps = ref([0]);

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

<style scoped></style>