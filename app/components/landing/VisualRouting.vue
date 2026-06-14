<template>
  <div class="smart-routing-demo mt-4 flex w-full items-center justify-center">
    <div
      class="router-container group relative flex h-[80px] w-full max-w-[280px] items-center justify-between"
    >
      <!-- Background connection lines and animated packets -->
      <svg
        class="pointer-events-none absolute inset-0 size-full"
        style="z-index: 1"
        viewBox="0 0 280 80"
      >
        <!-- Base faint lines -->
        <path id="path-top-in" d="M 28 20 C 74 20, 74 40, 120 40" class="route-line-base" />
        <path id="path-bot-in" d="M 28 60 C 74 60, 74 40, 120 40" class="route-line-base" />
        <path id="path-out" d="M 160 40 C 208 40, 208 40, 256 40" class="route-line-base" />

        <!-- Animated Packets (VitePress style dashes on hover) -->
        <path d="M 28 20 C 74 20, 74 40, 120 40" class="route-line-in" />
        <path d="M 28 60 C 74 60, 74 40, 120 40" class="route-line-in route-delay" />
        <path d="M 160 40 C 208 40, 208 40, 256 40" class="route-line-out active" />

        <!-- Flowing Spheres (Constant Animation) -->
        <circle r="3" class="fill-primary-400 dark:fill-primary-500" opacity="0">
          <animateMotion id="animKbd" dur="1s" begin="0s; animMouse.end + 0.1s" calcMode="paced">
            <mpath href="#path-top-in" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.9;1"
            dur="1s"
            begin="animKbd.begin"
          />
        </circle>

        <circle r="3" class="fill-primary-500" opacity="0">
          <animateMotion id="animOut1" dur="1s" begin="animKbd.end" calcMode="paced">
            <mpath href="#path-out" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.9;1"
            dur="1s"
            begin="animOut1.begin"
          />
        </circle>

        <circle r="3" class="fill-primary-400 dark:fill-primary-500" opacity="0">
          <animateMotion id="animMouse" dur="1s" begin="animOut1.end + 0.1s" calcMode="paced">
            <mpath href="#path-bot-in" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.9;1"
            dur="1s"
            begin="animMouse.begin"
          />
        </circle>

        <circle r="3" class="fill-primary-500" opacity="0">
          <animateMotion id="animOut2" dur="1s" begin="animMouse.end" calcMode="paced">
            <mpath href="#path-out" />
          </animateMotion>
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.9;1"
            dur="1s"
            begin="animOut2.begin"
          />
        </circle>
      </svg>

      <!-- Inputs -->
      <div class="relative z-10 flex flex-col gap-3">
        <div
          class="input-node glass-badge transition-all duration-300 group-hover:border-primary-500"
        >
          <UIcon
            name="i-lucide-keyboard"
            class="size-4 text-slate-400 transition-colors group-hover:text-primary-500"
          />
        </div>
        <div
          class="input-node glass-badge transition-all delay-100 duration-300 group-hover:border-primary-500"
        >
          <UIcon
            name="i-lucide-mouse"
            class="size-4 text-slate-400 transition-colors group-hover:text-primary-500"
          />
        </div>
      </div>

      <!-- Router -->
      <div
        class="router-node glass-badge relative z-10 transition-all duration-500 group-hover:border-primary-500 group-hover:bg-primary-500/10"
      >
        <UIcon
          name="i-lucide-merge"
          class="size-5 rotate-90 text-slate-500 transition-colors group-hover:text-primary-500"
        />
      </div>

      <!-- Targets -->
      <div class="relative z-10 flex flex-col gap-2">
        <div class="target-el glass-badge">
          <div class="target-inner bg-slate-400 dark:bg-slate-500"></div>
        </div>
        <div
          class="target-el active-el glass-badge transition-all duration-500 group-hover:scale-110 group-hover:border-primary-500"
        >
          <div class="target-inner active-inner"></div>
          <div class="target-glow"></div>
        </div>
        <div class="target-el glass-badge">
          <div class="target-inner bg-slate-400 dark:bg-slate-500"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.smart-routing-demo {
  position: relative;
  height: 80px;
}
.input-node {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.router-node {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.target-el {
  width: 24px;
  height: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
}
.target-el.active-el {
  opacity: 1;
  position: relative;
  z-index: 2;
}
.target-inner {
  width: 10px;
  height: 4px;
  border-radius: 2px;
}
.target-inner.active-inner {
  background: rgb(var(--color-primary-500));
}
.target-glow {
  position: absolute;
  inset: -2px;
  border-radius: 4px;
  background: rgb(var(--color-primary-500));
  opacity: 0;
  transition: opacity 0.3s;
}
:global(.group:hover) .active-el .target-glow {
  animation: targetPulse 1.5s infinite 1.2s;
}
@keyframes targetPulse {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
}

/* SVG Lines */
.route-line-base {
  fill: none;
  stroke: rgba(148, 163, 184, 0.6);
  stroke-width: 1.5;
  transition: stroke 0.3s;
}
:global(.group:hover) .route-line-base {
  stroke: rgba(var(--color-primary-500), 0.4);
}
.dark .route-line-base {
  stroke: rgba(148, 163, 184, 0.4);
}

.route-line-in,
.route-line-out {
  fill: none;
  stroke: rgba(148, 163, 184, 0.6);
  stroke-width: 1.5;
  stroke-dasharray: 4 4;
  opacity: 0.4;
  transition: all 0.3s;
}
.dark .route-line-in,
.dark .route-line-out {
  stroke: rgba(148, 163, 184, 0.4);
}

.route-line-in {
  stroke: rgb(var(--color-primary-500));
  opacity: 0.4;
  animation: flowLineIn 1.5s linear infinite;
}
:global(.group:hover) .route-line-in {
  opacity: 0.8;
  animation: flowLineIn 0.8s linear infinite;
}
.route-line-in.route-delay {
  animation-delay: 0.75s;
}
:global(.group:hover) .route-line-in.route-delay {
  animation-delay: 0.4s;
}
@keyframes flowLineIn {
  from {
    stroke-dashoffset: 16;
  }
  to {
    stroke-dashoffset: 0;
  }
}

.route-line-out.active {
  stroke-dasharray: 6 6;
  stroke: rgb(var(--color-primary-500));
  opacity: 0.5;
  stroke-width: 1.5;
  animation: flowLineOut 2s linear infinite 0.5s;
}
:global(.group:hover) .route-line-out.active {
  opacity: 1;
  stroke-width: 2;
  animation: flowLineOut 1s linear infinite 0.3s;
}
@keyframes flowLineOut {
  from {
    stroke-dashoffset: 24;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
