<template>

    <v-sheet class="d-flex flex-column justify-center mt-8 mb-8">
        <v-sheet class="pa-5 text-center">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-deep-purple-accent-3">Understanding your pending
                requests</h2>
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
        title: 'How we find your pending requests',
        description: 'Instagram\'s data export includes a record of every follow request you\'ve sent that hasn\'t been accepted yet. We read that record directly from your ZIP file — no scrolling through your activity log, no guessing who\'s ignoring you and who just hasn\'t checked their requests folder.'
    },
    {
        id: 2,
        image: '/images/lock.png',
        title: 'Your data stays private',
        description: 'Most "pending requests" services ask you to log in with your Instagram credentials, which puts your account at risk of being flagged by Instagram\'s automated systems. We take a different approach: you request your own data directly from Instagram, and we simply read the ZIP file you already have. We never see your password, never access your account, and your file is only used to generate the list you see on this page.'
    },
    {
        id: 3,
        image: '/images/chat.png',
        title: 'What to do with your list',
        description: 'A pending request can sit unaccepted for a long time without meaning much — plenty of people rarely check their requests folder, so silence isn\'t necessarily a "no". If you\'d rather not wait, the "Cancel Request" button takes you straight to that profile so you can withdraw it yourself, since canceling it requires being logged into your own account.'
    }
]

</script>

<style scoped></style>
