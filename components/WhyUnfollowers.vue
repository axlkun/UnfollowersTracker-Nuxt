<template>

    <v-sheet class="d-flex flex-column justify-center mb-5" style="min-height: 100vh">
        <v-sheet class="pa-5 text-center">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">Why use Unfollowers Tracker?</h2>
            <p class="text-h7 text-md-h6 ma-1 font-weight-bold text-grey-darken-1">The safest way to know your unfollowers
                and fans</p>
        </v-sheet>

        <v-sheet class="d-flex flex-md-row flex-column justify-center" style="gap: 20px;">
            <v-sheet v-for="item in whyItems" :key="item.id" elevation="2" max-width="400" rounded="lg" width="90%"
                class="pa-4 text-center custom-sizing">
                <v-icon class="mb-5" color="pink" :icon="item.icon" size="112"></v-icon>

                <h2 class="text-h5 mb-6">{{ item.title }}</h2>

                <p class="mb-4 text-medium-emphasis text-body-5">
                    {{ item.description }}
                </p>

            </v-sheet>
        </v-sheet>
    </v-sheet>

</template>
    
<script>

export default {

    name: 'WhyUnfollowers',

    data: () => ({
       
        whyItems: [ /* texto para la seccion de por que unfollowers */
            {
                id: 1,
                icon: 'mdi-security',
                title: 'Security',
                description: 'Unfollowers Tracker doesn\'t require access to your account. Your data is protected and secure at all times.'
            },
            {
                id: 2,
                icon: 'mdi-lightning-bolt',
                title: 'Instant results',
                description: 'Get instant results. With our tool, you don\'t have to wait to know the status of your followers.'
            },
            {
                id: 3,
                icon: 'mdi-account-group',
                title: 'Optimize your social circle',
                description: 'Adjust your follower list easily. Identify those who no longer follow you and make informed decisions about who to follow.'
            }
        ],
    }),
}

</script>
    
<style scoped></style>