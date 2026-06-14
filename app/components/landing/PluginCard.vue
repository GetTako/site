<template>
  <div
    class="glass-panel hover:border-primary/30 dark:hover:border-primary/30 flex h-full flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
  >
    <div class="mb-6 flex items-center gap-4">
      <div
        class="bg-primary/10 border-primary/20 text-primary flex size-12 items-center justify-center rounded-md border"
      >
        <UIcon :name="icon" class="size-6" />
      </div>
      <div>
        <div class="font-bold text-gray-900 dark:text-white">{{ filename }}</div>
        <div class="text-primary mt-0.5 text-[10px] font-bold tracking-wider uppercase">
          {{ badge }}
        </div>
      </div>
    </div>
    <p class="mb-6 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
    <div
      class="mt-auto overflow-x-auto rounded-md p-0 font-mono text-[12px] leading-[1.6] md:text-[13px] [&_pre]:!m-0 [&_pre]:!rounded-md [&_pre]:!border-0 [&_pre]:!bg-transparent [&>div]:!m-0 [&>div]:!border-none [&>div]:!bg-transparent [&>div]:!shadow-none [&>div]:!backdrop-blur-none"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  filename: string;
  badge: string;
  description: string;
}>();
</script>
