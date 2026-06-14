<template>
  <section class="relative overflow-hidden py-12 transition-colors duration-300 md:py-20">
    <div class="relative z-10 mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-8 flex flex-col items-center text-center md:mb-12">
        <div
          class="bg-primary/10 text-primary border-primary/20 mb-6 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold tracking-widest uppercase"
        >
          Architecture Matters
        </div>
        <h2
          class="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"
        >
          Not just a renderer — <span class="text-primary">a real foundation</span>
        </h2>
        <p class="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-400">
          Other libraries draw boxes on screen. Tako handles
          <span class="text-primary">how your app talks to itself</span>. Separate your logic from
          your views. Here's what that looks like in practice.
        </p>
      </div>

      <!-- Comparison Table -->
      <div class="w-full">
        <UTable
          :data="data"
          :columns="columns"
          class="w-full min-w-[800px]"
          :ui="{
            divide: 'divide-y divide-ui-border-muted',
            tbody: 'divide-y divide-ui-border-muted',
          }"
        >
          <template #raw-header="{ column }">
            <div class="flex items-center gap-2 text-red-500/80">
              <UIcon name="i-lucide-x" class="size-4" />
              {{ column.header }}
            </div>
          </template>
          <template #tako-header="{ column }">
            <div class="text-primary flex items-center gap-2">
              <UIcon name="i-lucide-check" class="size-4" />
              {{ column.header }}
            </div>
          </template>

          <template #feature-cell="{ row }">
            <span class="font-medium text-gray-900 dark:text-gray-300">{{
              row.original.feature
            }}</span>
          </template>

          <template #raw-cell="{ row }">
            <div class="flex items-start gap-3 text-gray-500 dark:text-gray-400">
              <UIcon name="i-lucide-x" class="mt-0.5 size-4 shrink-0 text-red-500/50" />
              <span v-if="row.original.rawHtml" v-html="row.original.rawHtml"></span>
              <span v-else>{{ row.original.raw }}</span>
            </div>
          </template>

          <template #tako-cell="{ row }">
            <div class="flex items-start gap-3 font-medium text-gray-700 dark:text-gray-300">
              <UIcon
                name="i-lucide-check-circle-2"
                class="text-primary/70 mt-0.5 size-4 shrink-0"
              />
              <span v-if="row.original.takoHtml" v-html="row.original.takoHtml"></span>
              <span v-else>{{ row.original.tako }}</span>
            </div>
          </template>
        </UTable>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const columns = [
  { accessorKey: 'feature', header: '' },
  { accessorKey: 'raw', header: 'Raw TUI Library' },
  { accessorKey: 'tako', header: 'With Tako' },
];

const data = [
  {
    feature: 'State management',
    raw: 'One massive global struct or random package-level vars everywhere',
    tako: 'Service Container — resolve by interface, zero globals',
  },
  {
    feature: 'Key routing',
    raw: 'Giant switch-case on every keypress, no focus awareness',
    tako: 'Zone-aware Key Router — keys only fire in the active focus zone',
  },
  {
    feature: 'Overlays & modals',
    raw: 'Manual stack push, focus juggling, render flags, teardown mess',
    takoHtml:
      '<span class="glass-badge rounded px-1.5 py-0.5 font-mono text-[13px] text-gray-800 dark:text-gray-300">ctx.Overlay().Show("name", renderFn)</span> — one call, done',
  },
  {
    feature: 'Plugin integrations',
    raw: 'Hard imports, tight coupling, rewrite to add anything new',
    tako: 'Decoupled plugins via Event Bus + Hook Registry',
  },
  {
    feature: 'UI library choice',
    raw: 'Locked in — switching means rewriting your entire app',
    takoHtml:
      '<span class="glass-badge rounded px-1.5 py-0.5 font-mono text-[13px] text-gray-800 dark:text-gray-300">contracts.UIRenderer</span> — swap tview, tcell, Bubble Tea whenever',
  },
  {
    feature: 'DevTools',
    rawHtml:
      '<span class="glass-badge rounded px-1.5 py-0.5 font-mono text-[13px] text-gray-500 dark:text-gray-500">fmt.Println</span> debugging and manual log tailing',
    tako: 'Built-in Inspector TUI with live FPS, events & hook timings',
  },
];
</script>

<style scoped>
:deep(table),
:deep(thead),
:deep(tbody),
:deep(tr),
:deep(th),
:deep(td) {
  border-color: var(--ui-border-muted) !important;
}
</style>
