<template>

    <v-sheet class="d-flex flex-column justify-center mt-8 mb-8">
        <v-sheet class="pa-5 text-center">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">Understanding your results</h2>
            <p class="text-h7 text-md-h6 ma-1 font-weight-bold text-grey-darken-1">A quick guide before — and after —
                you check your list</p>
        </v-sheet>

        <v-sheet class="d-flex flex-md-row flex-column justify-center" style="gap: 20px;">
            <v-sheet v-for="item in guideItems" :key="item.id" elevation="2" max-width="400" rounded="lg" width="90%"
                class="pa-4 text-center custom-sizing">

                <v-avatar size="64" class="ma-2" rounded="0">
                    <v-img :src="item.image" alt="Guide icon" cover />
                </v-avatar>

                <h2 class="text-h5 mb-6">{{ item.title }}</h2>

                <p class="mb-4 text-medium-emphasis text-body-5">
                    {{ item.description }}
                </p>

            </v-sheet>
        </v-sheet>
    </v-sheet>

</template>

<script setup>

const guideItems = [
    {
        id: 1,
        image: '/images/zoom.png',
        title: 'How we find your unfollowers',
        description: 'Instagram\'s data export includes two separate files: followers.json (everyone who follows you) and following.json (everyone you follow). We cross-reference both automatically — anyone who appears in your following file but not in your followers file becomes an unfollower. No scrolling through your profile one account at a time, no third-party app guessing from incomplete data — just a direct comparison of the same files Instagram gives you.'
    },
    {
        id: 2,
        image: '/images/lock.png',
        title: 'Your data stays private',
        description: 'Most "who unfollowed me" services ask you to log in with your Instagram credentials, which puts your account at risk of being flagged by Instagram\'s automated systems. We take a different approach: you request your own data directly from Instagram, and we simply read the ZIP file you already have. We never see your password, never access your account, and your file is only used to generate the comparison you see on this page.'
    },
    {
        id: 3,
        image: '/images/chat.png',
        title: 'What to do with your list',
        description: 'A few accounts in your results may actually be deactivated or deleted rather than real unfollowers — Instagram\'s export includes those the same way. If the "unfollow" button says the profile doesn\'t exist, that\'s why. Beyond that, what you do with the list is entirely up to you: some people clean up their following list to match their real circle, others just like knowing where they stand. There\'s no "correct" way to use it.'
    }
]

</script>

<style scoped></style>
