<template>
  <div class="mx-auto mt-6 mb-12 max-w-5xl px-4 md:mt-10 md:mb-16">
    <div
      class="mb-8 grid grid-cols-2 divide-y-0 divide-ui-border-muted text-center md:grid-cols-4 md:divide-x md:divide-y-0"
    >
      <div class="flex flex-col items-center gap-1 px-2 py-4">
        <UIcon name="i-lucide-terminal" class="text-primary mb-2 size-6" />
        <div class="text-lg font-bold">Go 1.26+</div>
        <div class="mt-1 text-[10px] tracking-widest text-gray-500 uppercase dark:text-gray-400">
          Minimum Go Version
        </div>
      </div>
      <div class="flex flex-col items-center gap-1 px-2 py-4">
        <UIcon name="i-lucide-feather" class="text-primary mb-2 size-6" />
        <div class="text-lg font-bold">Minimal</div>
        <div class="mt-1 text-[10px] tracking-widest text-gray-500 uppercase dark:text-gray-400">
          Dependencies
        </div>
      </div>
      <div class="flex flex-col items-center gap-1 px-2 py-4">
        <UIcon name="i-lucide-puzzle" class="text-primary mb-2 size-6" />
        <div class="text-lg font-bold">100%</div>
        <div class="mt-1 text-[10px] tracking-widest text-gray-500 uppercase dark:text-gray-400">
          UI Library Agnostic
        </div>
      </div>
      <div class="flex flex-col items-center gap-1 px-2 py-4">
        <UIcon name="i-lucide-file-badge" class="text-primary mb-2 size-6" />
        <div class="text-lg font-bold">MIT</div>
        <div class="mt-1 text-[10px] tracking-widest text-gray-500 uppercase dark:text-gray-400">
          Open-Source License
        </div>
      </div>
    </div>

    <p class="mx-auto max-w-2xl text-center text-sm text-gray-600 dark:text-gray-400">
      Build terminal apps in Go the right way — no global state, no tangled keybindings, no renderer
      lock-in.
    </p>
  </div>
</template>
