<template>
    <section class="py-16">
        <v-container>
            <!-- Título -->
            <h2 class="text-h4 text-md-h3 text-center font-weight-bold mb-10">
                Explore more Unfollowers Tracker Tools
            </h2>

            <!-- Grid 3 columnas -->
            <v-row class="mt-2" align="stretch" justify="center" dense>
                <v-col v-for="(f, i) in features" :key="i" cols="12" md="4">
                    <v-card class="feature-card rounded-2xl pa-6 elevation-1 ma-2 h-100"
                        :class="`feature-card--${f.tint}`" :to="f.link" link>
                        <div class="d-flex align-start ga-4">
                            <!-- Imagen -->
                            <v-avatar size="64" class="avatar-tint" :class="`avatar-tint--${f.tint}`">
                                <v-img :src="f.image" alt="Feature image" cover />
                            </v-avatar>

                            <div class="text-start">
                                <div class="text-h6 font-weight-semibold mb-1">
                                    {{ f.title }}
                                </div>
                                <div class="text-body-2 text-medium-emphasis">
                                    {{ f.description }}
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
    {
        title: "Who's Not Following You Back?",
        description:
            "Find out who you're following but hasn't followed you back",
        image: "/images/zoom.png",
        tint: "pink",
        link: "/results",
    },
    {
        title: "Who's Following You Too?",
        description:
            "Mutual connections show who's really in your circle",
        image: "/images/heart.png",
        tint: "green",
        link: "/results",
    },
    {
        title: "Pending Follow Requests",
        description:
            "View your pending follow requests and see who hasn’t accepted yet",
        image: "/images/rocket.png",
        tint: "blue",
        link: "/pending-requests",
    },
])
</script>

<style scoped>

/* Base del card */
.feature-card {
    position: relative;
    border: 1px solid #eee;
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
    /* Color de fondo base (blanco) + una leve capa para asegurar contraste */
    background-color: #fff;
    overflow: hidden;
}

/* Efecto hover */
.feature-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--v-shadow-3);
    border-color: #e5e7eb;
}

/* Capa de degradado/fade superior-izquierda (sutil) */
.feature-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    /* Radial + linear para un "wash" suave */
    background:
        radial-gradient(120% 120% at 0% 0%, var(--fade-strong) 0%, transparent 60%),
        linear-gradient(180deg, var(--fade-weak) 0%, transparent 100%);
}

/* Tintes por variante (ajusta colores al gusto) */
.feature-card--pink {
    --fade-strong: rgba(233, 30, 99, 0.16);
    /* #E91E63 */
    --fade-weak: rgba(233, 30, 99, 0.08);
    background-color: #fff5f8;
    /* base muy clara */
}

.feature-card--blue {
    --fade-strong: rgba(33, 150, 243, 0.16);
    /* #2196F3 */
    --fade-weak: rgba(33, 150, 243, 0.08);
    background-color: #f3f9ff;
}

.feature-card--green {
    --fade-strong: rgba(76, 175, 80, 0.16);
    /* #4CAF50 */
    --fade-weak: rgba(76, 175, 80, 0.08);
    background-color: #f2fbf2;
}

/* Avatar con tinte suave */
.avatar-tint {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
}

.avatar-tint--pink {
    background: rgba(233, 30, 99, 0.12);
}

.avatar-tint--blue {
    background: rgba(33, 150, 243, 0.12);
}

.avatar-tint--green {
    background: rgba(76, 175, 80, 0.12);
}
</style>
