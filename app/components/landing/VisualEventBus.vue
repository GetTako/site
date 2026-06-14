<template>
  <div class="eb-demo mt-4 flex justify-center">
    <div class="eb-container">
      <!-- Connection Lines -->
      <svg class="eb-svg pointer-events-none" viewBox="0 0 200 90">
        <!-- Lines -->
        <path d="M 40 45 L 90 45" class="eb-line" />
        <path d="M 110 45 L 160 25" class="eb-line" />
        <path d="M 110 45 L 160 65" class="eb-line" />

        <!-- Pulses -->
        <circle r="3" class="eb-pulse">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M 40 45 L 90 45"
            keyPoints="0;1;1;1"
            keyTimes="0;0.33;0.34;1"
            calcMode="linear"
          />
          <animate
            attributeName="opacity"
            values="0;1;0;0"
            keyTimes="0;0.15;0.33;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="3" class="eb-pulse">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M 110 45 L 160 25"
            keyPoints="0;0;1;1"
            keyTimes="0;0.33;0.66;1"
            calcMode="linear"
          />
          <animate
            attributeName="opacity"
            values="0;0;1;0;0"
            keyTimes="0;0.33;0.48;0.66;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        <circle r="3" class="eb-pulse">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M 110 45 L 160 65"
            keyPoints="0;0;1;1"
            keyTimes="0;0.33;0.66;1"
            calcMode="linear"
          />
          <animate
            attributeName="opacity"
            values="0;0;1;0;0"
            keyTimes="0;0.33;0.48;0.66;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <!-- Nodes -->
      <div
        class="eb-node pub glass-badge transition-colors duration-500 group-hover:border-primary-500"
      >
        <UIcon
          name="i-lucide-send"
          class="size-3.5 text-slate-400 transition-colors duration-500 group-hover:text-primary-500"
        />
        <div class="eb-glow pub-glow"></div>
      </div>

      <div class="eb-core glass-badge transition-all duration-500 group-hover:border-primary-500">
        <UIcon
          name="i-lucide-radio"
          class="size-4 text-slate-400 transition-colors duration-500 group-hover:text-primary-500"
        />
        <div class="eb-ripple"></div>
      </div>

      <div
        class="eb-node sub sub-1 glass-badge transition-colors duration-500 group-hover:border-primary-500"
      >
        <UIcon
          name="i-lucide-bell"
          class="size-3.5 text-slate-400 transition-colors duration-500 group-hover:text-primary-500"
        />
        <div class="eb-glow sub-glow"></div>
      </div>

      <div
        class="eb-node sub sub-2 glass-badge transition-colors duration-500 group-hover:border-primary-500"
      >
        <UIcon
          name="i-lucide-bell"
          class="size-3.5 text-slate-400 transition-colors duration-500 group-hover:text-primary-500"
        />
        <div class="eb-glow sub-glow"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.eb-demo {
  height: 90px;
  width: 100%;
}
.eb-container {
  position: relative;
  width: 200px;
  height: 90px;
}
.eb-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.eb-line {
  fill: none;
  stroke: #94a3b8;
  stroke-width: 1.5px;
  stroke-dasharray: 4px 4px;
  opacity: 0.4;
  transition: all 0.5s;
}
.dark .eb-line {
  stroke: #64748b;
}
.group:hover .eb-line {
  stroke: var(--color-primary-500);
  opacity: 0.8;
  animation: marchDash 1s linear infinite;
}
@keyframes marchDash {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -8px;
  }
}
.eb-pulse {
  fill: var(--color-primary-500);
  filter: drop-shadow(0 0 4px color-mix(in srgb, var(--color-primary-500) 80%, transparent));
  display: none;
}
.group:hover .eb-pulse {
  display: block;
}
.eb-node {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.pub {
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
}
.sub-1 {
  top: 11px;
  right: 14px;
}
.sub-2 {
  bottom: 11px;
  right: 14px;
}
.eb-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}
.group:hover .eb-core {
  box-shadow: 0 0 20px color-mix(in srgb, var(--color-primary-500) 20%, transparent);
}

.eb-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: color-mix(in srgb, var(--color-primary-500) 30%, transparent);
  opacity: 0;
}
.group:hover .pub-glow {
  animation: pubGlow 3s infinite;
}
.group:hover .sub-glow {
  animation: subGlow 3s infinite;
}
@keyframes pubGlow {
  0%,
  15%,
  100% {
    opacity: 0;
    transform: scale(1);
  }
  5% {
    opacity: 1;
    transform: scale(1.3);
  }
}
@keyframes subGlow {
  0%,
  60%,
  80%,
  100% {
    opacity: 0;
    transform: scale(1);
  }
  66% {
    opacity: 1;
    transform: scale(1.3);
  }
}

.eb-ripple {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1.5px solid var(--color-primary-500);
  opacity: 0;
}
.group:hover .eb-ripple {
  animation: ripple 3s infinite;
}
@keyframes ripple {
  0%,
  30% {
    transform: scale(0.8);
    opacity: 0;
  }
  33% {
    transform: scale(1);
    opacity: 0.8;
  }
  60%,
  100% {
    transform: scale(2.2);
    opacity: 0;
  }
}
</style>
