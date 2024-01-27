<template>
    <v-sheet class="d-flex flex-wrap bg-transparent" style="gap: 30px;">
           
        <v-card v-for="article in blogEntry" class="rounded-lg" max-width="350" variant="elevated">
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
</template>

<script>
import api from '../api';

export default {
    name: 'ArticlesList',

    props: ['blogEntry'],

    data: () => ({
        dominio: api.defaults.baseURL
    })
}
</script>

<style scoped>

.text-visible {
    white-space: nowrap;
    overflow: hidden;
    white-space: initial;
    line-height: 1.2;
}
</style>