<template>
  <section class="relative overflow-hidden py-12 transition-colors duration-300 md:py-20">
    <div class="relative z-10 mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8">
      <div class="mb-8 text-center md:mb-12">
        <div
          class="bg-primary/10 border-primary/20 text-primary mb-6 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase"
        >
          Plugin System
        </div>
        <h2
          class="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white"
        >
          Service Providers & Plugins
        </h2>
        <p
          class="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-400"
        >
          Everything in Tako is a Service Provider. Internal features or external
          plugins—encapsulate your logic with a strict two-phase lifecycle. No hidden magic, no
          global registries.
        </p>
      </div>

      <div class="mx-auto mb-6 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        <LandingPluginCard
          icon="i-lucide-box"
          filename="manifest.go"
          badge="IDENTITY"
          description="Turn a provider into a visible external plugin. Declare its identity and framework validates dependencies before booting."
        >
          <slot name="manifest" />
        </LandingPluginCard>

        <LandingPluginCard
          icon="i-lucide-zap"
          filename="main.go"
          badge="EXPLICIT"
          description="Register providers explicitly in your main.go. No init() magic, no global state. You always know what's running."
        >
          <slot name="boot" />
        </LandingPluginCard>

        <LandingPluginCard
          icon="i-lucide-route"
          filename="provider.go"
          badge="LIFECYCLE"
          description="Implement the two-phase Register/Boot lifecycle. Bind services to the container, then run logic once everything is ready."
        >
          <slot name="logic" />
        </LandingPluginCard>
      </div>

      <!-- Isolation Guarantee -->
      <div class="mx-auto w-full">
        <div
          class="glass-panel hover:border-primary/30 dark:hover:border-primary/30 flex flex-col rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 md:flex-row md:gap-8 md:p-8"
        >
          <!-- Mobile Header (Visible on Mobile) -->
          <div class="mb-4 flex items-center gap-4 md:hidden">
            <div
              class="bg-primary/10 border-primary/20 text-primary flex size-12 flex-none items-center justify-center rounded-lg border"
            >
              <UIcon name="i-lucide-component" class="size-6" />
            </div>
            <div>
              <div class="text-primary mb-1 text-[10px] font-bold tracking-widest uppercase">
                ISOLATION GUARANTEE
              </div>
              <h3 class="text-lg leading-tight font-semibold text-gray-900 dark:text-white">
                Plugins can't break each other.
              </h3>
            </div>
          </div>

          <!-- Desktop Icon (Hidden on Mobile) -->
          <div
            class="bg-primary/10 border-primary/20 text-primary hidden size-14 flex-none items-center justify-center rounded-lg border md:flex"
          >
            <UIcon name="i-lucide-component" class="size-7" />
          </div>

          <div class="flex-1">
            <!-- Desktop Title (Hidden on Mobile) -->
            <div class="hidden md:block">
              <div class="text-primary mb-2 text-[11px] font-bold tracking-widest uppercase">
                ISOLATION GUARANTEE
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-900 md:text-2xl dark:text-white">
                Plugins can't break each other. Period.
              </h3>
            </div>
            <!-- Description (Visible on both) -->
            <p class="text-sm leading-relaxed text-gray-600 md:text-base dark:text-gray-400">
              Each plugin runs in its own scope. The Event Bus and Hook Registry are the only way
              they talk — no shared globals, no direct imports. Yank any plugin out and nothing else
              falls over.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
