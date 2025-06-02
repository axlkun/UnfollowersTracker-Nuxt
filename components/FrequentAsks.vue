<template>
    <v-sheet class="d-flex flex-column align-center justify-center bg-grey-lighten-4">
        <v-sheet class="d-flex flex-column justify-center custom-sizing mx-auto pb-5 bg-grey-lighten-4" id="faqs">

            <v-sheet class="pa-5 text-center bg-grey-lighten-4">
                <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">Frequently Asked Questions</h2>
                <p class="text-h7 text-md-h6 ma-5 font-weight-bold text-grey-darken-1">Have another question? Contact me
                    by <a href="mailto:unfollowerstracker2024@gmail.com">email</a></p>
            </v-sheet>

            <v-expansion-panels>
                <v-expansion-panel v-for="item in stepsItems" class="ma-2 mb-4 bg-grey-lighten-3">
                    <v-expansion-panel-title
                        class="text-h7 text-md-h6 text-grey-darken-4" style="min-height: 80px">
                        <h3>{{ item.title }}</h3>
                        <!-- <svg-icon class="ml-2" style="color: grey;" type="mdi" :path="mdiPlusCircleOutline"></svg-icon> -->
                    </v-expansion-panel-title>
                    <v-expansion-panel-text style="line-height: 2;">
                        <div v-html="item.description"></div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>

        </v-sheet>
    </v-sheet>

</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiPlusCircleOutline } from '@mdi/js';

const stepsItems = [
    {
        title: 'How can I track Unfollowers on Instagram?',
        description: 'UnfollowersTracker analyzes your followers and following lists, revealing who doesn\'t follow you back. Visit our <a href="/results">Discover Unfollowers page</a> to get started'
    },
    {
        title: 'Is UnfollowersTracker secure to use?',
        description: 'Yes, UnfollowersTracker is 100% safe, you don\'t need to log in with your Instagram account so you are 100% free to risks to get banned. That\'s why UnfollowersTracker is the best tool to check who doesn\'t follow you back on Instagram '
    },
    {
        title: 'Are there alternative methods to discover unfollowers?',
        description: 'UnfollowersTracker offers a hassle-free solution, but you can also manually check your followers and following lists on Instagram. However, our tool simplifies the process.'
    },
    {
        title: 'Do I need to provide my Instagram password? or Do I have to log in?',
        description: 'No, UnfollowersTracker operates password-free. Your data is securely processed without the need for your Instagram password.'
    },
    {
        title: 'Can I use UnfollowersTracker for multiple Instagram accounts?',
        description: 'Yes, but you have to upload the zip for each account separately. That is, the zip file to upload must contain the information of a single account'
    },
    {
        title: 'Is there a limit to the number of ZIP files I can upload?',
        description: 'No, there is no limit. You can discover your Instagram unfollowers as many times as you wish.'
    },
    {
        title: 'Is there a cost to find out who has unfollowed me??',
        description: 'No, the Unfollowers Tracker tool is completely free. You can support the website by disabling your adblocker if you are using one.'
    },
]

</script>

<style scoped></style>