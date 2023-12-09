<template>
    <BlogSection :blogEntry="blogEntry"></BlogSection>
</template>

<script>
import api from '../api';
import BlogSection from '../components/BlogSection.vue';

export default {
    name: 'BlogView',

    components: {
        BlogSection
    },

    data: () => ({
        blogEntry: [],
        loading: true
    }),

    methods: {
        getArticles() {
            api.get('/api/articles')
                .then(response => {
                    
                    if (response.status === 200) {
                        this.blogEntry = response.data.data;
                    } else {
                        console.error('Respuesta no exitosa:', response);
                        this.$router.push('/');
                    }
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud GET:', error);
                    this.$router.push('/');
                })
                .finally(() => {
                    this.loading = false; 
                });
        }
    },

    created() {
        this.getArticles();
    }
}
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