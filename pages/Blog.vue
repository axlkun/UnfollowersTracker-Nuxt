<template>
    <v-sheet color="#F5F5F5">
        <v-sheet v-if="loading" class="skeleton-blog">
            <!-- Contenedor principal -->
            <v-sheet>
                <v-sheet>

                    <v-skeleton-loader type="chip" color="#F5F5F5"></v-skeleton-loader>
                    <v-skeleton-loader type="heading" color="#F5F5F5"></v-skeleton-loader>
                    <v-skeleton-loader type="subtitle" color="#F5F5F5"></v-skeleton-loader>
                    <v-skeleton-loader type="subtitle" color="#F5F5F5"></v-skeleton-loader>

                    <v-sheet class="d-flex flex-column-reverse flex-md-column">
                        <template v-for="rowIndex in 1">
                            <v-row :class="rowIndex === 1 ? 'pt-md-10' : ''">
                                <template v-for="colIndex in 3">
                                    <v-col cols="12" md="4">
                                        <v-skeleton-loader :height="rowIndex == 1 ? 500 : 400" type="image, article, chip"
                                            color="#F5F5F5"></v-skeleton-loader>
                                    </v-col>
                                </template>
                            </v-row>
                        </template>
                    </v-sheet>

                </v-sheet>
            </v-sheet>

        </v-sheet>

        <BlogSection v-else :blogEntry="blogEntry"></BlogSection>
    </v-sheet>
</template>

<script setup>
import api from '../api';
import BlogSection from '../components/BlogSection.vue';

const blogEntry = ref([]);
const loading = ref(true);

const getArticles = async () => {
    try {
        const response = await api.get('/api/articles');

        if (response.status === 200) {
            blogEntry.value = response.data.data;
        } else {
            console.error('Respuesta no exitosa:', response);
            $router.push('/');
        }
    } catch (error) {
        console.error('Error al hacer la solicitud GET:', error);
        $router.push('/');
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    getArticles();
});

useSeoMeta({

    robots: 'index, follow',

    title: 'UnfollowersTracker | Blog',
    author: 'Axel Cruz',
    description: 'Descubre artículos relacionados con crecimiento en redes sociales, tips de como crecer una audiencia, secretos del algoritmo y mucho mas en el Blog de Unfollowers Tracker, herramienta gratuita para gestionar tu lista de seguidores de Instagram sin contraseñas.',
    keywords: 'Instagram, seguidores, no seguidores, herramienta gratuita, gestión de seguidores, optimización de Instagram, alcance en Instagram, no contraseña, seguimiento de seguidores, analítica de seguidores, estadísticas de Instagram, monitorización de seguidores.',

    ogTitle: 'UnfollowersTracker',
    ogDescription: 'Descubre quién no te sigue en Instagram. Herramienta gratuita para gestionar tu lista de seguidores sin contraseñas.',
    ogImage: 'https://unfollowerstracker.com/unfollowers-og-image.png',
    ogUrl: 'https://unfollowerstracker.com/',
    ogType: 'website',

    twitterCreator: '@Axlkun',
    twitterImage: 'https://unfollowerstracker.com/unfollowers-og-image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'UnfollowersTracker | Conoce quien no te sigue en Instagram',
    twitterDescription: 'Descubre quién no te sigue en Instagram. Herramienta gratuita para gestionar tu lista de seguidores sin contraseñas.'
})

</script>

<style scoped>
.skeleton-blog{
    width: 95%;
    max-width: 120rem;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
        width: 70%;
    }
}
</style>