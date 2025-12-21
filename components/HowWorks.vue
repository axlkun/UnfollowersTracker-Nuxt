<template>
    <div>

        <div class="ad-container">
            <div v-html="adsenseHtml"></div>
        </div>

        <v-sheet class="d-flex flex-column justify-center custom-sizing mx-auto" id="how-works">

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

        </v-sheet>

        <section>
            <v-container>
                <!-- Grid pasos -->
                <v-row class="mt-2 justify-center align-center steps-row" align="stretch" justify="center" dense>
                    <template v-for="(step, index) in steps" :key="index">
                        <!-- Paso -->
                        <v-col cols="12" md="3" class="d-flex justify-center">
                            <v-card class="feature-card rounded-2xl pa-6 elevation-1 ma-2 text-center"
                                :class="`feature-card--${step.tint}`" :to="step.link" link>
                                <v-avatar size="64" class="avatar-tint mb-4" :class="`avatar-tint--${step.tint}`">
                                    <v-img :src="step.image" :alt="step.title" cover />
                                </v-avatar>

                                <div class="text-h6 font-weight-bold mb-2">
                                    {{ index + 1 }}. {{ step.title }}
                                </div>
                                <div class="text-body-2 text-medium-emphasis">
                                    {{ step.description }}
                                </div>
                            </v-card>
                        </v-col>

                        <!-- Flecha (excepto en el último) -->
                        <v-col v-if="index < steps.length - 1" cols="12" md="1"
                            class="d-flex justify-center align-center arrow-col">
                            <v-icon :icon="mdiArrowRightThick" size="36" class="arrow-icon" />
                        </v-col>
                    </template>
                </v-row>
            </v-container>
        </section>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { mdiArrowRightThick } from '@mdi/js'

const steps = ref([
    {
        title: "Request your data ZIP file from Instagram",
        description: "Go to Instagram and request your following and followers list.",
        image: "/images/folder.png",
        tint: "blue",
        link: "/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers",
    },
    {
        title: "Download the data ZIP file",
        description: "You'll get an email with your data ZIP file to download.",
        image: "/images/mail.png",
        tint: "green",
        link: "/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers",
    },
    {
        title: "Upload to Unfollowers Tracker",
        description: "Upload your ZIP file and discover your Instagram Unfollowers.",
        image: "/images/boy.png",
        tint: "pink",
        link: "/results",
    },
])

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

<style scoped>
/* --- FLECHAS RESPONSIVAS --- */
.arrow-col {
    padding: 0;
}

.arrow-icon {
    color: #9e9e9e;
}

/* En mobile flechas se ocultan o cambian a vertical ↓ */
@media (max-width: 960px) {
    .arrow-icon {
        transform: rotate(90deg);
        /* flecha hacia abajo */
        margin: 8px 0;
    }
}

/* Base card (igual que ya tenías) */
.feature-card {
    position: relative;
    border: 1px solid #eee;
    background-color: #fff;
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.feature-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--v-shadow-3);
    border-color: #e5e7eb;
}

.feature-card--pink {
    background-color: #fff5f8;
}

.feature-card--blue {
    background-color: #f3f9ff;
}

.feature-card--green {
    background-color: #f2fbf2;
}

.avatar-tint {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
}

.avatar-tint--pink {
    background: rgba(233, 30, 99, 0.12);
}

.avatar-tint--blue {
    background: rgba(33, 150, 243, 0.12);
}

.avatar-tint--green {
    background: rgba(76, 175, 80, 0.12);
}
</style>