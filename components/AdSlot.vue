<template>
    <div ref="adWrapperEl" class="ad-container" :class="{ 'ad-container--collapsed': collapsed }">
        <ins ref="insEl" class="adsbygoogle" style="display:block" :data-ad-client="adClient"
            :data-ad-slot="adSlot" :data-ad-format="format"
            :data-full-width-responsive="fullWidthResponsive ? 'true' : 'false'"></ins>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    adSlot: { type: String, required: true },
    adClient: { type: String, default: 'ca-pub-1163363741001629' },
    format: { type: String, default: 'auto' },
    fullWidthResponsive: { type: Boolean, default: true },
});

const adWrapperEl = ref(null);
const insEl = ref(null);
const collapsed = ref(false);

let scriptReadyInterval = null;
let scriptReadyTimeout = null;
let intersectionObserver = null;
let statusObserver = null;
let statusTimeout = null;
let adPushed = false;

const pushAd = () => {
    if (adPushed) return;
    adPushed = true;

    try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
        collapsed.value = true;
        return;
    }

    watchAdStatus();
};

// Google marca el <ins> con data-ad-status="filled|unfilled" una vez resuelve
// si hay anuncio para servir. Si es "unfilled" (o nunca resuelve, p. ej. por un
// adblocker que deja pasar el script pero bloquea la peticion del anuncio),
// colapsamos el espacio reservado en vez de dejar un hueco en blanco fijo.
const watchAdStatus = () => {
    if (!insEl.value) return;

    statusObserver = new MutationObserver(() => {
        const status = insEl.value.getAttribute('data-ad-status');
        if (status === 'unfilled') {
            collapsed.value = true;
        }
        if (status) {
            stopWatchingStatus();
        }
    });

    statusObserver.observe(insEl.value, { attributes: true, attributeFilter: ['data-ad-status'] });

    statusTimeout = setTimeout(() => {
        if (!insEl.value?.getAttribute('data-ad-status')) {
            collapsed.value = true;
        }
        stopWatchingStatus();
    }, 5000);
};

const stopWatchingStatus = () => {
    if (statusObserver) {
        statusObserver.disconnect();
        statusObserver = null;
    }
    if (statusTimeout) {
        clearTimeout(statusTimeout);
        statusTimeout = null;
    }
};

// Carga bajo demanda: solo se hace push() cuando el slot está a ~200px del viewport,
// asi se reduce el numero de impresiones pero sube la viewability y el eCPM.
const observeSlot = () => {
    if (!adWrapperEl.value) return;

    intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            pushAd();
            intersectionObserver.disconnect();
            intersectionObserver = null;
        }
    }, { rootMargin: '200px' });

    intersectionObserver.observe(adWrapperEl.value);
};

onMounted(() => {
    if (window.adsbygoogle) {
        observeSlot();
        return;
    }

    scriptReadyInterval = setInterval(() => {
        if (window.adsbygoogle) {
            clearInterval(scriptReadyInterval);
            scriptReadyInterval = null;
            if (scriptReadyTimeout) {
                clearTimeout(scriptReadyTimeout);
                scriptReadyTimeout = null;
            }
            observeSlot();
        }
    }, 300);

    // Si el script de AdSense nunca llega a cargar (adblock, red, etc.) no
    // dejamos el hueco reservado indefinidamente.
    scriptReadyTimeout = setTimeout(() => {
        if (scriptReadyInterval) {
            clearInterval(scriptReadyInterval);
            scriptReadyInterval = null;
            collapsed.value = true;
        }
    }, 3000);
});

onBeforeUnmount(() => {
    if (scriptReadyInterval) clearInterval(scriptReadyInterval);
    if (scriptReadyTimeout) clearTimeout(scriptReadyTimeout);
    if (intersectionObserver) intersectionObserver.disconnect();
    stopWatchingStatus();
});
</script>
