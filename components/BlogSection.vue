<template>
    <v-sheet class="d-flex flex-column align-center justify-center bg-grey-lighten-4" style="min-height: 100vh;">
        <v-sheet class="bg-transparent pa-5 custom-sheet text-center">
            <v-chip variant="outlined" size="x-large" color="pink" href="/blog">
                Blog
            </v-chip>

            <h2 class="pt-5 text-h5 text-md-h4  ma-1 font-weight-black text-pink">Articles on social media strategies, such as feeding the algorithm, plans to grow an audience, and much more...</h2>

            <p class="pt-5 text-h7 text-md-h6 ma-5 font-weight-bold text-grey-darken-1">Read the latest well-crafted articles, discover a new one every week, and manage your social media like a professional!</p>
        </v-sheet>


        <v-sheet class="articles">
           
            <v-card v-for="article in blogEntry" class="rounded-lg mb-5"  variant="elevated">
                <v-img height="200" :src="`${dominio}${article.imageUrl}`"
                    cover>
                    
                </v-img>

                <v-sheet class="pa-2">

                    <v-chip class="ma-1" variant="text" size="small">{{ article.created_date }}</v-chip>

                    <v-chip v-for="category in article.categories" class="ma-1" variant="outlined" size="small">{{ category.name }}</v-chip>
                        
                  </v-sheet>

                  <v-card-title class="text-visible font-weight-bold">{{ article.title }}</v-card-title>

                <v-card-text class="text-visible">
                    <p>{{ article.summary }}</p>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="pink" :href="'/blog/' + article.slug">
                        Read more
                    </v-btn>
                </v-card-actions>
            </v-card>
            
        </v-sheet>

    </v-sheet>
</template>

<script>
import api from '../api';

export default {
    name: 'BlogSection',

    props: ['blogEntry'],

    data: () => ({
        dominio: api.defaults.baseURL
    })
}
</script>

<style scoped>
.custom-sheet {
    @media only screen and (min-width: 960px) {
        width: 70%;
    }
}

.text-visible {
    white-space: nowrap;
    overflow: hidden;
    white-space: initial;
    line-height: 1.2;
}

.articles {
    /*background-color: var(--primary-background);*/
    padding: 30px 0;
    width: 90%;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    background: transparent;
    grid-template-columns: 1fr;
    /* Establece una columna por defecto */

    @media only screen and (min-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
        /* Cambia a dos columnas en pantallas más grandes */
        grid-row-gap: 2rem;
        grid-column-gap: 4rem;
    }
}
</style>