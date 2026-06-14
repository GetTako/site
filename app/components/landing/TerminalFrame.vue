<template>
  <div :class="['glass-panel relative w-full overflow-hidden rounded-xl', customClass]">
    <!-- macOS Terminal Header -->
    <div class="flex h-11 items-center border-b border-ui-border-muted bg-ui-bg-muted px-4">
      <div class="flex items-center gap-2">
        <div class="size-3 rounded-full bg-red-500/80"></div>
        <div class="size-3 rounded-full bg-yellow-500/80"></div>
        <div class="size-3 rounded-full bg-green-500/80"></div>
      </div>

      <!-- Optional Title in Center -->
      <div
        v-if="title"
        class="absolute left-1/2 -translate-x-1/2 text-[13px] font-medium text-gray-500 dark:text-gray-400"
      >
        {{ title }}
      </div>

      <!-- Tabs (GetStarted usage) -->
      <div
        v-if="$slots.tabs"
        class="no-scrollbar ml-4 flex items-center gap-2 overflow-x-auto text-[13px] font-medium lg:ml-6"
      >
        <slot name="tabs" />
      </div>

      <!-- Right Side Actions/Badges -->
      <div class="ml-auto flex items-center gap-2">
        <slot name="actions" />
      </div>
    </div>

    <!-- Content / Body -->
    <div class="overflow-x-auto text-left">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  customClass?: string;
}>();
</script>
