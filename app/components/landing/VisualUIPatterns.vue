<template>
  <div class="ui-patterns-demo mt-4 flex justify-center">
    <div
      class="tui-window glass-panel transition-colors duration-500 group-hover:border-primary-500/50"
    >
      <!-- Layout structure -->
      <div class="tui-sidebar flex flex-col gap-2 border-r border-ui-border-muted/50 p-2">
        <div class="tui-line w-full"></div>
        <div class="tui-line w-3/4"></div>
        <div class="tui-line w-5/6"></div>
      </div>
      <div class="tui-main flex flex-col gap-2 p-2">
        <div class="flex h-1/2 gap-2">
          <div class="tui-box flex-1"></div>
          <div class="tui-box w-1/3"></div>
        </div>
        <div class="tui-box flex-1"></div>
      </div>

      <!-- Overlay & Modal -->
      <div class="tui-overlay"></div>
      <div
        class="tui-modal flex flex-col gap-2 rounded border border-slate-200 bg-slate-50/90 p-2.5 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/90"
      >
        <div class="flex items-center justify-between border-b border-ui-border-muted/50 pb-1.5">
          <div class="flex gap-1">
            <div class="size-1.5 rounded-full bg-slate-400/50"></div>
            <div class="size-1.5 rounded-full bg-slate-400/50"></div>
          </div>
          <UIcon name="i-lucide-layout-template" class="size-3 text-primary-500" />
        </div>
        <div class="flex flex-col gap-1.5">
          <div class="h-1.5 w-full rounded-full bg-primary-500/40"></div>
          <div class="h-1.5 w-2/3 rounded-full bg-primary-500/20"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ui-patterns-demo {
  height: 90px;
  width: 100%;
}
.tui-window {
  position: relative;
  width: 170px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  overflow: hidden;
}
.tui-sidebar {
  width: 30%;
  height: 100%;
}
.tui-main {
  width: 70%;
  height: 100%;
}
.tui-line {
  height: 3px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.3);
}
.tui-box {
  border-radius: 4px;
  background: rgba(148, 163, 184, 0.15);
}
.dark .tui-line {
  background: rgba(100, 116, 139, 0.3);
}
.dark .tui-box {
  background: rgba(100, 116, 139, 0.15);
}

.tui-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.1);
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.dark .tui-overlay {
  background: rgba(0, 0, 0, 0.3);
}
.group:hover .tui-overlay {
  opacity: 1;
}

.tui-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 110px;
  transform: translate(-50%, -40%) scale(0.9);
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}
.group:hover .tui-modal {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  border-color: color-mix(in srgb, var(--color-primary-500) 50%, transparent);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--color-primary-500) 25%, transparent);
}
</style>
