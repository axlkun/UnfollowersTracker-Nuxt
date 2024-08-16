<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="700">
            <v-card>
                <v-card-title class="text-h4 ma-3">
                    <svg-icon style="color: red;" type="mdi" :path="mdiAlert"></svg-icon> Adblock detected
                </v-card-title>
                <v-card-text>It appears that you are using an ad-blocking extension in your browser. Our website relies on
                    ad revenue to provide free content to our visitors. Please consider supporting us by <strong>disabling
                        your ad blocker.</strong></v-card-text>
                <v-card-actions class="ma-3">
                    <v-spacer></v-spacer>
                    <v-btn color="green" variant="elevated" @click="reloadPage">
                        Reload Page
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import {  mdiAlert } from '@mdi/js';

const props = defineProps({
    adblock: Boolean
});

const dialog = ref(props.adblock);

const reloadPage = () => {
    location.reload(true);
};

</script>

<style scoped></style>