<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="700">
            <v-card>
                <v-card-title class="text-h4">
                    <v-icon size="large" color="red" icon="mdi mdi-alert"></v-icon> Adblock detected
                </v-card-title>
                <v-card-text>It appears that you are using an ad-blocking extension in your browser. Our website relies on
                    ad revenue to provide free content to our visitors. Please consider supporting us by <strong>disabling
                        your ad blocker.</strong></v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="grey-darken-1" variant="elevated" @click="reloadPage">
                        Reload Page
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script setup>

const props = defineProps({
    adblock: Boolean
});

const dialog = ref(props.adblock);

const reloadPage = () => {
    location.reload(true);
};

onMounted(() => {
  console.log("Valor recibido: " + props.adblock);
});
</script>

<style scoped></style>