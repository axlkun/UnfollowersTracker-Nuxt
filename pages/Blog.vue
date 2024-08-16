<template>
    <v-sheet color="#F5F5F5">
        <v-sheet class="blog-container">

            <v-sheet v-if="loading" class="skeleton-blog">
                <!-- Contenedor principal -->
                <v-sheet>
                    <v-sheet>

                        <v-skeleton-loader type="chip" color="#F5F5F5"></v-skeleton-loader>
                        <v-skeleton-loader type="heading" color="#F5F5F5"></v-skeleton-loader>
                        <v-skeleton-loader type="subtitle" color="#F5F5F5"></v-skeleton-loader>
                        <v-skeleton-loader type="subtitle" color="#F5F5F5"></v-skeleton-loader>

                        <v-sheet class="d-flex flex-column-reverse flex-md-column" color="#F5F5F5">
                            <template v-for="rowIndex in 1">
                                <v-row :class="rowIndex === 1 ? 'pt-md-10' : ''">
                                    <template v-for="colIndex in 3">
                                        <v-col cols="12" md="4">
                                            <v-skeleton-loader :height="rowIndex == 1 ? 500 : 400"
                                                type="image, article, chip" color="#F5F5F5"></v-skeleton-loader>
                                        </v-col>
                                    </template>
                                </v-row>
                            </template>
                        </v-sheet>

                    </v-sheet>
                </v-sheet>

            </v-sheet>

            <BlogSection v-else :blogEntry="blogEntry"></BlogSection>

            <ClientOnly>
                <AntiAdblocker v-if="adblocker" :adblock="adblocker"></AntiAdblocker>
            </ClientOnly>
        </v-sheet>
    </v-sheet>
</template>

<script setup>
import api from '../api';
import BlogSection from '../components/BlogSection.vue';
import AntiAdblocker from '~/components/AntiAdblocker.vue';
import { checkAdblocker } from '../utils/utils';

const blogEntry = ref([]);
const loading = ref(true);
const adblocker = ref(false);

const getArticles = async () => {
    try {
        const response = await api.get('/api/articles');

        if (response.status === 200) {
            blogEntry.value = response.data.data;
            showAdblockModal();
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

const showAdblockModal = async () => {
    setTimeout(async () => {
        adblocker.value = await checkAdblocker();
    }, 2000);
}

onMounted(async () => {

    getArticles();
});

useSeoMeta({

    robots: 'index, follow',

    title: 'UnfollowersTracker | Blog',
    author: 'Axel Cruz',
    description: 'Articles related to social media growth, tips on growing an audience, algorithm secrets, and much more!.',
    keywords: 'Instagram, followers, non-followers, free tool, follower management, Instagram optimization, reach on Instagram, no password, follower tracking, follower analytics, Instagram statistics, follower monitoring.',

    ogTitle: 'UnfollowersTracker | Blog',
    ogDescription: 'Articles related to social media growth, tips on growing an audience, algorithm secrets, and much more!.',
    ogImage: 'https://unfollowerstracker.com/unfollowers-og-image.png',
    ogUrl: 'https://unfollowerstracker.com/blog',
    ogType: 'website',

    twitterCreator: '@Axlkun',
    twitterImage: 'https://unfollowerstracker.com/unfollowers-twitter-image.png',
    twitterCard: 'summary_large_image',
    twitterTitle: 'UnfollowersTracker | Blog',
    twitterDescription: 'Articles related to social media growth, tips on growing an audience, algorithm secrets, and much more!.'
})

</script>

<style scoped>
.skeleton-blog {
    max-width: 120rem;
    margin: 0 auto;
    width: 95%;
}

.blog-container {
    width: 95%;
    max-width: 120rem;
    margin: 0 auto;
    background-color: #F5F5F5;

    @media only screen and (min-width: 1200px) {
        width: 95%;
    }
}
</style>