<template>
  <section
    class="relative overflow-hidden py-16 transition-colors duration-300 dark:border-slate-800"
  >
    <!-- Subtle top glow -->
    <div
      class="bg-primary/20 absolute top-0 left-1/2 hidden h-[1px] w-1/2 -translate-x-1/2 dark:block"
    ></div>
    <div
      class="bg-primary/10 absolute top-0 left-1/2 hidden h-8 w-1/4 -translate-x-1/2 rounded-full blur-2xl dark:block"
    ></div>

    <div class="relative z-10 mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <div class="mb-6 flex items-center gap-3">
            <img src="/logo.webp" alt="Tako Logo" class="size-8 object-contain" />
            <span class="text-primary text-xl font-bold tracking-wide">TAKO</span>
          </div>
          <p class="max-w-md text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
            A clean framework for building terminal apps in Go. UI-agnostic. Extensible by design.
          </p>
        </div>

        <!-- Documentation & Community -->
        <div class="col-span-1 grid grid-cols-2 gap-8 lg:col-span-2 lg:contents">
          <!-- Documentation Links -->
          <div>
            <div class="mb-6 flex items-center gap-2">
              <UIcon name="i-lucide-book" class="size-4 text-gray-500" />
              <h3 class="text-xs font-bold tracking-wider text-gray-500 uppercase">
                Documentation
              </h3>
            </div>
            <ul class="space-y-4">
              <li>
                <ULink
                  to="/overview"
                  class="text-[14px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >Overview</ULink
                >
              </li>
              <li>
                <ULink
                  to="/getting-started/installation"
                  class="text-[14px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >Installation</ULink
                >
              </li>
              <li>
                <ULink
                  to="/architecture/service-container"
                  class="text-[14px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >Service Container</ULink
                >
              </li>
              <li>
                <ULink
                  to="/core-concepts/key-routing"
                  class="text-[14px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >Core Concepts</ULink
                >
              </li>
              <li>
                <ULink
                  to="/plugins/plugin-basics"
                  class="text-[14px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >Plugin System</ULink
                >
              </li>
            </ul>
          </div>

          <!-- Community Links -->
          <div>
            <div class="mb-6 flex items-center gap-2">
              <UIcon name="i-lucide-users" class="size-4 text-gray-500" />
              <h3 class="text-xs font-bold tracking-wider text-gray-500 uppercase">Community</h3>
            </div>
            <ul class="space-y-4">
              <li>
                <ULink
                  to="https://github.com/GetTako/tako"
                  target="_blank"
                  class="text-[14px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >GitHub</ULink
                >
              </li>
              <li>
                <ULink
                  to="https://github.com/GetTako/tako/issues"
                  target="_blank"
                  class="text-[14px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >Issue Tracker</ULink
                >
              </li>
              <li>
                <ULink
                  to="https://github.com/GetTako/tako/discussions"
                  target="_blank"
                  class="text-[14px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >Discussions</ULink
                >
              </li>
              <li>
                <ULink
                  to="/changelog"
                  class="text-[14px] text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >Changelog</ULink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
