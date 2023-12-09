<template>
    <div>

        <!-- seccion para ingresar el zip -->
        <v-sheet class="d-flex flex-sm-row flex-column justify-center align-center bg-grey-lighten-4"
            style="min-height: 90vh">
            <v-sheet class="d-flex flex-column justify-center bg-grey-lighten-4">
                <v-sheet class="custom-sizing mx-auto mb-8 bg-grey-lighten-4">
                    <h1 class="text-sm-h2 text-h3 mb-8 font-weight-bold text-grey-darken-3">Conoce tu lista de Fans
                        y <span class="text-pink">Unfollowers</span>
                        <a href="https://www.instagram.com/" target="_blank">
                            <v-icon>
                                <img :src="instagramLogo" alt="Icono Instagram SVG" style="width: 32px; height: 32px;"
                                    loading="lazy" />
                            </v-icon>
                        </a>
                    </h1>

                    <p class="text-h6 text-grey-darken-1 font-weight-bold">Gestiona tu lista de seguidos y seguidores. Solo
                        adjunta el ZIP que solicitaste a Instagram aquí abajo &#128071;
                    </p>
                </v-sheet>

                <v-sheet class="w-100 d-flex flex-column justify-center align-center bg-grey-lighten-4">

                    <v-file-input :rules="rules" accept=".zip" label="Selecciona el archivo ZIP" @change="handleFileChange"
                        class="custom-sizing" @click:clear="clearFile">
                    </v-file-input>

                    <v-sheet class="d-flex flex-sm-row flex-column text-center mt-5 mb-5 justify-center w-100 bg-grey-lighten-4">
                        <v-btn prepend-icon="mdi mdi-account-remove" variant="elevated" @click="requestAPI" class="ma-3"
                            color="pink">
                            Buscar
                        </v-btn>

                        <v-btn href="/#steps" prepend-icon="mdi mdi-help" variant="tonal" class="ma-3">
                            Cómo obtengo el ZIP
                        </v-btn>
                    </v-sheet>
                </v-sheet>
            </v-sheet>

            <!-- <v-sheet class="mt-10 d-flex flex-column justify-center bg-grey-lighten-4">
                <img :src="imgResults" alt="Imagen Results SVG" class="custom-sizing-img" loading="lazy" />
            </v-sheet> -->
        </v-sheet>

        <!-- seccion de resultados -->
        <v-sheet v-if="unfollowers != null" class="d-flex flex-column bg-white pt-sm-16 pt-0" style="min-height: 100vh"
            id="results">

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
                        <p>{{ unfollowers.length }} usuarios no te siguen de vuelta</p>
                    </div>

                    <div>
                        <div v-for="(item, index) in visibleItemsUnfollowers" :key="index"
                            class="d-flex justify-space-between align-center custom-sizing-card bg-white pa-5 mb-5"
                            style="border-bottom: 1px solid #EEEEEE;">
                            <div class="d-flex align-center">
                                <v-icon icon="mdi-face-man-profile" color="pink" class="ma-1"></v-icon>

                                <div class="d-flex flex-sm-row flex-column text-center align-center justify-center">
                                    <p class="ma-1">@{{ item.user_name }}</p>
                                    <p class="ma-1 text-grey" style="font-size: 14px;">Desde {{ item.date }}</p>
                                </div>
                            </div>

                            <div class="d-flex flex-sm-row flex-column">
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="grey-darken-3" :href="item.enlace"
                                    target="_blank">Ver perfil</v-btn>
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="pink"
                                    @click="removeItem(index, 'unfollowers')">Quitar de la lista<v-tooltip
                                        activator="parent" location="top">Indica que ya lo dejaste de
                                        seguir</v-tooltip></v-btn>
                            </div>
                        </div>

                        <v-pagination v-model="currentPaginationUnfollowers" :length="totalPagesUnfollowers"
                            @input="loadPageData('unfollowers')" :total-visible="5" rounded="circle"></v-pagination>
                    </div>
                </v-window-item>

                <!-- seccion de fans -->
                <v-window-item key="fans" value="fans">
                    <div class="custom-sizing-card pa-2 text-center bg-yellow-lighten-5 text-yellow-darken-4">
                        <p>{{ fans.length }} usuarios no sigues de vuelta</p>
                    </div>

                    <div>
                        <div v-for="(item, index) in visibleItemsFans" :key="index"
                            class="d-flex justify-space-between align-center custom-sizing-card bg-white pa-5 mb-5"
                            style="border-bottom: 1px solid #EEEEEE;">
                            <div class="d-flex align-center">
                                <v-icon icon="mdi-face-man-profile" color="pink" class="ma-1"></v-icon>

                                <div class="d-flex flex-sm-row flex-column text-center align-center justify-center">
                                    <p class="ma-1">@{{ item.user_name }}</p>
                                    <p class="ma-1 text-grey" style="font-size: 14px;">Desde {{ item.date }}</p>
                                </div>
                            </div>

                            <div class="d-flex flex-sm-row flex-column">
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="grey-darken-3" :href="item.enlace"
                                    target="_blank">Ver perfil</v-btn>
                                <v-btn size="x-small" class="ma-2" variant="tonal" color="green-darken-4"
                                    @click="removeItem(index, 'fans')">Quitar de la lista<v-tooltip activator="parent"
                                        location="top">Indica que ya lo sigues</v-tooltip></v-btn>
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
        <v-snackbar v-model="alert" :timeout="5000" min-height="80px" transition="scroll-y-reverse-transition">
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
    </div>
</template>

<script>

import axios from 'axios';
import { scrollToSection } from '../utils/utils';
import instagramLogo from '../assets/instagram-logo.svg';
import imgResults from '../assets/imagen-results.svg';

export default {

    data: () => ({

        instagramLogo,
        imgResults,
        scrollToSection, //se importa la funcion de scroll o redireccion

        rules: [ // reglas de validacion del zip
            value => {
                return !value || !value.length || value[0].size < 5000000 || 'El archivo ZIP debe pesar menos de 5MB'
            },
        ],
        selectedFile: null, // bandera para detectar el zip

        // notificacion
        alert: false,
        alertText: '',

        // seccion de resultados
        tab: 'unfollowers',
        unfollowers: null,
        fans: null,

        itemsPerPage: 10,
        currentPaginationUnfollowers: 1,
        visibleItemsUnfollowers: [],
        currentPaginationFans: 1,
        visibleItemsFans: [],

        isLoading: false

    }),

    methods: {
        // Asignamos el ZIP recibido a la variable selectedFile
        handleFileChange(event) {
            const files = event.target.files;
            if (files.length > 0) {
                this.selectedFile = files[0];
            } else {
                this.clearFile();
            }
        },

        // Realizamos la solicitud a la API 
        async requestAPI() {

            try {

                // Validar si se ha seleccionado un archivo ZIP
                if (!this.selectedFile) {
                    this.alertText = 'No se ha seleccionado el archivo ZIP.';
                    this.alert = true;
                    return;
                }

                // Obtener el nombre de usuario del archivo ZIP
                const user = this.getUser();

                if (!user) {
                    this.alertText = 'Lo siento, parece que el nombre del archivo ZIP no es el original o no es el ZIP esperado.';
                    this.alert = true;
                    return;
                }

                this.isLoading = true; // Mostrar el loader

                // Enviar el archivo ZIP y verificar si se envió correctamente
                const sendZip = await this.sendZIP();

                if (!sendZip) {
                    this.isLoading = false;
                    this.alertText = 'Se ha producido un error al enviar el archivo ZIP. Inténtalo más tarde.';
                    this.alert = true;
                    return;
                }

                // Obtener la lista de unfollowers y fans
                this.unfollowers = await this.getUnfollowers(user);
                this.fans = await this.getFans(user);

                // Verificar si ocurrió un error en las solicitudes de la lista de unfollowers y fans
                if (!this.unfollowers && !this.fans) {
                    this.isLoading = false;
                    this.alertText = 'Se ha producido un error al obtener la lista de unfollowers y fans. Inténtalo más tarde.';
                    this.alert = true;
                    return;
                }
                this.loadPageData('unfollowers');
                this.loadPageData('fans');

            } catch (error) {
                this.alertText = 'Se ha producido un error inesperado. Inténtalo más tarde.';
                this.alert = true;
            } finally {
                this.isLoading = false;

                if(this.unfollowers && this.fans){
                    setTimeout(() => {
                    this.scrollToSection('results');
                }, 100);
                }
                
            }
        },

        // Limpiamos de memoria el archivo deseleccionado
        clearFile() {
            this.selectedFile = null;
        },

        getUser() {

            const fileName = this.selectedFile.name;

            if (fileName.includes('-')) {

                const split = fileName.split('-');

                if (split[0] == 'instagram' && split[split.length - 1].includes('.zip')) {

                    const lastElement = split[split.length - 1];

                    return lastElement.replace('.zip', '');

                }

            }

            return false;
        },

        async sendZIP() { //peticion al endpoint para mandar el zip
            const endpoint = 'https://admin.unfollowerstracker.com/api/store';

            const formData = new FormData();
            formData.append('username', 'nombreDeUsuario');
            formData.append('file', this.selectedFile);

            try {
                const response = await axios.post(endpoint, formData, {
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
        },

        async getUnfollowers(user) { // peticion al endpoint para obtener unfollowers
            const apiUrl = `https://admin.unfollowerstracker.com/api/unfollowers/${user}`;

            try {
                const response = await axios.get(apiUrl);

                if (response.data.status == 200) {
                    return response.data.unfollowers;
                } else {
                    return false;
                }
            } catch (error) {
                return false;
            }
        },

        async getFans(user) { // peticion al endpoint para obtener fans
            const apiUrl = `https://admin.unfollowerstracker.com/api/unfollowing/${user}`;

            try {
                const response = await axios.get(apiUrl);

                if (response.data.status == 200) {
                    return response.data.unfollowing;
                } else {
                    return false;
                }
            } catch (error) {
                return false;
            }
        },

        loadPageData(dataset) {
            if (this[dataset]) {
                const capitalDataset = this.capitalizeFirstLetter(dataset);
                const startIndex = (this[`currentPagination${capitalDataset}`] - 1) * this.itemsPerPage;
                const endIndex = startIndex + this.itemsPerPage;

                this[`visibleItems${capitalDataset}`] = this[dataset].slice(startIndex, endIndex);
            }
        },

        removeItem(index, dataset) {
            if (this[dataset]) {
                this[dataset].splice(index, 1);
                this.loadPageData(dataset);
            }
        },

        capitalizeFirstLetter(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }


    },

    computed: {

        // Calcula el número total de páginas

        totalPagesUnfollowers() {
            return Math.ceil(this.unfollowers.length / this.itemsPerPage);
        },

        totalPagesFans() {
            return Math.ceil(this.fans.length / this.itemsPerPage);
        },
    },

    watch: {

        // Detecta cambios en v-pagination
        currentPaginationUnfollowers(newPage) {
            this.loadPageData('unfollowers');
        },

        currentPaginationFans(newPage) {
            this.loadPageData('fans');
        },
    },
}
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