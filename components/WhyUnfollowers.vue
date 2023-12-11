<template>

    <v-sheet class="d-flex flex-column justify-center" style="min-height: 100vh">
        <v-sheet class="pa-5 text-center">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">¿Por qué usar Unfollowers Tracker?</h2>
            <p class="text-h6 ma-1 font-weight-bold text-grey-darken-1">La manera mas segura de conocer tus unfollowers
                y fans</p>
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
                title: 'Seguridad',
                description: 'Unfollowers Tracker no necesita acceso a tu cuenta. Tus datos están protegidos y seguros en todo momento.'
            },
            {
                id: 2,
                icon: 'mdi-lightning-bolt',
                title: 'Resultados Instantáneos',
                description: 'Obtén resultados al instante. Con nuestra herramienta, no tienes que esperar para conocer el estado de tus seguidores. '
            },
            {
                id: 3,
                icon: 'mdi-account-group',
                title: 'Optimización de tu Círculo Social',
                description: 'Ajusta tu lista de seguidores de manera sencilla. Identifica a aquellos que ya no te siguen y toma decisiones informadas sobre a quién seguir.'
            }
        ],
    }),
}

</script>
    
<style scoped></style>