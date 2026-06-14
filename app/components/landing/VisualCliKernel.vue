<template>
  <div class="flex size-full items-center justify-center p-4">
    <LandingTerminalFrame
      title="bash"
      customClass="w-full max-w-lg mx-auto transform transition-transform duration-500 group-hover:scale-[1.02]"
    >
      <div class="p-5 text-left font-mono text-[12px] leading-loose sm:text-[13px]">
        <!-- Command -->
        <div class="mb-4">
          <span class="text-primary mr-2">$</span>
          <span class="text-gray-700 dark:text-gray-300">myapp plugin:list --json</span>
        </div>

        <!-- JSON Output -->
        <div class="text-emerald-500 dark:text-emerald-400">[</div>
        <div class="pl-4">
          <span class="text-gray-500 dark:text-gray-400">{"name": </span>
          <span class="text-primary">"search"</span>
          <span class="text-gray-500 dark:text-gray-400">,"status": </span>
          <span class="text-primary">"active"</span>
          <span class="text-gray-500 dark:text-gray-400">},</span>
        </div>
        <div class="pl-4">
          <span class="text-gray-500 dark:text-gray-400">{"name": </span>
          <span class="text-primary">"dashboard"</span>
          <span class="text-gray-500 dark:text-gray-400">,"status": </span>
          <span class="text-primary">"active"</span>
          <span class="text-gray-500 dark:text-gray-400">}</span>
        </div>
        <div class="mb-4 text-emerald-500 dark:text-emerald-400">]</div>

        <!-- Prompt -->
        <div class="flex items-center">
          <span class="text-primary mr-2">$</span>
          <span class="h-3.5 w-2 animate-pulse bg-gray-400 dark:bg-gray-500"></span>
        </div>
      </div>
    </LandingTerminalFrame>
  </div>
</template>
