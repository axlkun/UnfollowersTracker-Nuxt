<template>
    <BlogSection :blogEntry="blogEntry"></BlogSection>
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
.background-custom {
    background: radial-gradient(circle, rgba(252, 228, 236, 1) 27%, rgba(236, 239, 241, 1) 50%);
}

.custom-sheet {
    @media only screen and (min-width: 960px) {
        width: 70%;
    }
}

.text-visible {
    white-space: nowrap;
    overflow: hidden;
    white-space: initial;
    line-height: 1;
}
</style>