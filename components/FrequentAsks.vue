<template>
    <div class="d-flex flex-column align-center justify-center bg-grey-lighten-4">
        <v-sheet class="d-flex flex-column justify-center custom-sizing mx-auto pb-5 bg-grey-lighten-4" id="faqs">

            <v-sheet class="pa-5 text-center bg-grey-lighten-4">
                <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">Frequently Asked Questions</h2>
                <p class="text-h7 text-md-h6 ma-5 font-weight-bold text-grey-darken-1">Have another question? Contact me
                    by 📧 <a href="mailto:unfollowerstracker2024@gmail.com">email</a></p>
            </v-sheet>

            <div class="ad-container">
                <div v-html="adsenseHtml"></div>
            </div>

            <v-expansion-panels v-model="openPanels" multiple>
                <v-expansion-panel v-for="(item, i) in faqs" :key="i" class="ma-2 mb-4 bg-grey-lighten-3">
                    <v-expansion-panel-title>
                        <span class="mr-3" aria-hidden="true">{{ item.icon }}</span>
                        <h3 style="line-height: 1.5;">{{ item.question }}</h3>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <p v-html="item.answer"></p>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

        </v-sheet>
    </div>

</template>

<script setup>

import { onMounted } from 'vue'

const adsenseHtml = `
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-1163363741001629"
       data-ad-slot="6226469671"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
`;

onMounted(() => {
  const checkAdsbyGoogle = setInterval(() => {
    if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
      clearInterval(checkAdsbyGoogle);
    }
  }, 300);
});

const faqs = [
    {
        question: 'How can I see who unfollowed me on Instagram for free?',
        answer: `You can easily check who unfollowed you on Instagram by using our 
    <a href="/results">Unfollowers Tracker tool</a>. Simply upload your Instagram data ZIP file 
    (which you can download from your account settings) and our system will analyze your followers 
    and following lists to reveal who doesn’t follow you back — all without logging into Instagram 
    or paying for expensive apps.`,
        icon: '🔍'
    },
    {
        question: 'How can I see pending follow requests on Instagram (who hasn’t accepted my request)?',
        answer: `If you're wondering <strong>who hasn’t accepted your Instagram follow request</strong>, 
    you can easily find out using our <a href="/pending-requests">Pending Requests tool</a>. 
    Upload your Instagram data ZIP (downloadable from your account settings), and we’ll analyze 
    your data to show all <em>pending follow requests</em> — also known as <em>follow pending requests</em>. 
    This is a safe way to check your <strong>Instagram follow requests list</strong> without third-party logins 
    or risking your account security.`,
        icon: '⏳'
    },
    {
        question: 'Is it safe to use Instagram Unfollowers Tracker?',
        answer: `Yes, our Instagram unfollow tracker is 100% secure. We never ask for your Instagram 
    password or login credentials, so your account stays completely safe from hacking or bans. 
    All analysis is done locally using your downloaded Instagram ZIP file, ensuring maximum privacy.`,
        icon: '🔒'
    },
    {
        question: 'Can I check who unfollowed me on Instagram without an app?',
        answer: `Absolutely. Our tool Unfollowers Tracker is web-based, so you don’t need to download any app or 
    grant third-party access to your Instagram account. Just upload your Instagram ZIP data file 
    and get instant results online.`,
        icon: '🌐'
    },
    {
        question: 'How do I download my Instagram data ZIP file?',
        answer: `To get your Instagram unfollower list, you first need to 
    <a href="/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers" target="_blank">download your Instagram data</a> 
    . Once you receive your data ZIP file by email, upload it to our tool to see 
    who unfollowed you.`,
        icon: '📥'
    },
    {
        question: 'Can I track unfollowers for multiple Instagram accounts?',
        answer: `Yes! You can analyze as many Instagram accounts as you want, but you’ll need to 
    download and upload a separate ZIP file for each account. This way, you keep each account’s 
    data safe and organized.`,
        icon: '👥'
    },
    {
        question: 'Is there a limit to the number of Instagram ZIP files I can upload?',
        answer: `There’s no limit. You can check your unfollowers as often as you like for all your 
    Instagram accounts. Our service is designed for unlimited use, completely free of charge.`,
        icon: '♾️'
    },
    {
        question: 'Does Instagram notify me when someone unfollows me?',
        answer: `No, Instagram does not send notifications when someone unfollows you. That’s why 
    using a tool like our Instagram Unfollowers Tracker is the easiest way to keep track of 
    your followers and unfollowers without manually checking.`,
        icon: '🔔'
    },
    {
        question: 'Can I see who blocked me on Instagram?',
        answer: `Our tool focuses on tracking unfollowers, but if someone blocks you on Instagram, 
    you won’t be able to see their profile, posts, or stories. While Instagram doesn’t provide 
    a list of who blocked you, noticing these signs can help you figure it out.`,
        icon: '🚫'
    },
    {
        question: 'Is this Instagram Unfollowers Tracker really free?',
        answer: `Yes! Our Instagram Unfollowers Tracker is completely free to use. 
    We don’t charge any fees or require subscriptions. If you’d like to support our work, 
    you can disable your ad blocker or share the tool with friends.`,
        icon: '💰'
    }
];

// Solo el primer panel abierto al inicio
const openPanels = ref([0]);

useHead({
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            })
        }
    ]
});

</script>

<style scoped></style>