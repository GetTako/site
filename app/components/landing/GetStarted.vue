<template>
  <section class="relative overflow-hidden py-12 transition-colors duration-300 md:py-20">
    <div class="relative z-10 mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8">
      <div class="mb-8 text-center md:mb-12">
        <h2
          class="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"
        >
          Up and running in minutes
        </h2>
        <p class="mx-auto max-w-2xl text-base text-gray-600 md:text-lg dark:text-gray-400">
          Install, pick your renderer, wire things up — Tako handles the rest.
        </p>
      </div>

      <div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-5 lg:gap-16">
        <!-- Left: Steps -->
        <div class="relative lg:col-span-2">
          <!-- Vertical Line -->
          <div
            class="absolute top-8 bottom-8 left-4 z-0 -ml-[0.5px] w-[1px] bg-ui-border-muted"
          ></div>

          <div class="relative z-10 flex flex-col gap-10">
            <!-- Step 1 -->
            <div class="group flex gap-6">
              <div
                class="glass-panel group-hover:border-primary/50 group-hover:text-primary z-10 mt-0.5 flex size-8 flex-none items-center justify-center rounded-full text-sm font-medium text-gray-500 transition-colors dark:text-gray-400"
              >
                1
              </div>
              <div class="flex-1">
                <h3 class="mb-2 text-base font-semibold text-gray-900 md:text-lg dark:text-white">
                  Install Tako
                </h3>
                <p class="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                  One command to pull it into your Go project.
                </p>
                <!-- Commands Container -->
                <div
                  class="glass-panel inline-flex w-auto max-w-full items-center gap-3 overflow-x-auto rounded-xl p-3 font-mono text-sm text-gray-700 dark:text-gray-300"
                >
                  <span class="flex items-center gap-3">
                    <span class="text-gray-400 dark:text-gray-500">$</span> go get
                    github.com/gettako/tako
                  </span>
                  <button
                    class="hover:text-primary dark:hover:text-primary ml-auto flex flex-none cursor-pointer items-center text-gray-400 transition-colors dark:text-gray-500"
                    title="Copy"
                    @click="copy"
                  >
                    <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-copy'" class="size-4" />
                  </button>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="group flex gap-6">
              <div
                class="glass-panel group-hover:border-primary/50 group-hover:text-primary z-10 mt-0.5 flex size-8 flex-none items-center justify-center rounded-full text-sm font-medium text-gray-500 transition-colors dark:text-gray-400"
              >
                2
              </div>
              <div class="flex-1">
                <h3 class="mb-2 text-base font-semibold text-gray-900 md:text-lg dark:text-white">
                  Pick your UI library
                </h3>
                <p class="leading-relaxed text-gray-600 dark:text-gray-400">
                  Use whatever terminal UI library you like. Wrap it in a single
                  <code
                    class="glass-badge rounded px-1.5 py-0.5 font-mono text-sm text-gray-800 dark:text-gray-300"
                    >contracts.UIRenderer</code
                  >
                  interface — that's the only thing Tako touches.
                  <span class="text-primary font-medium">tview</span>,
                  <span class="text-primary font-medium">tcell</span>,
                  <span class="text-primary font-medium">Bubble Tea</span> — all good.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="group flex gap-6">
              <div
                class="glass-panel group-hover:border-primary/50 group-hover:text-primary z-10 mt-0.5 flex size-8 flex-none items-center justify-center rounded-full text-sm font-medium text-gray-500 transition-colors dark:text-gray-400"
              >
                3
              </div>
              <div class="flex-1">
                <h3 class="mb-2 text-base font-semibold text-gray-900 md:text-lg dark:text-white">
                  Ship it
                </h3>
                <p class="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
                  Register services, bind keys, add plugins — then call
                  <code
                    class="glass-badge rounded px-1.5 py-0.5 font-mono text-sm text-gray-800 dark:text-gray-300"
                    >tako.Run(app)</code
                  >. That's it, you're live.
                </p>

                <div class="flex flex-wrap items-center gap-4">
                  <UButton
                    size="lg"
                    color="primary"
                    class="px-6 font-medium"
                    to="/getting-started/installation"
                    trailing-icon="i-lucide-arrow-right"
                  >
                    Read the Guide
                  </UButton>
                  <UButton
                    size="lg"
                    color="gray"
                    variant="solid"
                    class="glass-badge px-6 font-medium hover:bg-slate-200"
                    to="https://github.com/gettako/tako"
                    target="_blank"
                  >
                    View Source
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Code Window -->
        <div class="min-w-0 lg:col-span-3">
          <LandingTerminalFrame customClass="w-full">
            <template #tabs>
              <div
                :class="[
                  'cursor-pointer rounded-sm border px-3 py-1 whitespace-nowrap transition-colors',
                  activeTab === 'bubbletea'
                    ? 'bg-primary/10 text-primary border-primary/20'
                    : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200',
                ]"
                @click="activeTab = 'bubbletea'"
              >
                Bubble Tea adapter
              </div>
              <div
                :class="[
                  'cursor-pointer rounded-sm border px-3 py-1 whitespace-nowrap transition-colors',
                  activeTab === 'custom'
                    ? 'bg-primary/10 text-primary border-primary/20'
                    : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-gray-200',
                ]"
                @click="activeTab = 'custom'"
              >
                Custom adapter
              </div>
            </template>
            <template #actions>
              <div class="hidden font-mono text-[13px] text-gray-500 sm:block">go</div>
            </template>

            <div class="overflow-hidden">
              <div
                v-show="activeTab === 'bubbletea'"
                class="overflow-x-auto [&_pre]:!m-0 [&_pre]:!border-0 [&_pre]:!bg-transparent [&>div]:!m-0 [&>div]:!border-none [&>div]:!bg-transparent [&>div]:!shadow-none [&>div]:!backdrop-blur-none"
              >
                <slot name="code" />
              </div>
              <div
                v-show="activeTab === 'custom'"
                class="overflow-x-auto [&_pre]:!m-0 [&_pre]:!border-0 [&_pre]:!bg-transparent [&>div]:!m-0 [&>div]:!border-none [&>div]:!bg-transparent [&>div]:!shadow-none [&>div]:!backdrop-blur-none"
              >
                <slot name="custom-code" />
              </div>
            </div>
          </LandingTerminalFrame>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeTab = ref<'bubbletea' | 'custom'>('bubbletea');
const copied = ref(false);

function copy() {
  navigator.clipboard.writeText('go get github.com/gettako/tako');
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}
</script>
