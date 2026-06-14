<template>
  <section class="relative py-12 transition-colors duration-300 md:py-20">
    <div class="relative z-10 mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-8 flex flex-col items-center space-y-4 text-center md:mb-12">
        <h2
          class="text-2xl font-semibold tracking-tight text-gray-900 transition-colors md:text-3xl lg:text-4xl dark:text-white"
        >
          The building blocks you actually need
        </h2>
        <p
          class="mt-2 max-w-2xl text-base leading-relaxed text-gray-600 transition-colors md:text-lg dark:text-gray-400"
        >
          Everything you need to keep your TUI clean, organized, and easy to grow.
        </p>
      </div>

      <!-- Single Bento Grid Layout -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-6">
        <!-- UI-Agnostic Renderer (Left) -->
        <LandingBentoCard
          icon="i-lucide-palette"
          title="UI-Agnostic Renderer"
          description="Tako is intentionally designed to be completely decoupled from any specific UI library. Whether you prefer the Elm-like architecture of Bubble Tea, the widget-driven approach of tview, or building directly on top of tcell, you have absolute freedom. Simply implement the contracts.UIRenderer interface, and your chosen library immediately inherits Tako's core capabilities—including input routing, event management, and overlay rendering—without locking your business logic to a single UI framework."
          customClass="lg:col-span-3 lg:row-span-2 lg:min-h-[400px]"
        >
          <LandingVisualCodeWindow />
        </LandingBentoCard>

        <!-- Clean Architecture (Top Right) -->
        <LandingBentoCard
          icon="i-lucide-layers"
          title="Clean Architecture"
          description="Keep your app in neat layers — no global state, no spaghetti imports."
          customClass="lg:col-span-3 lg:row-span-1"
        >
          <LandingVisualArchitecture />
        </LandingBentoCard>

        <!-- Input Routing (Bottom Right) -->
        <LandingBentoCard
          icon="i-lucide-keyboard"
          title="Input Routing"
          description="Keyboard and mouse events only reach the component that's currently in focus. No leaking, no guessing."
          customClass="lg:col-span-3 lg:row-span-1"
        >
          <LandingVisualRouting />
        </LandingBentoCard>

        <!-- Dependency Injection -->
        <LandingBentoCard
          icon="i-lucide-refresh-cw"
          title="Dependency Injection"
          description="Built-in service container — inject loggers, config, or shared state anywhere without passing stuff around manually."
          customClass="lg:col-span-2 lg:min-h-[240px]"
        >
          <LandingVisualDependencyInjection />
        </LandingBentoCard>

        <!-- Pre-built UI Patterns -->
        <LandingBentoCard
          icon="i-lucide-puzzle"
          title="Pre-built UI Patterns"
          description="Tako provides ready-to-use primitives for modals, overlays, and complex navigation. Instead of manually calculating layout coordinates or managing UI focus states, you can directly invoke the API. The framework automatically handles component positioning, sizing, and rendering layers."
          customClass="lg:col-span-4 lg:min-h-[240px]"
        >
          <LandingVisualUIPatterns />
        </LandingBentoCard>

        <!-- Service Providers -->
        <LandingBentoCard
          icon="i-lucide-box"
          title="Service Providers"
          description="The primary building block in Tako. Encapsulate features—both internal logic and external plugins—with a strict two-phase lifecycle (Register & Boot)."
          customClass="lg:col-span-3 lg:min-h-[240px]"
        >
          <LandingVisualPluginSystem />
        </LandingBentoCard>

        <!-- Event Bus -->
        <LandingBentoCard
          icon="i-lucide-radio"
          title="Event Bus"
          description="Pub/sub built right in. Broadcast state changes and trigger background work without threading channels everywhere."
          customClass="lg:col-span-3 lg:min-h-[240px]"
        >
          <LandingVisualEventBus />
        </LandingBentoCard>
      </div>
    </div>
  </section>
</template>
