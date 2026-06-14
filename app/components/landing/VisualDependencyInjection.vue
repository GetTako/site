<template>
  <div class="di-demo mt-3">
    <div class="di-container">
      <!-- Service nodes -->
      <div class="di-service svc-1 glass-badge group-hover:border-primary-500">
        <UIcon
          name="i-lucide-database"
          class="size-3.5 text-slate-400 transition-colors group-hover:text-primary-500"
        />
      </div>
      <div class="di-service svc-2 glass-badge group-hover:border-primary-500">
        <UIcon
          name="i-lucide-settings"
          class="size-3.5 text-slate-400 transition-colors group-hover:text-primary-500"
        />
      </div>
      <div class="di-service svc-3 glass-badge group-hover:border-primary-500">
        <UIcon
          name="i-lucide-file-text"
          class="size-3.5 text-slate-400 transition-colors group-hover:text-primary-500"
        />
      </div>

      <svg class="di-svg" viewBox="0 0 220 100" fill="none">
        <!-- Connection lines -->
        <path d="M 36 25 Q 75 25, 98 50" class="di-line" />
        <path d="M 36 75 Q 75 75, 98 50" class="di-line" />
        <path d="M 184 50 Q 145 50, 122 50" class="di-line" />

        <!-- Particle streams (multiple per line for density) -->
        <circle r="3" class="di-particle">
          <animateMotion
            dur="1.4s"
            repeatCount="indefinite"
            begin="0s"
            path="M 36 25 Q 75 25, 98 50"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.85;1"
            dur="1.4s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>
        <circle r="2" class="di-particle-trail">
          <animateMotion
            dur="1.4s"
            repeatCount="indefinite"
            begin="0.2s"
            path="M 36 25 Q 75 25, 98 50"
          />
          <animate
            attributeName="opacity"
            values="0;0.6;0.6;0"
            keyTimes="0;0.1;0.85;1"
            dur="1.4s"
            repeatCount="indefinite"
            begin="0.2s"
          />
        </circle>

        <circle r="3" class="di-particle">
          <animateMotion
            dur="1.4s"
            repeatCount="indefinite"
            begin="0.5s"
            path="M 36 75 Q 75 75, 98 50"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.85;1"
            dur="1.4s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>
        <circle r="2" class="di-particle-trail">
          <animateMotion
            dur="1.4s"
            repeatCount="indefinite"
            begin="0.7s"
            path="M 36 75 Q 75 75, 98 50"
          />
          <animate
            attributeName="opacity"
            values="0;0.6;0.6;0"
            keyTimes="0;0.1;0.85;1"
            dur="1.4s"
            repeatCount="indefinite"
            begin="0.7s"
          />
        </circle>

        <circle r="3" class="di-particle">
          <animateMotion
            dur="1.4s"
            repeatCount="indefinite"
            begin="1s"
            path="M 184 50 Q 145 50, 122 50"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.85;1"
            dur="1.4s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>
        <circle r="2" class="di-particle-trail">
          <animateMotion
            dur="1.4s"
            repeatCount="indefinite"
            begin="1.2s"
            path="M 184 50 Q 145 50, 122 50"
          />
          <animate
            attributeName="opacity"
            values="0;0.6;0.6;0"
            keyTimes="0;0.1;0.85;1"
            dur="1.4s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>
      </svg>

      <!-- Central IoC Container -->
      <div class="di-core glass-badge group-hover:border-primary-500">
        <UIcon name="i-lucide-box" class="size-5 text-primary-500" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.di-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
}
.di-container {
  position: relative;
  width: 220px;
  height: 100px;
}
.di-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.di-line {
  stroke: #94a3b8;
  stroke-width: 1.5px;
  stroke-dasharray: 4px 4px;
  fill: none;
  opacity: 0.4;
  transition: all 0.3s;
}
.dark .di-line {
  stroke: #64748b;
}
.group:hover .di-line {
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
.di-particle {
  fill: var(--color-primary-500);
  opacity: 0;
  display: none;
}
.di-particle-trail {
  fill: var(--color-primary-500);
  opacity: 0;
  display: none;
}
.group:hover .di-particle,
.group:hover .di-particle-trail {
  display: block;
  opacity: 1;
}
.di-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s;
}
.group:hover .di-core {
  box-shadow: 0 0 16px color-mix(in srgb, var(--color-primary-500) 35%, transparent);
}
.di-service {
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transition: all 0.4s ease;
}
.svc-1 {
  top: 12px;
  left: 10px;
}
.svc-2 {
  bottom: 12px;
  left: 10px;
}
.svc-3 {
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.group:hover .svc-1 {
  transform: translate(4px, 3px);
}
.group:hover .svc-2 {
  transform: translate(4px, -3px);
}
.group:hover .svc-3 {
  transform: translate(-4px, -50%);
}
</style>
