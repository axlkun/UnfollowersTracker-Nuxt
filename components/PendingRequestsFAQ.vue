<template>
    <v-sheet class="d-flex flex-column justify-center faq-sizing mb-8" id="pending-requests-faqs">

        <v-sheet class="pa-5 text-center">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-deep-purple-accent-3">Common questions about your
                pending requests</h2>
        </v-sheet>

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
</template>

<script setup>

const faqs = [
    {
        question: 'Why does someone show up as pending when I think they already accepted?',
        answer: `Your results reflect the exact snapshot in your data export at the moment you requested it from
    Instagram. If the request was accepted afterward, that change won't show up yet — request a fresh ZIP file
    and upload it here to see the current state.`,
        icon: '🔄'
    },
    {
        question: 'How long does a pending request usually stay unaccepted?',
        answer: `There's no set timeframe. Some people rarely check their requests folder, so a pending request
    can sit for weeks or months without meaning the person is deliberately ignoring you.`,
        icon: '⏳'
    },
    {
        question: 'What happens when I click "Cancel Request"?',
        answer: `It takes you directly to that person's profile, where you can cancel the request yourself.
    We can't cancel it for you from this page, since that would require logging into your Instagram account —
    which is exactly what we avoid doing.`,
        icon: '❌'
    },
    {
        question: 'Do I need to give you my Instagram password to see my pending requests?',
        answer: `No. You never enter your Instagram password here — you only upload the ZIP file that Instagram
    itself generates when you <a href="/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers">request your data</a>.`,
        icon: '🔒'
    },
    {
        question: 'Can I check pending requests for more than one Instagram account?',
        answer: `Yes. You can check as many accounts as you like — just download and upload a separate data
    export ZIP file for each one.`,
        icon: '👥'
    }
];

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

<style scoped>
.faq-sizing {
    width: 90%;
    margin: 0 auto;
}

@media only screen and (min-width: 960px) {
    .faq-sizing {
        width: 70%;
        margin: 0 auto;
    }
}
</style>
