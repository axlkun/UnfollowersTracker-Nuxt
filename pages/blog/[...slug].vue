<template>
    <v-sheet class="project">

        <v-sheet v-if="loading" class="skeleton">
            <!-- Contenedor principal -->
            <v-sheet color="#F5F5F5">
                <v-sheet color="#F5F5F5">
                    <v-row justify-center>
                        <!-- Contenedor 70% -->
                        <v-col cols="12" md="9" class="pt-12">
                            <v-skeleton-loader type="heading" color="#F5F5F5"></v-skeleton-loader>
                            <v-skeleton-loader type="subtitle" color="#F5F5F5"></v-skeleton-loader>
                            <v-skeleton-loader type="chip" color="#F5F5F5"></v-skeleton-loader>
                            <v-skeleton-loader type="image" color="#F5F5F5" class="pt-md-12 pb-md-12"></v-skeleton-loader>
                            <v-skeleton-loader type="paragraph" color="#F5F5F5"></v-skeleton-loader>
                            <v-skeleton-loader type="paragraph" color="#F5F5F5"></v-skeleton-loader>
                            <v-skeleton-loader type="paragraph" color="#F5F5F5"></v-skeleton-loader>
                        </v-col>
                        <!-- Contenedor 30% -->
                        <v-col cols="12" md="3" class="pt-12">
                            <v-skeleton-loader type="list-item-two-line" color="#F5F5F5"></v-skeleton-loader>
                            <v-skeleton-loader type="list-item-two-line" color="#F5F5F5"></v-skeleton-loader>
                            <v-skeleton-loader type="list-item-two-line" color="#F5F5F5"></v-skeleton-loader>
                            <v-skeleton-loader type="list-item-two-line" color="#F5F5F5"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-sheet>

        </v-sheet>

        <v-sheet class="container" v-else>

            <v-sheet class="description-container">
                <v-sheet class="project-data">
                    <v-sheet class="project-description">
                        <v-sheet class="title">
                            <h1> {{ article.title }}</h1>
                        </v-sheet>

                        <v-sheet class="description">
                            <p> {{ article.summary }} </p>
                        </v-sheet>

                        <v-sheet class="d-flex flex-wrap justify-start mt-2 mb-2">
                            <v-chip v-for="category in article.categories" class="mr-2 mb-2" color="#E91E63">
                                {{ category.name }}
                            </v-chip>
                        </v-sheet>

                    </v-sheet>

                    <v-sheet class="project-info">
                        <v-sheet class="link-container">
                            <h3>Autor</h3>
                            <a href="https://twitter.com/Axlkun">Axel Cruz</a>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Fecha</h3>
                            <p> {{ article.created_date }} </p>
                        </v-sheet>
                        <v-sheet class="link-container">
                            <h3>Tiempo de lectura</h3>
                            <p>3 min</p>
                        </v-sheet>
                    </v-sheet>
                </v-sheet>
            </v-sheet>

            <v-sheet class="img-container">
                <v-img :src="`${dominio}${article.imageUrl}`" alt="Imagen artículo" max-height="500" aspect-ratio="16/9"
                    cover></v-img>
            </v-sheet>

            <v-sheet class="article-content">
                <v-sheet class="html-content" v-html="article.description"></v-sheet>
            </v-sheet>

        </v-sheet>

        <v-sheet class="title-container">
            <h2>Artículos relacionados</h2>
        </v-sheet>

        <ArticlesList :blogEntry="articles"></articlesList>

        <CallToAction></CallToAction>

    </v-sheet>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '../api';
import ArticlesList from '../components/ArticlesList.vue';
import CallToAction from '../components/CallToAction.vue';

const route = useRoute();
const router = useRouter();
const slug = ref(route.params.slug);
const dominio = api.defaults.baseURL;
const article = ref(null);
const articles = ref(null);
const loading = ref(true);

const loadData = async () => {
    loading.value = true;

    try {
        const articleResponse = await loadArticle();
        if (articleResponse.status === 200) {
            article.value = articleResponse.data.data;

            useSeoMeta({

robots: 'index, follow',
title: () => "UnfollowersTracker | " + article.value.title,
author: 'Axel Cruz',
description: () => article.value.summary,
keywords: 'Instagram, followers, non-followers, free tool, follower management, Instagram optimization, reach on Instagram, no password, follower tracking, follower analytics, Instagram statistics, follower monitoring.',

ogTitle: 'UnfollowersTracker',
ogDescription: 'Discover who doesn\'t follow you back on Instagram. Free tool to manage your follower list without passwords.',
ogImage: 'https://unfollowerstracker.com/unfollowers-og-image.png',
ogUrl: 'https://unfollowerstracker.com/',
ogType: 'website',

twitterCreator: '@Axlkun',
twitterImage: 'https://unfollowerstracker.com/unfollowers-og-image.png',
twitterCard: 'summary_large_image',
twitterTitle: 'UnfollowersTracker | Discover your Instagram Unfollowers',
twitterDescription: 'Discover who doesn\'t follow you back on Instagram. Free tool to manage your follower list without passwords.'
})
        } else {
            router.push('/');
        }
    } catch (error) {
        handleError(error);
    } finally {
        loading.value = false;
    }

    loadRelatedArticles();
};

const loadArticle = async () => {
    return await api.get(`/api/articles/${slug.value}`);
};

const loadRelatedArticles = async () => {
    try {
        const relatedArticlesResponse = await api.get(`/api/related-articles/${slug.value}`);
        articles.value = relatedArticlesResponse.data.data;
    } catch (error) {
        console.error('Error al obtener artículos relacionados:', error);
    }
};

const handleError = (error) => {
    console.error('Error al hacer la solicitud GET:', error);
    router.push('/');
};

watch(() => route.params.slug, () => {
    slug.value = route.params.slug;
    loadData();
});

onMounted(() => {
    loadData();
});

</script>

<style scoped>
.project {
    background-color: #F5F5F5;
}

.container {
    max-width: 90%;
    background: transparent;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.container * {
    background: inherit;
}

.title {
    font-size: 25px;
    font-weight: bold;
    color: #E91E63;
    text-align: start;
    line-height: 1.1;

    @media only screen and (min-width: 1024px) {
        font-size: 35px;

    }

}

.description {
    margin: 15px 0;
    color: #E91E63;
}

.img-container {

    width: 100%;

    @media only screen and (min-width: 1024px) {
        margin-bottom: 30px;
        width: 70%;
    }
}

.description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;

    @media only screen and (min-width: 1024px) {
        margin: 30px 0;
    }

}

.project-data {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        font-size: 20px;

    }
}

.project-description {
    flex: 70%;
}

.project-info {
    flex: 30%;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 15px;

    @media only screen and (min-width: 1024px) {

        align-items: center;
    }
}

.link-container {
    width: 200px;
}

.project-info h3 {
    color: #E91E63;
}

.article-content {
    font-size: 16px;
    margin-bottom: 60px;

    @media only screen and (min-width: 1024px) {
        font-size: 20px;
        width: 70%;
    }
}

.title-container {
    width: 90%;
    font-size: 25px;
    margin: 15px auto;
    color: #E91E63;
    background: transparent;
    text-align: start;
    border-top: 1px solid #E91E63;

    @media only screen and (min-width: 1024px) {
        font-size: 35px;
    }
}
</style>