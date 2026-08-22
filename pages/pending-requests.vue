<template>
    <div>

        <!-- seccion para ingresar el zip -->
        <v-sheet class="bg-grey-lighten-4" style="min-height: 100vh">
            <v-sheet class="d-flex flex-column justify-center bg-grey-lighten-4">
                <v-sheet class="mb-6 bg-grey-lighten-4 pl-2 pr-2">
                    <h1
                        class="text-h5 text-center mx-auto text-md-h4 mt-5 mb-5 mb-md-7 font-weight-bold text-grey-darken-3">
                        See Who Hasn’t Accepted Your Instagram
                        <span class="text-deep-purple-accent-3">Follow Requests</span>
                    </h1>

                    <p
                        class="text-subtitle-2 mx-auto text-md-subtitle-1 text-center text-grey-darken-1 mb-md-2 font-weight-bold custom-sizing">
                        Check every pending request you've sent — no password, just your Instagram ZIP file.
                    </p>
                </v-sheet>

                <v-sheet class="custom-sizing mx-auto d-flex flex-column justify-center align-center bg-grey-lighten-4">

                    <v-file-input :rules="rules" accept=".zip" label="Select the ZIP file" @change="handleFileChange"
                        class="custom-sizing" @click:clear="clearFile">
                    </v-file-input>

                    <v-sheet
                        class="d-flex flex-sm-row flex-column text-center mt-md-5 mb-5 mb-md-7 justify-center w-100 bg-grey-lighten-4 ga-5">
                        <v-btn variant="elevated" @click="requestAPI" color="deep-purple-accent-3">
                            <v-icon :icon="mdiSendCheck" class="mr-2" />
                            See My Pending Requests
                        </v-btn>

                        <v-btn
                            href="/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers"
                            variant="tonal">
                            <v-icon :icon="mdiHelp" class="mr-2" />
                            How can I get the ZIP
                        </v-btn>
                    </v-sheet>

                    <client-only>
                        <v-sheet v-if="hasSearched" class="bg-grey-lighten-4 d-flex align-center">
                            <p class="text-subtitle-1 text-deep-purple-accent-3 text-center">
                                Results &#128071;
                            </p>
                        </v-sheet>
                    </client-only>
                </v-sheet>
            </v-sheet>

            <!-- Bloque del anuncio -->
            <AdSlot :key="route.fullPath" ad-slot="8430456029" />
        </v-sheet>

        <!-- Contenido de contexto: da texto real a la pagina para la subasta de anuncios
             y ayuda al usuario a interpretar sus resultados antes/despues de subir el ZIP -->
        <PendingRequestsGuide></PendingRequestsGuide>
        <PendingRequestsFAQ></PendingRequestsFAQ>

        <div id="top-table"></div>

        <div v-if="hasSearched" class="custom-sizing-card mx-auto mt-5 mb-10">

            <h2 class="text-center text-h5 text-md-h4 ma-1 mb-6 font-weight-black text-deep-purple-accent-3 pa-4">Your
                Results</h2>

            <!-- Resumen rapido: numero grande en vez del banner amarillo plano -->
            <v-sheet class="d-flex justify-center mb-6">
                <v-card rounded="lg" elevation="2" class="pa-5 text-center" style="max-width: 320px; width: 100%;">
                    <p class="text-h3 font-weight-black text-deep-purple-accent-3 mb-1">{{ pendingRequests.length }}</p>
                    <p class="text-body-2 text-grey-darken-1 font-weight-medium">haven't accepted your follow request
                    </p>
                </v-card>
            </v-sheet>

            <v-alert v-if="pendingRequests.length > 0" density="compact" type="info" variant="tonal" class="mb-6">
                The <strong>Cancel Request</strong> button redirects you to the user's profile — you complete the
                action there.
            </v-alert>

            <!-- seccion de resultados -->
            <v-card class="d-flex flex-column bg-white" style="min-height: 100vh" id="results" rounded="lg"
                elevation="2">

                <v-tabs v-model="tab" fixed-tabs class="bg-transparent w-100">
                    <v-tab value="pendingRequests">Pending Follow Requests ({{ pendingRequests.length }})</v-tab>
                </v-tabs>

                <v-divider></v-divider>

                <div class="pa-4 pb-2">
                    <v-text-field v-model="searchQuery" density="compact" variant="outlined" rounded="lg"
                        placeholder="Search by username" :prepend-inner-icon="mdiMagnify" clearable hide-details
                        single-line>
                    </v-text-field>
                </div>

                <v-window v-model="tab">

                    <!-- seccion de pendingRequests -->
                    <v-window-item value="pendingRequests" class="bg-transparent mb-sm-0 mb-5">

                        <div v-if="filteredPendingRequests.length === 0" class="text-center pa-10">
                            <v-icon :icon="pendingRequests.length === 0 ? mdiPartyPopper : mdiMagnify" size="40"
                                class="text-grey-lighten-1 mb-3" />
                            <p class="text-grey-darken-1 font-weight-medium">
                                <span v-if="pendingRequests.length === 0">Great news — everyone has accepted your
                                    follow requests!</span>
                                <span v-else>No usernames match “{{ searchQuery }}”.</span>
                            </p>
                        </div>

                        <div v-else>
                            <div v-for="(item, index) in visibleItemsPendingRequests" :key="item.user_name"
                                class="result-row" :class="{ 'result-row--alt': index % 2 === 1 }">
                                <div class="d-flex align-center">
                                    <v-avatar size="40" color="deep-purple-lighten-5" class="mr-3">
                                        <v-icon :icon="mdiFaceManProfile" color="deep-purple-accent-3" size="22" />
                                    </v-avatar>

                                    <div class="d-flex flex-sm-row flex-column text-center align-center justify-center">
                                        <p class="ma-1" style="font-size: 14px;">@{{ item.user_name }}</p>
                                        <p class="ma-1 text-grey" style="font-size: 14px;">Since {{ item.date }}</p>
                                    </div>
                                </div>

                                <div class="d-flex flex-sm-row flex-column">
                                    <v-btn size="x-small" class="ma-2" variant="tonal" color="deep-purple-accent-3"
                                        :href="item.enlace" target="_blank">Cancel Request</v-btn>
                                </div>
                            </div>

                            <v-pagination v-model="currentPaginationPendingRequests" :length="totalPagesPendingRequests"
                                :total-visible="5" rounded="circle"></v-pagination>
                        </div>
                    </v-window-item>
                </v-window>
            </v-card>

            <v-alert v-if="pendingRequests.length > 0" title="🎉 Also Check This!" color="pink" variant="tonal"
                class="mt-6">
                <div>
                    See who doesn't follow you back on Instagram — using the same ZIP file.
                    <a href="/results" class="font-weight-medium text-decoration-underline ml-1">
                        Try it now →
                    </a>
                </div>
            </v-alert>
        </div>

        <!-- Utilidades -->

        <v-dialog v-model="alert" persistent max-width="400" class="alert-dialog">
            <v-card class="pa-4">

                <v-card-title class="d-flex align-center">
                    <v-icon :icon="mdiAlertCircleOutline" class="mr-2 text-gray" />
                    <span class="text-h6 font-weight-medium">UnfollowersTracker</span>
                </v-card-title>

                <v-card-text>
                    {{ alertText }}
                </v-card-text>

                <v-card-actions class="justify-end">
                    <v-btn @click="alert = false" color="deep-purple-accent-3">
                        Close
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-dialog>

        <!-- loader -->
        <v-overlay :model-value="isLoading" class="align-center justify-center">
            <v-progress-circular color="deep-purple-accent-3" indeterminate size="64"></v-progress-circular>
        </v-overlay>

    </div>
</template>

<script setup>
import api from '../api';
import { scrollToSection } from '../utils';
import { ref, computed, watch } from 'vue';
import { mdiHelp, mdiFaceManProfile, mdiSendCheck, mdiAlertCircleOutline, mdiMagnify, mdiPartyPopper } from '@mdi/js';
import AdSlot from '../components/AdSlot.vue';
import PendingRequestsGuide from '../components/PendingRequestsGuide.vue';
import PendingRequestsFAQ from '../components/PendingRequestsFAQ.vue';

const route = useRoute();

const rules = ref([
    value => {
        return !value || !value.length || value[0].size < 15000000 || 'The ZIP file size must be less than 15MB';
    },
]);

const selectedFile = ref(null);
const alert = ref(false);
const alertText = ref('Something went wrong :(');
const tab = ref('pendingRequests');
const pendingRequests = ref([]);
const itemsPerPage = ref(10);
const currentPaginationPendingRequests = ref(1);
const isLoading = ref(false);
const hasSearched = ref(false);
const searchQuery = ref('');

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

        pendingRequests.value = [];
        hasSearched.value = false;

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

        if (sendZipResponse.status !== 200) {
            isLoading.value = false;

            // Mostrar mensaje devuelto por el backend si existe
            alertText.value = sendZipResponse.message || 'An error occurred while sending the ZIP file.';
            alert.value = true;
            return;
        }

        const pendingRequestsResponse = await getPendingRequests(user);

        if (!pendingRequestsResponse.success) {
            alertText.value = pendingRequestsResponse.message || 'It appears the ZIP file content is incorrect. Please generate a new one or contact support';
            alert.value = true;
            return;
        }

        pendingRequests.value = pendingRequestsResponse.data;

        hasSearched.value = true;
        searchQuery.value = '';
        currentPaginationPendingRequests.value = 1;

    } catch (error) {
        alertText.value = 'An unexpected error has occurred. Please try again later.';
        alert.value = true;
    } finally {
        isLoading.value = false;

        if (hasSearched.value) {
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

const getPendingRequests = async (user) => {
    const apiUrl = `/api/pending-follow-requests/${user}`;

    try {
        const response = await api.get(apiUrl);

        if (response.data.status === 200) {
            return {
                success: true,
                data: response.data.pending_requests,
            };
        } else {
            return {
                success: false,
                message: response.data.message || 'Unexpected response from server.',
            };
        }
    } catch (error) {

        return {
            success: false,
            message: error.response?.data?.message || 'An unexpected error occurred when connecting to the server.',
        };
    }
};

// Filtro por username: se recalcula solo, sin tocar la lista original
const filteredPendingRequests = computed(() => {
    const query = searchQuery.value.trim().toLowerCase();
    if (!query) return pendingRequests.value;
    return pendingRequests.value.filter(item => item.user_name.toLowerCase().includes(query));
});

const totalPagesPendingRequests = computed(() => {
    return Math.max(1, Math.ceil(filteredPendingRequests.value.length / itemsPerPage.value));
});

const visibleItemsPendingRequests = computed(() => {
    const startIndex = (currentPaginationPendingRequests.value - 1) * itemsPerPage.value;
    return filteredPendingRequests.value.slice(startIndex, startIndex + itemsPerPage.value);
});

watch(searchQuery, () => {
    currentPaginationPendingRequests.value = 1;
});

watch(currentPaginationPendingRequests, () => {
    scrollToSection('top-table');
});

useSeoMeta({

    robots: 'index, follow',

    title: 'UnfollowersTracker | Pending Follow Requests',
    author: 'Axel Cruz',
    description: 'Discover who doesn\'t accept your follow request on Instagram. Free tool to manage your follower list without passwords.',
    keywords: 'Instagram, followers, non-followers, free tool, follower management, Instagram optimization, reach on Instagram, no password, follower tracking, follower analytics, Instagram statistics, follower monitoring.',

    ogTitle: 'UnfollowersTracker | Pending Follow Requests',
    ogDescription: 'Discover who doesn\'t accept your follow request on Instagram. Free tool to manage your follower list without passwords.',
    ogImage: 'https://unfollowerstracker.com/unfollowers-og-image.png',
    ogUrl: 'https://unfollowerstracker.com/pending-requests',
    ogType: 'website',

    twitterCreator: '@Axlkun',
    twitterImage: 'https://unfollowerstracker.com/unfollowers-twitter-image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'UnfollowersTracker | Pending Follow Requests',
    twitterDescription: 'Discover who doesn\'t accept your follow request on Instagram. Free tool to manage your follower list without passwords.'
})

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

.result-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    margin-bottom: 0;
    border-bottom: 1px solid #EEEEEE;
    transition: background-color 0.15s ease;
}

.result-row--alt {
    background-color: #FAFAFA;
}

.result-row:hover {
    background-color: #EDE7F6;
}
</style>
