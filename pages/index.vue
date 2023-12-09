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

<script>
import HomeSection from '../components/HomeSection.vue';
import HowWorks from '../components/HowWorks.vue';
import VideoTutorial from '../components/VideoTutorial.vue';
import BlogSection from '../components/BlogSection.vue';
import WhyUnfollowers from '../components/WhyUnfollowers.vue';
import ContactSection from '../components/ContactSection.vue';
import CallToAction from '../components/CallToAction.vue';

export default {

    props: ['blogEntry'],

    components: {
        HomeSection,
        HowWorks,
        VideoTutorial,
        BlogSection,
        WhyUnfollowers,
        ContactSection,
        CallToAction
    },

}

</script>

<style scoped>
</style>