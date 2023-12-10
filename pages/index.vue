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

  title: 'UnfollowersTracker | Home',
  author: 'Axel Cruz',
  description: 'Descubre quién no te sigue en Instagram. Herramienta gratuita para gestionar tu lista de seguidores sin contraseñas.',
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
</style>