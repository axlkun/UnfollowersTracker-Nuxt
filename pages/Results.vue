<template>
    <div>

        <!-- seccion para ingresar el zip -->
        <v-sheet class="bg-grey-lighten-4" style="min-height: 100vh">
            <v-sheet class="d-flex flex-column justify-center bg-grey-lighten-4">
                <v-sheet class="mb-8 bg-grey-lighten-4 pl-2 pr-2">
                    <h1
                        class="text-h5 text-center mx-auto text-md-h4 mt-5 mb-5 mb-md-7 font-weight-bold text-grey-darken-3">
                        Discover your
                        Fans and <span class="text-pink">Unfollowers</span>
                    </h1>

                    <p
                        class="text-subtitle-2 mx-auto text-md-subtitle-1 text-center text-grey-darken-1 mb-md-2 font-weight-bold custom-sizing">
                        Simply attach the ZIP file you requested from Instagram below.
                    </p>

                    <!--<v-alert
                        text="Our website is temporarily unavailable due to scheduled maintenance. We'll be back in approximately 1 hour. Thank you for your patience!"
                        title="Maintenance in Progress" type="warning" variant="tonal" class="custom-sizing-card mt-5 mb-5">
                    </v-alert>-->
                </v-sheet>

                <v-sheet class="custom-sizing mx-auto d-flex flex-column justify-center align-center bg-grey-lighten-4">

                    <v-file-input :rules="rules" accept=".zip" label="Select the ZIP file" @change="handleFileChange"
                        class="custom-sizing" @click:clear="clearFile">
                    </v-file-input>

                    <v-sheet
                        class="d-flex flex-sm-row flex-column text-center mt-md-5 mb-5 mb-md-7 justify-center w-100 bg-grey-lighten-4 ga-5">
                        <v-btn variant="elevated" @click="requestAPI" color="pink">
                            <!-- <svg-icon class="mr-2" style="color: white;" type="mdi" :path="mdiAccountRemove"></svg-icon> -->
                            <v-icon :icon="mdiAccountRemove" class="mr-2" />
                            Discover Unfollowers
                        </v-btn>

                        <v-btn
                            href="/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers"
                            variant="tonal">
                            <!-- <svg-icon class="mr-2" style="color: black;" type="mdi" :path="mdiHelp"></svg-icon> -->
                            <v-icon :icon="mdiHelp" class="mr-2" />
                            How can I get the ZIP
                        </v-btn>
                    </v-sheet>

                    <client-only>
                        <v-sheet v-if="unfollowers.length > 0" class="bg-grey-lighten-4 d-flex align-center">
                            <p class="text-subtitle-1 text-pink text-center">
                                Results &#128071;
                            </p>

                        </v-sheet>

                    </client-only>
                </v-sheet>
            </v-sheet>

            <!-- Bloque del anuncio -->
            <div class="ad-container">
                <div v-html="adsenseHtml"></div>
            </div>
            
        </v-sheet>

        <div id="top-table"></div>

        <v-alert v-if="unfollowers.length > 0"
            text="The 'Unfollow / Follow' button will redirect you to the User Profile. You need to complete the action there"
            title="Info" type="info" variant="tonal" class="custom-sizing-card mt-5 mb-5">
        </v-alert>

        <v-alert v-if="unfollowers.length > 0" title="🚨 Important Notice" color="red-darken-4" variant="tonal"
            class="custom-sizing-card mt-5 mb-5">

            <div>
                In the latest update, Instagram includes <strong>deactivated accounts</strong> in the exported data.
                If you click <strong>“unfollow”</strong> and see <strong>“user not found”</strong>,
                that account no longer exists and is <strong>not a real unfollower</strong>.
            </div>
        </v-alert>

        <!-- seccion de resultados -->
        <v-card v-if="unfollowers.length > 0" class="d-flex flex-column bg-white mb-10 custom-sizing-card"
            style="min-height: 100vh" id="results">

            <v-tabs v-model="tab" fixed-tabs class="bg-transparent w-100 mb-5">
                <v-tab value="unfollowers">Unfollowers</v-tab>
                <v-tab value="fans">Fans</v-tab>
            </v-tabs>

            <v-window v-model="tab">

                <!-- seccion de unfollowers -->
                <v-window-item value="unfollowers" class="bg-transparent mb-sm-0 mb-5">

                    <v-card class="mb-5 pb-2 text-center bg-yellow-lighten-5 text-yellow-darken-4">
                        <p>{{ unfollowers.length }} users don't follow you back</p>
                    </v-card>

                    <div>
                        <div v-for="(item, index) in visibleItemsUnfollowers" :key="index"
                            class="d-flex justify-space-between align-center  bg-white pa-5 mb-5"
                            style="border-bottom: 1px solid #EEEEEE;">
                            <div class="d-flex align-center">

                                <!-- <svg-icon class="ma-1" style="color: #E91E63;" type="mdi"
                                    :path="mdiFaceManProfile"></svg-icon> -->

                                <v-icon :icon="mdiFaceManProfile" class="ma-1 text-pink" />

                                <div class="d-flex flex-sm-row flex-column text-center align-center justify-center">
                                    <p class="ma-1" style="font-size: 14px;">@{{ item.user_name }}</p>
                                    <p class="ma-1 text-grey" style="font-size: 14px;">Since {{ item.date }}</p>
                                </div>
                            </div>

                            <div class="d-flex flex-sm-row flex-column">
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="pink" :href="item.enlace"
                                    target="_blank">Unfollow</v-btn>
                                <!-- <v-btn size="x-small" class="ma-2" variant="tonal" color="pink"
                                    @click="removeItemUnfollowers(index)">Remove<v-tooltip activator="parent"
                                        location="top">Indicate that you have unfollowed</v-tooltip></v-btn> -->
                            </div>
                        </div>

                        <v-pagination v-model="currentPaginationUnfollowers" :length="totalPagesUnfollowers"
                            @input="loadPageData('unfollowers')" :total-visible="5" rounded="circle"></v-pagination>
                    </div>
                </v-window-item>

                <!-- seccion de fans -->
                <v-window-item value="fans">
                    <v-card class=" pa-2 text-center bg-yellow-lighten-5 text-yellow-darken-4">
                        <p>{{ fans.length }} you don't follow back</p>
                    </v-card>

                    <div>
                        <div v-for="(item, index) in visibleItemsFans" :key="index"
                            class="d-flex justify-space-between align-center  bg-white pa-5 mb-5"
                            style="border-bottom: 1px solid #EEEEEE;">
                            <div class="d-flex align-center">
                                <!-- <svg-icon class="ma-1" style="color: #E91E63;" type="mdi"
                                    :path="mdiFaceManProfile"></svg-icon> -->

                                <v-icon :icon="mdiFaceManProfile" class="ma-1 text-pink" />

                                <div class="d-flex flex-sm-row flex-column text-center align-center justify-center">
                                    <p class="ma-1" style="font-size: 14px;">@{{ item.user_name }}</p>
                                    <p class="ma-1 text-grey" style="font-size: 14px;">Since {{ item.date }}</p>
                                </div>
                            </div>

                            <div class="d-flex flex-sm-row flex-column">
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="green" :href="item.enlace"
                                    target="_blank">Follow</v-btn>
                                <!-- <v-btn size="x-small" class="ma-2" variant="tonal" color="green-darken-4"
                                    @click="removeItemFans(index)">Remove<v-tooltip activator="parent"
                                        location="top">Indicate that you are already following</v-tooltip></v-btn> -->
                            </div>
                        </div>

                        <v-pagination v-model="currentPaginationFans" :length="totalPagesFans"
                            @input="loadPageData('fans')" :total-visible="5" rounded="circle"></v-pagination>
                    </div>
                </v-window-item>
            </v-window>
        </v-card>

        <v-alert v-if="unfollowers.length > 0" title="🎉 New Feature Available!" color="deep-purple-accent-3"
            variant="tonal" class="custom-sizing-card mt-5 mb-5">

            <div>
                Discover who hasn't accepted your follow request — using the same ZIP file.
                <a href="/pending-requests" class="font-weight-medium text-decoration-underline ml-1">
                    Try it now →
                </a>
            </div>
        </v-alert>

        <!-- Utilidades -->

        <!-- notificacion -->
        <!-- <v-snackbar v-model="alert" :timeout="20000" min-height="80px" transition="scroll-y-reverse-transition"
            location="top right" class="ma-5">
            {{ alertText }}

            <template v-slot:actions>
                <v-btn color="pink" variant="text" @click="alert = false">
                    <svg-icon style="color: white;" type="mdi" :path="mdiClose"></svg-icon>
                    <v-icon :icon="mdiClose" class="ma-1 text-white" />
                </v-btn>
            </template>
</v-snackbar> -->

        <v-dialog v-model="alert" persistent max-width="400" class="alert-dialog">
            <v-card class="pa-4">

                <!-- TÍTULO CON ÍCONO -->
                <v-card-title class="d-flex align-center">
                    <!-- <svg-icon class="mr-2" style="color: gray;" type="mdi" :path="mdiAlertCircleOutline"></svg-icon> -->
                    <v-icon :icon="mdiAlertCircleOutline" class="mr-2 text-gray" />
                    <span class="text-h6 font-weight-medium">UnfollowersTracker</span>
                </v-card-title>

                <!-- TEXTO DEL MENSAJE -->
                <v-card-text>
                    {{ alertText }}
                </v-card-text>

                <!-- BOTÓN DE CIERRE -->
                <v-card-actions class="justify-end">
                    <v-btn @click="alert = false" color="pink">
                        Close
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-dialog>

        <!-- loader -->
        <v-overlay :model-value="isLoading" class="align-center justify-center">
            <v-progress-circular color="pink" indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <!-- <ClientOnly>
            <AntiAdblocker v-if="adblocker" :adblock="adblocker"></AntiAdblocker>
        </ClientOnly> -->

    </div>
</template>

<script setup>
import api from '../api';
import { scrollToSection } from '../utils';
import { ref, computed, watch } from 'vue';
//import AntiAdblocker from '~/components/AntiAdblocker.vue';
//import { checkAdblocker } from '../utils/utils';
// import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountRemove, mdiHelp, mdiFaceManProfile, mdiClose, mdiAlertCircleOutline } from '@mdi/js';

const adsenseHtml = `
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-1163363741001629"
       data-ad-slot="4903707508"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
`;

const rules = ref([
    value => {
        return !value || !value.length || value[0].size < 15000000 || 'The ZIP file size must be less than 15MB';
    },
]);

const selectedFile = ref(null);
const alert = ref(false);
const alertText = ref('Something went wrong :(');
const tab = ref('unfollowers');
const unfollowers = ref([]);
const fans = ref([]);
let itemsPerPage = ref(10);
const currentPaginationUnfollowers = ref(1);
const visibleItemsUnfollowers = ref([]);
const currentPaginationFans = ref(1);
const visibleItemsFans = ref([]);
const isLoading = ref(false);
//const adblocker = ref(false);

const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        selectedFile.value = files[0];
    } else {
        clearFile();
    }
};

const requestAPI = async () => {
    try {

        unfollowers.value = [];
        fans.value = [];

        if (!selectedFile.value) {
            alertText.value = 'The ZIP file has not been selected';
            alert.value = true;
            return;
        }

        const user = getUser();

        if (!user) {
            alertText.value = 'Im sorry, it seems that the ZIP file name is not original or not the expected ZIP';
            alert.value = true;
            return;
        }

        isLoading.value = true;

        const sendZipResponse = await sendZIP(user);

        console.log("send zip", sendZipResponse)

        if (sendZipResponse.status !== 200) {
            isLoading.value = false;

            // Mostrar mensaje devuelto por el backend si existe
            alertText.value = sendZipResponse.message || 'An error occurred while sending the ZIP file.';
            alert.value = true;
            return;
        }

        const unfollowersData = await getUnfollowers(user);
        const fansData = await getFans(user);

        console.log("unfollowersData", unfollowersData)
        console.log("fansData", fansData)

        unfollowers.value = unfollowersData;
        fans.value = fansData;

        if (!unfollowers.value && !fans.value) {
            isLoading.value = false;
            alertText.value = 'It appears the ZIP file content is incorrect. Please generate a new one or contact support';
            alert.value = true;
            return;
        }

        loadPageDataUnfollowers();
        loadPageDataFans();

    } catch (error) {
        alertText.value = 'An unexpected error has occurred. Please try again later.';
        alert.value = true;
    } finally {
        isLoading.value = false;

        if (unfollowers.value.length >= 1 || fans.value.length >= 1) {
            setTimeout(() => {
                scrollToSection('results');
            }, 100);
        }
    }
};

const clearFile = () => {
    selectedFile.value = null;
};

const getUser = () => {
    const fileName = selectedFile.value.name;

    if (fileName.includes("instagram") && fileName.endsWith(".zip")) {

        const nombreUsuario = fileName.replace(/\./g, '-');

        return nombreUsuario;
    } else {
        // Si el nombre de archivo no cumple con los requisitos, devolver null o manejar el error según sea necesario
        return false;
    }
};

const sendZIP = async (user) => {
    const endpoint = '/api/store';

    const formData = new FormData();
    formData.append('username', user);
    formData.append('file', selectedFile.value);

    try {
        const response = await api.post(endpoint, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data; // devuelve todo el cuerpo
    } catch (error) {
        // Si el servidor envía respuesta de error, extraemos el mensaje
        if (error.response && error.response.data) {
            return error.response.data;
        }

        // Error inesperado (sin respuesta del backend)
        return {
            status: 500,
            message: 'Unexpected error while uploading ZIP'
        };
    }
};

const getUnfollowers = async (user) => {
    const apiUrl = `/api/unfollowers/${user}`;

    try {
        const response = await api.get(apiUrl);

        if (response.data.status == 200) {
            return response.data.unfollowers;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

const getFans = async (user) => {
    const apiUrl = `/api/unfollowing/${user}`;

    try {
        const response = await api.get(apiUrl);

        if (response.data.status == 200) {
            return response.data.unfollowing;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

const loadPageDataUnfollowers = () => {
    const startIndex = (currentPaginationUnfollowers.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;

    visibleItemsUnfollowers.value = unfollowers.value.slice(startIndex, endIndex);
};

const loadPageDataFans = () => {
    const startIndex = (currentPaginationFans.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;

    visibleItemsFans.value = fans.value.slice(startIndex, endIndex);
};

const removeItemUnfollowers = (index) => {

    unfollowers.value.splice(index, 1);
    loadPageDataUnfollowers();

};

const removeItemFans = (index) => {

    fans.value.splice(index, 1);
    loadPageDataFans();

};

const totalPagesUnfollowers = computed(() => {
    return Math.ceil(unfollowers.value.length / itemsPerPage.value);
});

const totalPagesFans = computed(() => {
    return Math.ceil(fans.value.length / itemsPerPage.value);
});


watch(currentPaginationUnfollowers, (newPage) => {
    loadPageDataUnfollowers();
    scrollToSection('top-table');
});

watch(currentPaginationFans, (newPage) => {
    loadPageDataFans();
    scrollToSection('top-table');
});


useSeoMeta({

    robots: 'index, follow',

    title: 'UnfollowersTracker | List of Unfollowers',
    author: 'Axel Cruz',
    description: 'Discover who doesn\'t follow you back on Instagram. Free tool to manage your follower list without passwords.',
    keywords: 'Instagram, followers, non-followers, free tool, follower management, Instagram optimization, reach on Instagram, no password, follower tracking, follower analytics, Instagram statistics, follower monitoring.',

    ogTitle: 'UnfollowersTracker | List of Unfollowers',
    ogDescription: 'Discover who doesn\'t follow you back on Instagram. Free tool to manage your follower list without passwords.',
    ogImage: 'https://unfollowerstracker.com/unfollowers-og-image.png',
    ogUrl: 'https://unfollowerstracker.com/',
    ogType: 'website',

    twitterCreator: '@Axlkun',
    twitterImage: 'https://unfollowerstracker.com/unfollowers-twitter-image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'UnfollowersTracker | List of Unfollowers',
    twitterDescription: 'Discover who doesn\'t follow you back on Instagram. Free tool to manage your follower list without passwords.'
})

onMounted(async () => {

    // (adsbygoogle = window.adsbygoogle || []).push({});

    // setTimeout(async () => {
    //     adblocker.value = await checkAdblocker();
    // }, 2000);

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
.custom-sizing-card {
    width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 960px) {
        width: 50%;
        margin: 0 auto;
    }
}
</style>