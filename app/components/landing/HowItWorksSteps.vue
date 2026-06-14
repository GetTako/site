<template>
  <div class="relative mx-auto mb-8 w-full md:mb-12">
    <!-- Connecting dashed line background -->
    <div
      class="absolute top-1/2 right-0 left-0 z-0 hidden h-px -translate-y-1/2 border-t border-dashed border-ui-border-muted transition-colors md:block"
    ></div>

    <div class="relative z-10 grid grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-0">
      <LandingHowItWorksStepCard
        number="1"
        icon="i-lucide-palette"
        title="Pick Your Renderer"
        description="tview, Bubble Tea, tcell, termbox — whatever you already know. Your code, your choice."
      />
      <LandingHowItWorksStepCard
        number="2"
        icon="i-lucide-plug"
        title="Implement One Interface"
        description="contracts.UIRenderer is the only thing Tako talks to. One interface, done."
      />
      <LandingHowItWorksStepCard
        number="3"
        icon="i-lucide-rocket"
        title="Everything Just Works"
        description="Key routing, events, overlays, and plugins light up automatically. No extra config needed."
      />
    </div>
  </div>
</template>
