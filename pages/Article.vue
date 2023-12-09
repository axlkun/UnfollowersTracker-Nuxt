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
                <v-img :src="`${dominio}${article.imageUrl}`" alt="Imagen artículo" max-height="500" aspect-ratio="16/9" cover></v-img>
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

<script>
import api from '../api';
import ArticlesList from '../components/ArticlesList.vue';
import CallToAction from '../components/CallToAction.vue';

export default {

    name: 'articleDetail',

    props: ['slug'],

    components: {
        ArticlesList,
        CallToAction
    },

    data: () => ({

        dominio: api.defaults.baseURL,
        article: null,
        articles: null,
        loading: true
    }),

    watch: {
        slug: 'loadData' // Llama a la función loadData cuando la prop slug cambia
    },

    methods: {
        async loadData() {
            this.loading = true;

            try {
                const articleResponse = await this.loadArticle();
                if (articleResponse.status === 200) {
                    this.article = articleResponse.data.data;

                } else {
                    // Redirige al índice en caso de respuesta no exitosa
                    this.$router.push('/');
                }
            } catch (error) {
                this.handleError(error);
            }
            finally {
                this.loading = false;
            }

            // Realiza la otra petición en segundo plano
            this.loadRelatedArticles();
        },

        async loadArticle() {
            return await api.get(`/api/articles/${this.slug}`);
        },

        async loadRelatedArticles() {
            try {
                const relatedArticlesResponse = await api.get(`/api/related-articles/${this.slug}`);
                this.articles = relatedArticlesResponse.data.data;
            } catch (error) {
                console.error('Error al obtener artículos relacionados:', error);
            }
        },

        handleError(error) {
            console.error('Error al hacer la solicitud GET:', error);
            this.$router.push('/'); 
        }
    },
    created() {
       
        this.loadData();
    },

}
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