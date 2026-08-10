<template>
    <v-sheet class="d-flex flex-column justify-center faq-sizing mb-8" id="results-faqs">

        <v-sheet class="pa-5 text-center">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">Common questions about your results</h2>
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
        question: 'Why does someone I know follows me still show up as an unfollower?',
        answer: `Your results reflect the exact snapshot in your data export — if someone followed you back after
    you requested your data from Instagram, that change won't be reflected yet. Request a fresh ZIP file and
    upload it here to get up-to-date results.`,
        icon: '🔄'
    },
    {
        question: 'How often should I check my unfollowers?',
        answer: `There's no fixed rule. Some people check every time they get a new data export from Instagram,
    others check every few months. Since <a href="/#faqs">Instagram doesn't notify you when someone unfollows you</a>,
    checking periodically with a fresh export is the only reliable way to know.`,
        icon: '⏳'
    },
    {
        question: 'Why does clicking "Unfollow" sometimes say "user not found"?',
        answer: `That account is deactivated or was deleted, not a real unfollower. Instagram's data export includes
    deactivated accounts the same way it includes active ones, so they can show up on your list even though
    there's no profile left to unfollow.`,
        icon: '👻'
    },
    {
        question: 'Is the unfollowers count accurate?',
        answer: `Yes — the count comes directly from comparing your followers and following lists in the ZIP file,
    with no estimates or sampling involved. If a number looks off, it's most likely because your data export
    is a few days old and needs to be refreshed.`,
        icon: '🔢'
    },
    {
        question: 'Do I need to give you my Instagram password to see my unfollowers?',
        answer: `No. You never enter your Instagram password here — you only upload the ZIP file that Instagram
    itself generates when you <a href="/blog/tutorial-how-to-use-unfollowers-tracker-to-discover-your-instagram-unfollowers">request your data</a>.`,
        icon: '🔒'
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
