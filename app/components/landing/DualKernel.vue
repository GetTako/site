<template>
  <section class="relative overflow-hidden py-12 transition-colors duration-300 md:py-20">
    <div class="relative z-10 mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-8 flex flex-col items-center space-y-4 text-center md:mb-12">
        <div
          class="bg-primary/10 text-primary border-primary/20 mb-2 inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold tracking-widest uppercase"
        >
          Dual Kernel
        </div>
        <h2
          class="text-2xl font-semibold tracking-tight text-gray-900 transition-colors md:text-3xl lg:text-4xl dark:text-white"
        >
          One codebase. Two modes.
        </h2>
        <p
          class="mt-2 max-w-3xl text-base leading-relaxed text-gray-600 transition-colors md:text-[17px] dark:text-gray-400"
        >
          Tako checks os.Args and figures it out. Build headless CLI commands and rich interactive
          TUIs from the same services and plugins — no duplication.
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <!-- CLI Kernel -->
        <LandingBentoCard
          icon="i-lucide-terminal-square"
          title="CLI Kernel"
          description="For headless scripts & automation"
          customClass="min-h-[360px] md:min-h-[480px]"
          separator
        >
          <LandingVisualCliKernel />
        </LandingBentoCard>

        <!-- TUI Kernel -->
        <LandingBentoCard
          icon="i-lucide-app-window"
          title="TUI Kernel"
          description="For interactive, full-screen experiences"
          customClass="min-h-[360px] md:min-h-[480px]"
          separator
        >
          <LandingVisualTuiKernel />
        </LandingBentoCard>
      </div>
    </div>
  </section>
</template>
