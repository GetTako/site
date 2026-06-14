<template>
  <div class="flex size-full flex-col justify-end px-4 pt-4 pb-8 sm:px-8">
    <div class="mx-auto w-full text-left font-mono text-[12px] leading-relaxed">
      <!-- Command -->
      <div class="mb-4 text-[13px]">
        <span class="text-primary mr-2">$</span>
        <span class="font-semibold text-gray-700 dark:text-gray-200">myapp</span>
      </div>

      <!-- TUI App -->
      <div
        class="glass-panel w-full transform overflow-hidden rounded-sm transition-transform duration-500 group-hover:scale-[1.02]"
      >
        <!-- Header -->
        <div
          class="bg-primary flex w-full items-center justify-center px-4 py-1 text-[11px] font-bold tracking-wider text-[#18181b]"
        >
          <UIcon name="i-lucide-search" class="mr-2 size-3 stroke-[3]" />
          TAKO INSPECTOR <span class="ml-2 font-normal tracking-normal opacity-70">[tako]</span>
        </div>

        <div class="p-3 text-gray-600 dark:text-gray-400">
          <!-- Health Section -->
          <div class="border-primary/20 relative mt-1 mb-3 rounded border p-2">
            <div
              class="glass-badge text-primary absolute -top-2.5 left-2 flex items-center px-1 text-[10px] transition-colors"
            >
              <UIcon name="i-lucide-activity" class="mr-1 size-3" /> Health
            </div>

            <div class="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div>
                <div class="mb-1 flex items-center text-[11px] text-gray-700 dark:text-gray-300">
                  <UIcon name="i-lucide-server" class="mr-1 size-3" /> System
                </div>
                <div
                  class="ml-1.5 space-y-0.5 border-l border-slate-300 py-0.5 pl-2 text-[10px] text-gray-500 dark:border-slate-700"
                >
                  <div>
                    Uptime <span class="ml-1 text-gray-700 dark:text-gray-300">: 00:00:22</span>
                  </div>
                  <div>
                    Goroutines <span class="ml-1 text-gray-700 dark:text-gray-300">: 13</span>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-1 flex items-center text-[11px] text-gray-700 dark:text-gray-300">
                  <UIcon name="i-lucide-cpu" class="mr-1 size-3" /> Memory
                </div>
                <div
                  class="ml-1.5 space-y-0.5 border-l border-slate-300 py-0.5 pl-2 text-[10px] text-gray-500 dark:border-slate-700"
                >
                  <div>
                    Allocated <span class="ml-1 text-gray-700 dark:text-gray-300">: 2 MB</span>
                  </div>
                  <div>
                    Sys Mem <span class="ml-1 text-gray-700 dark:text-gray-300">: 13 MB</span>
                  </div>
                </div>
              </div>
              <div>
                <div class="mb-1 flex items-center text-[11px] text-gray-700 dark:text-gray-300">
                  <UIcon name="i-lucide-clock" class="mr-1 size-3" /> Boot Time
                </div>
                <div
                  class="ml-1.5 space-y-0.5 border-l border-slate-300 py-0.5 pl-2 text-[10px] text-gray-500 dark:border-slate-700"
                >
                  <div>
                    App <span class="ml-1 text-gray-700 dark:text-gray-300">: 0.40 ms</span>
                  </div>
                  <div>
                    Total Boot <span class="ml-1 text-gray-700 dark:text-gray-300">: 0.40 ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Split -->
          <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-5">
            <!-- Keybindings -->
            <div class="border-primary/20 relative min-h-[80px] rounded border p-2 sm:col-span-2">
              <div
                class="glass-badge text-primary absolute -top-2.5 left-2 flex items-center px-1 text-[10px]"
              >
                <UIcon name="i-lucide-keyboard" class="mr-1 size-3" /> Keybindings
              </div>
              <div class="mt-1 mb-2 flex justify-between text-[10px] text-gray-500">
                <span>Scope</span><span>Key</span>
              </div>
              <div class="mb-1 flex justify-between text-[10px] text-gray-700 dark:text-gray-300">
                <span>Global</span><span class="text-gray-500">?</span>
              </div>
              <div class="flex justify-between text-[10px] text-gray-700 dark:text-gray-300">
                <span>Global</span><span class="text-gray-500">ctrl+c</span>
              </div>
            </div>

            <!-- Event Bus -->
            <div class="border-primary/20 relative min-h-[80px] rounded border p-2 sm:col-span-3">
              <div
                class="glass-badge text-primary absolute -top-2.5 left-2 flex items-center px-1 text-[10px]"
              >
                <UIcon name="i-lucide-bell" class="mr-1 size-3" /> Events
              </div>
              <div class="mt-1 mb-1 text-[10px] text-gray-700 dark:text-gray-300">
                <span class="mr-1 text-gray-500">[11:51:28]</span> overlay:shown
              </div>
              <div class="mb-1 text-[10px] text-gray-700 dark:text-gray-300">
                <span class="mr-1 text-gray-500">[11:51:28]</span> fzf:opened
              </div>
              <div class="text-[10px] text-gray-700 dark:text-gray-300">
                <span class="mr-1 text-gray-500">[11:51:30]</span> overlay:closed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
