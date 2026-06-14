<template>
  <OriginalCode
    v-bind="$props"
    :ui="{
      base: 'glass-badge rounded px-[0.375em] py-[0.1em] font-mono text-[0.875em] leading-tight text-gray-800 dark:text-gray-300',
    }"
    :class="[$props.class]"
  >
    <slot />
  </OriginalCode>
</template>

<script setup lang="ts">
import OriginalCode from '../../../node_modules/@nuxt/ui/dist/runtime/components/prose/Code.vue';

const props = defineProps({
  lang: { type: String, required: false },
  color: { type: null, required: false },
  class: { type: null, required: false },
  ui: { type: Object, required: false },
});
</script>
