<template>
    <v-sheet class="d-flex flex-column justify-center custom-sizing mx-auto" style="min-height: 100vh" id="how-works">

        <v-sheet class="pa-5 text-center">
            <h2 class="text-h5 text-md-h4 ma-1 font-weight-black text-pink">¿Cómo funciona Unfollowers Tracker?</h2>
            <p class="text-h7 ma-5 font-weight-bold text-grey-darken-1">Nuestra herramienta analiza tus datos
                proporcionados y compara tu lista de seguidores con la lista de personas a las que sigues. Luego, te
                muestra quiénes no te siguen de vuelta.</p>
        </v-sheet>

        <v-expansion-panels>
            <v-expansion-panel v-for="item in stepsItems" :key="item.id" :class="item.color" class="ma-5">
                <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="text-h6"
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
                title: '1- Solicita tu información a Instagram',
                description: '1- En tu dispositivo móvil ingresa a tu cuenta de Instagram, dirigete a tu perfil y abre el menú superior derecho, posteriormente accede a "Tu actividad" y selecciona "Descargar tu información"<br> 2- Toca en "Solicitar descarga", selecciona tu perfil de Instagram y presiona en "Siguiente"<br> 3- Ahora, dentro de la sección "Seleccionar tipos de información", escoge únicamente "Seguidores y seguidos" y presiona "Siguiente"<br> 4- Ahora en "Formato" selecciona "JSON" y en "Intervalo de fechas" selecciona "Desde el principio" y finalmente presiona "Enviar solicitud"'
            },
            {
                id: 2,
                color: 'bg-indigo-lighten-5',
                color2: 'text-indigo-darken-4',
                icon: 'mdi-download-box-outline',
                title: '2- Descarga el ZIP',
                description: '1- Ahora en tu navegador (computadora) abre la cuenta de correo asociado a tu Instagram <br> 2- Abre el correo electrónico enviado por Instagram con asunto "La descarga de tu información de Meta está lista" y da clic en "Descargar tu información" <br> 3- Esto te abrirá una nueva pestaña de Instagram donde te muestra la descarga disponible, da clic en "Descargar" y confirma que es tu cuenta. La descarga comenzará automaticamente',
            },
            {
                id: 3,
                color: 'bg-yellow-lighten-5',
                color2: 'text-yellow-darken-4',
                icon: 'mdi-folder-upload-outline',
                title: '3- Carga el ZIP',
                description: 'En Unfollowerstracker.com presiona "QUIEN NO ME SIGUE". Después da clic en "Selecciona el archivo ZIP" para abrir el explorador de archivos y elige el archivo ZIP que descargaste previamente. Una vez cargado el archivo da clic en "Buscar" y conoce los resultados!',
            }
        ],
    }),

}

</script>
    
<style scoped></style>