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
import CallToAction from '../components/CallToAction.vue';

const props = defineProps(['blogEntry']);

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
  twitterImage: 'https://unfollowerstracker.com/unfollowers-og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'UnfollowersTracker | Discover your Instagram Unfollowers',
  twitterDescription: 'Discover who doesn\'t follow you back on Instagram. Free tool to manage your follower list without passwords.'
})

</script>

<style scoped>
</style>