<template>
  <div class="layered-3d-demo mt-4">
    <div class="iso-stack">
      <div
        class="iso-layer glass-badge iso-bot text-ui-text-dimmed group-hover:border-[#8b5cf6] group-hover:bg-[#8b5cf6]/10 group-hover:text-[#8b5cf6]"
      >
        <UIcon name="i-lucide-settings" class="size-3.5" />
        <span>Service</span>
      </div>
      <div
        class="iso-layer glass-badge iso-mid text-ui-text-dimmed group-hover:border-[#0ea5e9] group-hover:bg-[#0ea5e9]/10 group-hover:text-[#0ea5e9]"
      >
        <UIcon name="i-lucide-layout-dashboard" class="size-3.5" />
        <span>Component</span>
      </div>
      <div
        class="iso-layer glass-badge iso-top text-ui-text-dimmed group-hover:border-primary-500 group-hover:bg-primary-500/10 group-hover:text-primary-500"
      >
        <UIcon name="i-lucide-app-window" class="size-3.5" />
        <span>Overlay</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layered-3d-demo {
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 600px;
}

.iso-stack {
  position: relative;
  width: 120px;
  height: 44px;
  transform-style: preserve-3d;
  transform: rotateX(55deg) rotateZ(-40deg);
  transition: transform 0.6s ease;
}
.group:hover .iso-stack {
  transform: rotateX(60deg) rotateZ(-45deg);
}

.iso-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  transition: all 0.6s ease;
}

.iso-top {
  transform: translateZ(12px);
}
.iso-mid {
  transform: translateZ(0px);
}
.iso-bot {
  transform: translateZ(-12px);
}

.group:hover .iso-top {
  transform: translateZ(36px);
  box-shadow: 0 8px 24px rgba(var(--color-primary-500), 0.15);
}
.group:hover .iso-mid {
  transform: translateZ(0px);
  box-shadow: 0 4px 16px rgba(14, 165, 233, 0.12);
}
.group:hover .iso-bot {
  transform: translateZ(-36px);
  box-shadow: 0 2px 12px rgba(139, 92, 246, 0.1);
}
</style>
