<template>
  <div
    class="glass-panel hover:border-primary/30 dark:hover:border-primary/30 group relative flex flex-col items-center rounded-xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
  >
    <!-- Number Badge -->
    <div
      class="bg-primary absolute -top-3 left-1/2 flex size-6 -translate-x-1/2 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-sm ring-4 ring-primary-500/20 transition-all dark:ring-primary-400/20"
    >
      {{ number }}
    </div>

    <!-- Icon Container -->
    <div class="bg-primary mb-6 flex size-12 items-center justify-center rounded-md text-white">
      <UIcon :name="icon" class="size-5" />
    </div>

    <!-- Content -->
    <h3 class="mb-3 text-lg font-medium text-gray-900 transition-colors dark:text-gray-100">
      {{ title }}
    </h3>
    <p class="text-xs leading-relaxed text-gray-600 transition-colors dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: number | string;
  icon: string;
  title: string;
  description: string;
}>();
</script>
