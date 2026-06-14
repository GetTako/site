<template>
  <div
    :class="[
      'glass-panel group hover:border-primary/30 dark:hover:border-primary/30 relative flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1',
      customClass,
    ]"
  >
    <!-- Text Content -->
    <div class="relative z-10 flex-shrink-0 p-5 md:p-8">
      <div class="mb-4 flex items-center gap-4">
        <div
          class="text-primary dark:group-hover:bg-primary/10 flex size-10 items-center justify-center rounded-md border border-ui-border-muted bg-ui-bg transition-colors group-hover:bg-ui-bg-elevated"
        >
          <UIcon :name="icon" class="size-5" />
        </div>
        <h3
          class="text-lg font-semibold text-gray-900 transition-colors md:text-xl dark:text-white"
        >
          {{ title }}
        </h3>
      </div>
      <p
        class="pr-4 text-sm leading-relaxed text-gray-600 transition-colors md:text-[15px] dark:text-gray-400"
      >
        {{ description }}
      </p>
    </div>

    <!-- Visual Content Slot (hidden on mobile unless separator) -->
    <div
      :class="[
        'pointer-events-none relative z-0 min-h-0 w-full flex-1 items-center justify-center pb-6',
        separator ? 'flex border-t border-ui-border-muted' : 'hidden md:flex',
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
  customClass?: string;
  separator?: boolean;
}>();
</script>
