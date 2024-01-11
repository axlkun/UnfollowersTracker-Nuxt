<template>
    <div>

        <!-- seccion para ingresar el zip -->
        <v-sheet class="d-flex flex-sm-row flex-column justify-center align-center bg-grey-lighten-4"
            style="min-height: 90vh">
            <v-sheet class="d-flex flex-column justify-center bg-grey-lighten-4">
                <v-sheet class="custom-sizing mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-sm-h2 text-h3 mb-8 font-weight-bold text-grey-darken-3">Discover your fans
                        and <span class="text-pink">Unfollowers</span>
                        <a href="https://www.instagram.com/" target="_blank">
                            <v-icon>
                                <img :src="instagramLogo" alt="Icono Instagram SVG" style="width: 32px; height: 32px;"
                                    loading="lazy" />
                            </v-icon>
                        </a>
                    </h1>

                    <p class="text-h6 text-grey-darken-1 font-weight-bold">Manage your list of following and followers.
                        Simply
                        attach the ZIP file you requested from Instagram below. &#128071;
                    </p>
                </v-sheet>

                <v-sheet class="w-100 d-flex flex-column justify-center align-center bg-grey-lighten-4">

                    <v-file-input :rules="rules" accept=".zip" label="Select the ZIP file" @change="handleFileChange"
                        class="custom-sizing" @click:clear="clearFile">
                    </v-file-input>

                    <v-sheet
                        class="d-flex flex-sm-row flex-column text-center mt-5 mb-5 justify-center w-100 bg-grey-lighten-4">
                        <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated" @click="requestAPI" class="ma-3"
                            color="pink">
                            Discover Unfollowers
                        </v-btn>

                        <v-btn href="/#steps" prepend-icon="mdi mdi-help" variant="tonal" class="ma-3">
                            How can I get the ZIP
                        </v-btn>
                    </v-sheet>
                </v-sheet>
            </v-sheet>

            <!-- <v-sheet class="mt-10 d-flex flex-column justify-center bg-grey-lighten-4">
                <img :src="imgResults" alt="Imagen Results SVG" class="custom-sizing-img" loading="lazy" />
            </v-sheet> -->
        </v-sheet>

        <!-- seccion de resultados -->
        <v-sheet v-if="unfollowers.length > 0" class="d-flex flex-column bg-white pt-sm-16 pt-0 pb-10"
            style="min-height: 100vh" id="results">

            <v-tabs v-model="tab" fixed-tabs class="bg-transparent w-100 ma-5">
                <v-tab>
                    Unfollowers
                </v-tab>
                <v-tab>
                    Fans
                </v-tab>
            </v-tabs>

            <v-window v-model="tab">

                <!-- seccion de unfollowers -->
                <v-window-item key="unfollowers" value="unfollowers" class="bg-transparent mb-sm-0 mb-5">

                    <div class="custom-sizing-card pa-2 text-center bg-yellow-lighten-5 text-yellow-darken-4">
                        <p>{{ unfollowers.length }} users don't follow you back</p>
                    </div>

                    <div>
                        <div v-for="(item, index) in visibleItemsUnfollowers" :key="index"
                            class="d-flex justify-space-between align-center custom-sizing-card bg-white pa-5 mb-5"
                            style="border-bottom: 1px solid #EEEEEE;">
                            <div class="d-flex align-center">
                                <v-icon icon="mdi-face-man-profile" color="pink" class="ma-1"></v-icon>

                                <div class="d-flex flex-sm-row flex-column text-center align-center justify-center">
                                    <p class="ma-1">@{{ item.user_name }}</p>
                                    <p class="ma-1 text-grey" style="font-size: 14px;">Since {{ item.date }}</p>
                                </div>
                            </div>

                            <div class="d-flex flex-sm-row flex-column">
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="grey-darken-3" :href="item.enlace"
                                    target="_blank">View profile</v-btn>
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="pink"
                                    @click="removeItemUnfollowers(index)">Remove<v-tooltip activator="parent"
                                        location="top">Indicate that you have unfollowed</v-tooltip></v-btn>
                            </div>
                        </div>

                        <v-pagination v-model="currentPaginationUnfollowers" :length="totalPagesUnfollowers"
                            @input="loadPageData('unfollowers')" :total-visible="5" rounded="circle"></v-pagination>
                    </div>
                </v-window-item>

                <!-- seccion de fans -->
                <v-window-item key="fans" value="fans">
                    <div class="custom-sizing-card pa-2 text-center bg-yellow-lighten-5 text-yellow-darken-4">
                        <p>{{ fans.length }} you dont' follow back</p>
                    </div>

                    <div>
                        <div v-for="(item, index) in visibleItemsFans" :key="index"
                            class="d-flex justify-space-between align-center custom-sizing-card bg-white pa-5 mb-5"
                            style="border-bottom: 1px solid #EEEEEE;">
                            <div class="d-flex align-center">
                                <v-icon icon="mdi-face-man-profile" color="pink" class="ma-1"></v-icon>

                                <div class="d-flex flex-sm-row flex-column text-center align-center justify-center">
                                    <p class="ma-1">@{{ item.user_name }}</p>
                                    <p class="ma-1 text-grey" style="font-size: 14px;">Since {{ item.date }}</p>
                                </div>
                            </div>

                            <div class="d-flex flex-sm-row flex-column">
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="grey-darken-3" :href="item.enlace"
                                    target="_blank">View profile</v-btn>
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="green-darken-4"
                                    @click="removeItemFans(index)">Remove<v-tooltip activator="parent"
                                        location="top">Indicate that you are already following</v-tooltip></v-btn>
                            </div>
                        </div>

                        <v-pagination v-model="currentPaginationFans" :length="totalPagesFans" @input="loadPageData('fans')"
                            :total-visible="5" rounded="circle"></v-pagination>
                    </div>
                </v-window-item>
            </v-window>
        </v-sheet>

        <!-- Utilidades -->

        <!-- notificacion -->
        <v-snackbar v-model="alert" :timeout="5000" min-height="80px" transition="scroll-y-reverse-transition" location="top right" class="ma-5">
            {{ alertText }}

            <template v-slot:actions>
                <v-btn color="pink" variant="text" @click="alert = false">
                    <span class="mdi mdi-close"></span>
                </v-btn>
            </template>
        </v-snackbar>

        <!-- loader -->
        <v-overlay :model-value="isLoading" class="align-center justify-center">
            <v-progress-circular color="pink" indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <ClientOnly>
            <AntiAdblocker v-if="adblocker" :adblock="adblocker"></AntiAdblocker>
        </ClientOnly>
        
    </div>
</template>

<script setup>
import api from '../api';
import { scrollToSection } from '../utils';
import { ref, computed, watch } from 'vue';
import instagramLogo from '../assets/instagram-logo.svg';
import AntiAdblocker from '~/components/AntiAdblocker.vue';

const rules = ref([
    value => {
        return !value || !value.length || value[0].size < 5000000 || 'The ZIP file size must be less than 5MB';
    },
]);

const selectedFile = ref(null);
const alert = ref(false);
const alertText = ref('');
const tab = ref('unfollowers');
const unfollowers = ref([]);
const fans = ref([]);
let itemsPerPage = ref(10);
const currentPaginationUnfollowers = ref(1);
const visibleItemsUnfollowers = ref([]);
const currentPaginationFans = ref(1);
const visibleItemsFans = ref([]);
const isLoading = ref(false);
const adblocker = ref(false);

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

        const sendZip = await sendZIP(user);

        if (!sendZip) {
            isLoading.value = false;
            alertText.value = 'An error occurred while sending the ZIP file. Please try again later';
            alert.value = true;
            return;
        }

        const unfollowersData = await getUnfollowers(user);
        const fansData = await getFans(user);

        unfollowers.value = unfollowersData;
        fans.value = fansData;

        // console.log('Unfollowers:', JSON.stringify(unfollowers.value));
        // console.log('Fans:', JSON.stringify(fans.value));

        if (!unfollowers.value && !fans.value) {
            isLoading.value = false;
            alertText.value = 'An error occurred while getting the list of unfollowers and fans. Please try again later';
            alert.value = true;
            return;
        }

        loadPageDataUnfollowers();
        loadPageDataFans();

    } catch (error) {
        alertText.value = 'An unexpected error has occurred. Please try again later.';
        console.log('Catch error: ' + error);
        alert.value = true;
    } finally {
        isLoading.value = false;

        if (unfollowers.value && fans.value) {
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
        // Obtener el año actual
        // const year = new Date().getFullYear().toString();

        // // Construir la cadena que indica el año actual
        // const yearString = year.toString();

        // // Extraer la parte entre "instagram" y el año actual
        // const startIndex = fileName.indexOf("instagram") + "instagram".length;
        // const endIndex = fileName.indexOf(yearString);

        // if (startIndex < 0 || endIndex < 0) {
        //     // Si no se encuentra la información necesaria, devolver null o manejar el error según sea necesario
        //     return false;
        // }

        // const usuarioConGuiones = fileName.substring(startIndex, endIndex);

        // // Eliminar los guiones y obtener el nombre de usuario final
        // const nombreUsuario = usuarioConGuiones.replace(/-/g, '');

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

        if (response.data.status == 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

const getUnfollowers = async (user) => {
    const apiUrl = `/api/unfollowers/${user}`;

    try {
        const response = await api.get(apiUrl);

        if (response.data.status == 200) {
            return response.data.unfollowers;
        } else {
            console.log('Error: ' + response);
            return false;
        }
    } catch (error) {
        console.log('Error: ' + error);
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
            console.log('Error: ' + response);
            return false;
        }
    } catch (error) {
        console.log('Error: ' + error);
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
});

watch(currentPaginationFans, (newPage) => {
    loadPageDataFans();
});


useSeoMeta({

    robots: 'index, follow',

    title: 'UnfollowersTracker | List of Unfollowers',
    author: 'Axel Cruz',
    description: 'Discover who doesn\'t follow you back on Instagram. Free tool to manage your follower list without passwords.',
    keywords: 'Instagram, followers, non-followers, free tool, follower management, Instagram optimization, reach on Instagram, no password, follower tracking, follower analytics, Instagram statistics, follower monitoring.',

    ogTitle: 'UnfollowersTracker | Discover your Instagram Unfollowers',
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

const checkAdblocker = () => {
  try {
    fetch(
      new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
        method: 'HEAD',
        mode: 'no-cors'
      })
    ).then(() => {
      console.log('Bloqueador de anuncios desactivado');
    }).catch((error) => {
      console.log('Bloqueador de anuncios activado');
      adblocker.value = true;
    });
  } catch (e) {
    // La solicitud falló, probablemente debido al bloqueador de anuncios
    console.log('Bloqueador de anuncios activado');
    adblocker.value = true;
  }
}

onMounted(() => {
  checkAdblocker();
});
</script>


<style scoped>
.custom-sizing-card {
    width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
        width: 75%;
        margin: 0 auto;
    }
}
</style>