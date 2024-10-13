<template>
    <div>
        <!-- Seccion de inicio -->
        <HomeSection></HomeSection>

        <!-- Seccion del como funciona -->
        <HowWorks></HowWorks>

        <!-- seccion del video tutorial -->
        <VideoTutorial></VideoTutorial>

        <!-- blog section -->
        <BlogSection :blogEntry="blogEntry"></BlogSection>

        <!-- seccion de Por que Unfollowers -->
        <WhyUnfollowers></WhyUnfollowers>

       <FrequentAsks></FrequentAsks> 

        <!-- seccion de contacto  -->
        <!-- <ContactSection></ContactSection> -->
        
        <CallToAction></CallToAction>

    </div>
</template>

<script setup>
import HomeSection from '../components/HomeSection.vue';
import HowWorks from '../components/HowWorks.vue';
import VideoTutorial from '../components/VideoTutorial.vue';
import BlogSection from '../components/BlogSection.vue';
import WhyUnfollowers from '../components/WhyUnfollowers.vue';
import ContactSection from '../components/ContactSection.vue';
import FrequentAsks from '~/components/FrequentAsks.vue';
import CallToAction from '../components/CallToAction.vue';
import api from '../api';

const blogEntry = ref([]);

const getArticles = async () => {
    try {
        const response = await api.get('/api/articles?limit=6');

        if (response.status === 200) {
            blogEntry.value = response.data.data;
        } 
    } catch (error) {
        console.error('Error al hacer la solicitud GET:', error);
        
    }
};

useSeoMeta({

  robots: 'index, follow',

  title: 'UnfollowersTracker | Discover your Instagram Unfollowers',
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
  twitterTitle: 'UnfollowersTracker | Discover your Instagram Unfollowers',
  twitterDescription: 'Discover who doesn\'t follow you back on Instagram. Free tool to manage your follower list without passwords.'
})

onMounted(async () => {

getArticles();
});


</script>

<style scoped>
</style>