<template>
  <section class="relative py-12 md:py-20">
    <!-- Subtle grid background -->
    <div
      class="bg-grid-slate-200/50 dark:bg-grid-white/[0.02] absolute inset-0 bg-[length:32px_32px]"
    ></div>

    <div class="relative z-10 mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8">
      <LandingHowItWorksHeader />
      <LandingHowItWorksSteps />
      <LandingHowItWorksArchitecture />
    </div>
  </section>
</template>
