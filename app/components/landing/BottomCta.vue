<template>
  <section class="relative py-12 transition-colors duration-300 md:py-20">
    <div class="relative z-10 mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8">
      <div class="glass-panel relative overflow-hidden rounded-xl p-10 text-center md:p-16">
        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center">
          <h2
            class="mb-6 max-w-2xl text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"
          >
            Your terminal app deserves better than spaghetti code.
          </h2>
          <p
            class="mb-10 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-400"
          >
            Stop duct-taping your TUI together. Tako handles the boring parts — DI, routing, plugins
            — so you can ship the cool stuff faster.
          </p>

          <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <UButton
              to="/getting-started/installation"
              size="xl"
              color="primary"
              variant="outline"
              trailing-icon="i-lucide-arrow-right"
            >
              Get Started
            </UButton>
            <UButton
              to="https://github.com/gettako/tako"
              target="_blank"
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-simple-icons-github"
            >
              View on GitHub
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
