<template>
  <ClientOnly v-if="language === 'mermaid'">
    <div class="glass-panel my-4 relative flex justify-center overflow-hidden rounded-xl! px-5 py-4 group">
      <div v-if="error" class="p-4 font-mono text-sm text-red-500">{{ error }}</div>
      <div 
        v-else 
        ref="mermaidContainer" 
        v-html="svg" 
        class="mermaid-diagram w-full cursor-grab active:cursor-grabbing flex justify-center" 
      />
      
      <!-- Panzoom Controls (Grid 3x3) -->
      <div v-if="!error && svg" class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity select-none">
        <div class="grid grid-cols-3 gap-1.5">
          <div></div>
          <UButton icon="i-lucide-chevron-up" size="sm" variant="ghost" class="flex justify-center shadow-sm backdrop-blur-md bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 text-slate-700 dark:text-slate-200 cursor-pointer hover:scale-105 transition-all" @click="panUp" />
          <UButton icon="i-lucide-zoom-in" size="sm" variant="ghost" class="flex justify-center shadow-sm backdrop-blur-md bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 text-slate-700 dark:text-slate-200 cursor-pointer hover:scale-105 transition-all" @click="zoomIn" />
          
          <UButton icon="i-lucide-chevron-left" size="sm" variant="ghost" class="flex justify-center shadow-sm backdrop-blur-md bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 text-slate-700 dark:text-slate-200 cursor-pointer hover:scale-105 transition-all" @click="panLeft" />
          <UButton icon="i-lucide-refresh-cw" size="sm" variant="ghost" class="flex justify-center shadow-sm backdrop-blur-md bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 text-slate-700 dark:text-slate-200 cursor-pointer hover:scale-105 transition-all" @click="resetZoom" />
          <UButton icon="i-lucide-chevron-right" size="sm" variant="ghost" class="flex justify-center shadow-sm backdrop-blur-md bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 text-slate-700 dark:text-slate-200 cursor-pointer hover:scale-105 transition-all" @click="panRight" />
          
          <div></div>
          <UButton icon="i-lucide-chevron-down" size="sm" variant="ghost" class="flex justify-center shadow-sm backdrop-blur-md bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 text-slate-700 dark:text-slate-200 cursor-pointer hover:scale-105 transition-all" @click="panDown" />
          <UButton icon="i-lucide-zoom-out" size="sm" variant="ghost" class="flex justify-center shadow-sm backdrop-blur-md bg-white/80 hover:bg-white dark:bg-white/10 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 text-slate-700 dark:text-slate-200 cursor-pointer hover:scale-105 transition-all" @click="zoomOut" />
        </div>
      </div>
    </div>
    <template #fallback>
      <div class="glass-panel my-4 flex animate-pulse justify-center rounded-xl! px-5 py-4">
        <div class="h-32 w-full max-w-md rounded bg-slate-100 dark:bg-slate-800"></div>
      </div>
    </template>
  </ClientOnly>

  <OriginalPre
    v-else
    v-bind="$props"
    :ui="{
      root: 'glass-panel rounded-xl! overflow-hidden my-4 ring-0',
      header:
        'bg-transparent border-t-0! border-l-0! border-r-0! border-b! border-ui-border-muted! w-full! m-0! px-5!',
      base: 'bg-transparent ring-0 border-0 shadow-none m-0',
      copy: 'glass-badge ring-0! border-ui-border-muted! bg-transparent! hover:bg-ui-bg-muted! transition-colors',
    }"
  >
    <slot />
  </OriginalPre>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import OriginalPre from '../../../node_modules/@nuxt/ui/dist/runtime/components/prose/Pre.vue';

const mermaidContainer = ref<HTMLElement | null>(null);
let panzoomInstance: any = null;

const props = defineProps({
  code: { type: String, default: '' },
  language: { type: String, default: null },
  filename: { type: String, default: null },
  highlights: { type: Array, default: () => [] },
  meta: { type: String, default: null },
  class: { type: String, default: null },
  icon: { type: null, required: false },
  hideHeader: { type: Boolean, required: false },
  ui: { type: Object, required: false },
});

const svg = ref('');
const error = ref('');

const colorMode = useColorMode();

async function renderMermaid() {
  if (props.language !== 'mermaid' || !props.code) return;

  try {
    const mermaid = (await import('mermaid')).default;

    const isDark = colorMode.value === 'dark';
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? 'dark' : 'base',
      look: 'handDrawn',
      fontFamily: 'Inter, sans-serif',
      securityLevel: 'loose',
      themeVariables: {
        fontFamily: 'Inter, sans-serif',
        primaryColor: isDark ? '#3730a3' : '#e0e7ff',     // Indigo pastel/dark
        primaryBorderColor: isDark ? '#818cf8' : '#4f46e5',
        primaryTextColor: isDark ? '#e0e7ff' : '#1e1b4b',
        lineColor: isDark ? '#a5b4fc' : '#4338ca',
        secondaryColor: isDark ? '#065f46' : '#d1fae5',   // Emerald
        tertiaryColor: isDark ? '#7f1d1d' : '#ffe4e6',    // Rose
        noteBkgColor: isDark ? '#422006' : '#fef3c7',     // Amber
        noteTextColor: isDark ? '#fde68a' : '#78350f',
      }
    });

    const id = `mermaid-${Math.random().toString(36).substring(2, 9)}`;
    const { svg: renderedSvg } = await mermaid.render(id, props.code);

    svg.value = renderedSvg;
    error.value = '';

    await nextTick();
    
    if (mermaidContainer.value) {
      if (panzoomInstance) {
        panzoomInstance.destroy();
      }
      
      const svgElement = mermaidContainer.value.querySelector('svg');
      if (svgElement) {
        const Panzoom = (await import('@panzoom/panzoom')).default;
        panzoomInstance = Panzoom(svgElement, {
          maxScale: 5,
          minScale: 0.5,
        });
        
        // Bersihkan listener wheel lama jika ada, lalu pasang yang baru
        const parent = mermaidContainer.value;
        parent.removeEventListener('wheel', panzoomInstance.zoomWithWheel);
        parent.addEventListener('wheel', panzoomInstance.zoomWithWheel);
      }
    }
  } catch (e: any) {
    console.error('Mermaid rendering error:', e);
    error.value = e.message || 'Failed to render diagram';
  }
}

// Panzoom actions
const panAmount = 50;
const panUp = () => panzoomInstance?.pan(0, panAmount, { relative: true });
const panDown = () => panzoomInstance?.pan(0, -panAmount, { relative: true });
const panLeft = () => panzoomInstance?.pan(panAmount, 0, { relative: true });
const panRight = () => panzoomInstance?.pan(-panAmount, 0, { relative: true });
const zoomIn = () => panzoomInstance?.zoomIn();
const zoomOut = () => panzoomInstance?.zoomOut();
const resetZoom = () => panzoomInstance?.reset();

onMounted(() => {
  if (props.language === 'mermaid') {
    renderMermaid();
  }
});

watch(
  () => colorMode.value,
  () => {
    if (props.language === 'mermaid') {
      renderMermaid();
    }
  },
);
</script>

<style>
.mermaid-diagram svg {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.08));
}
.dark .mermaid-diagram svg {
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.4));
}

/* Center text inside mermaid nodes horizontally & vertically */
.mermaid-diagram .nodeLabel,
.mermaid-diagram .edgeLabel,
.mermaid-diagram .label {
  text-align: center !important;
}

.mermaid-diagram foreignObject div {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  height: 100% !important;
  width: 100% !important;
}

.mermaid-diagram text {
  dominant-baseline: middle !important;
  text-anchor: middle !important;
}
</style>
