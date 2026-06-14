<template>
  <section class="relative overflow-hidden py-12 transition-colors duration-300 md:py-20">
    <div class="relative z-10 mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12 flex flex-col items-center text-center">
        <h2
          class="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"
        >
          Got questions?
        </h2>
        <p class="text-base text-gray-600 dark:text-gray-400">
          Here are the ones we hear the most.
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="glass-panel overflow-hidden rounded-md">
        <UAccordion
          :items="items"
          :ui="{
            trigger: 'px-4 sm:px-6 font-medium text-ui-text',
            body: 'px-4 sm:px-6 text-ui-text-dimmed',
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    label: 'How does it compare to Bubble Tea?',
    content:
      "Tako isn't a UI replacement—it's an architectural framework that sits underneath your UI. While Bubble Tea or tview handles the screen drawing, Tako gives you the backend structure (Dependency Injection, Routing, Event Bus) so your application logic stays clean and decoupled.",
  },
  {
    label: 'Do I have to use Bubble Tea then?',
    content:
      "Nope. Tako is completely UI-agnostic. We ship a first-party Bubble Tea adapter because it's popular, but tview, tcell, or termbox work just fine. Simply implement the contracts.UIRenderer interface and you're set.",
  },
  {
    label: 'Can I use Tako for simple CLI scripts too?',
    content:
      'Absolutely. The Dual Kernel design means you can build standard headless CLI commands and full-screen interactive TUIs from the same codebase, reusing the exact same injected services.',
  },
  {
    label: 'Can I migrate my existing terminal app?',
    content:
      "Totally. Since Tako separates your logic from the rendering layer, you can wrap your existing components incrementally. Keep your current UI code and start adopting Tako's DI or Event Bus module by module.",
  },
  {
    label: 'Does it work on Windows?',
    content:
      'Yes. Tako itself is pure Go and platform-agnostic. Any OS limitations will come entirely from the underlying terminal UI library you choose to render with.',
  },
  {
    label: 'What Go version do I need?',
    content:
      'Go 1.26+ is required. We heavily utilize the latest Go generics features to power the type-safe dependency injection container.',
  },
  {
    label: 'Is it stable and production-ready?',
    content:
      "Tako is built for apps that need to last, and it's already used in real projects. However, it is still in active development. The core APIs are stabilizing, but there might be minor breaking changes before the v1.0 release.",
  },
];
</script>
