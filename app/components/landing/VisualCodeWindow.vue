<template>
  <div class="byou-modern-demo mt-6 flex w-full justify-center">
    <div
      class="byou-window glass-panel transition-colors duration-500 group-hover:border-primary-500/50"
    >
      <div
        class="byou-header flex h-7 items-center border-b border-ui-border-muted bg-ui-bg-muted px-3"
      >
        <div class="byou-dots">
          <div class="byou-dot bg-[#ff5f56]"></div>
          <div class="byou-dot bg-[#ffbd2e]"></div>
          <div class="byou-dot bg-[#27c93f]"></div>
        </div>
      </div>
      <div class="byou-body byou-code-block text-ui-text-muted">
        <div class="byou-line">
          <span class="text-ui-text-dimmed">app</span>.<span class="text-sky-500">Container</span
          >().<span class="text-sky-500">Singleton</span>(
        </div>
        <div class="byou-line ml-6">
          <span class="text-primary-500">new</span>(contracts.<span class="text-sky-500"
            >UIRenderer</span
          >),
        </div>
        <div class="byou-line ml-6 flex items-center">
          <div class="byou-chip-wrapper">
            <div class="byou-chip byou-chip-btea">
              <UIcon name="i-lucide-palette" class="size-3.5" />
              <span>Bubble Tea</span>
            </div>
            <div class="byou-chip byou-chip-tview">
              <UIcon name="i-lucide-layout-dashboard" class="size-3.5" />
              <span>tview</span>
            </div>
            <div class="byou-chip byou-chip-tcell">
              <UIcon name="i-lucide-terminal-square" class="size-3.5" />
              <span>tcell</span>
            </div>
          </div>
          <span class="ml-1 text-slate-400">,</span>
          <span class="ml-3 text-slate-500 italic">// Inject adapter</span>
        </div>
        <div class="byou-line ml-2">)</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.byou-modern-demo {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.byou-window {
  display: flex;
  min-height: 200px;
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  flex-direction: column;
  overflow: hidden;
}
.byou-dots {
  display: flex;
  gap: 6px;
}
.byou-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.byou-body {
  display: flex;
  justify-content: center;
  padding: 16px;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
@media (min-width: 640px) {
  .byou-body {
    padding: 20px 24px;
  }
}
.byou-code-block {
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.5;
}
.byou-line {
  display: flex;
  align-items: center;
}
.byou-chip-wrapper {
  height: 32px;
  width: 120px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}
.byou-chip {
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid transparent;
  position: absolute;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  opacity: 0;
}
.byou-chip-btea {
  border-color: var(--color-primary-500);
  background: color-mix(in srgb, var(--color-primary-500) 10%, transparent);
  color: var(--color-primary-500);
  animation: slide1 5s infinite;
}
.byou-chip-tview {
  border-color: rgb(14, 165, 233);
  background: rgba(14, 165, 233, 0.1);
  color: rgb(14, 165, 233);
  animation: slide2 5s infinite;
}
.byou-chip-tcell {
  border-color: rgb(99, 102, 241);
  background: rgba(99, 102, 241, 0.1);
  color: rgb(99, 102, 241);
  animation: slide3 5s infinite;
}
@keyframes slide1 {
  0%,
  25% {
    opacity: 1;
    transform: translateY(0);
  }
  30%,
  100% {
    opacity: 0;
    transform: translateY(-32px);
  }
  95% {
    opacity: 0;
    transform: translateY(32px);
  }
}
@keyframes slide2 {
  0%,
  30% {
    opacity: 0;
    transform: translateY(32px);
  }
  33%,
  58% {
    opacity: 1;
    transform: translateY(0);
  }
  63%,
  100% {
    opacity: 0;
    transform: translateY(-32px);
  }
}
@keyframes slide3 {
  0%,
  63% {
    opacity: 0;
    transform: translateY(32px);
  }
  66%,
  95% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-32px);
  }
}
</style>
