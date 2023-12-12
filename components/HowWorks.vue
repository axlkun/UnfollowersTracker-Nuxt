<template>
    <v-sheet class="d-flex flex-column justify-center custom-sizing mx-auto" style="min-height: 100vh" id="how-works">

        <v-sheet class="pa-5 text-center">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">How does UnfollowersTracker work?</h2>
            <p class="text-h7 text-md-h6 ma-5 font-weight-bold text-grey-darken-1">Our tool analyzes your provided data and
                compares your list of followers with the list of people you follow. It then shows you who doesn't follow you
                back.</p>
        </v-sheet>

        <v-expansion-panels>
            <v-expansion-panel v-for="item in stepsItems" :key="item.id" :class="item.color" class="ma-5">
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="text-h7 text-md-h6"
                    style="min-height: 80px" :class="item.color2">
                    <span class="mdi ma-2" :class="item.icon"></span> {{ item.title }}
                </v-expansion-panel-title>
                <v-expansion-panel-text style="line-height: 2;">
                    <div v-html="item.description"></div>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>

    </v-sheet>
</template>
    
<script>

export default {

    name: 'HowWorks',

    data: () => ({

        stepsItems: [ /* texto para la seccion de tutorial */
            {
                id: 1,
                color: 'bg-green-lighten-5',
                color2: 'text-green-darken-4',
                icon: 'mdi-instagram',
                title: '1- Request Your Information from Instagram',
                description: '1- On your mobile device, log in to your Instagram account, go to your profile, open the top-right menu, then access "Your Activity" and select "Download Your Information."<br> 2- Tap on "Request Download," choose your Instagram profile, and press "Next."<br> 3- Now, in the "Select Types of Information" section, choose only "Followers and Following," and press "Next."<br> 4- In the "Format" section, select "JSON," and in the "Date Range," choose "From the beginning." Finally, press "Submit Request."'
            },
            {
                id: 2,
                color: 'bg-indigo-lighten-5',
                color2: 'text-indigo-darken-4',
                icon: 'mdi-download-box-outline',
                title: '2- Download the ZIP',
                description: '1- Now, in your web browser (on your computer), open the email account associated with your Instagram.<br> 2- Open the email sent by Instagram with the subject "Your Meta information download is ready" and click on "Download Your Information."<br> 3- This will open a new Instagram tab showing the available download. Click on "Download" and confirm that it\'s your account. The download will start automatically.'
            },
            {
                id: 3,
                color: 'bg-yellow-lighten-5',
                color2: 'text-yellow-darken-4',
                icon: 'mdi-folder-upload-outline',
                title: '3- Upload the ZIP',
                description: 'On Unfollowerstracker.com, click "DISCOVER UNFOLLOWERS." Then, click on "Select the ZIP file" to open the file explorer, and choose the ZIP file you downloaded earlier. Once the file is uploaded, click "Search" and discover the results!'
            }
        ],
    }),

}

</script>
    
<style scoped></style>