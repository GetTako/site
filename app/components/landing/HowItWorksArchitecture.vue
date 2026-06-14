<template>
  <div class="mx-auto hidden w-full md:block">
    <div
      class="glass-panel group hover:border-primary/30 dark:hover:border-primary/30 relative rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 md:p-12"
    >
      <!-- Diagram Grid -->
      <div
        class="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-0"
      >
        <!-- Input / IO -->
        <div class="z-10 flex w-full flex-col items-center gap-4 text-center md:w-48">
          <div
            class="glass-badge flex size-16 items-center justify-center rounded-lg text-gray-500 transition-all duration-300 group-hover:bg-primary-500/10 group-hover:text-primary-500 dark:text-gray-400"
          >
            <div class="anim-keyboard flex size-8 items-center justify-center">
              <div
                class="kb-frame flex h-[20px] w-[28px] flex-col justify-between rounded border-2 border-current p-[3px]"
              >
                <div class="flex justify-between px-[1px]">
                  <div class="kb-key k1"></div>
                  <div class="kb-key k2"></div>
                  <div class="kb-key k3"></div>
                  <div class="kb-key k4"></div>
                </div>
                <div class="flex justify-between px-[1px]">
                  <div class="kb-key k5"></div>
                  <div class="kb-key k6"></div>
                  <div class="kb-key k7"></div>
                  <div class="kb-key k8"></div>
                </div>
                <div class="flex justify-center">
                  <div class="kb-key spacebar"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-sm font-medium text-gray-900 transition-colors dark:text-gray-200">
            Input / IO
          </div>
          <div class="mt-1 flex flex-wrap justify-center gap-2">
            <div
              class="glass-badge rounded-sm px-3 py-1 font-mono text-[10px] tracking-widest text-gray-500 transition-colors"
            >
              Keys + Signals
            </div>
          </div>
        </div>

        <!-- Flow Line 1 -->
        <div
          class="relative z-0 hidden flex-1 md:flex"
          style="height: 64px; margin-left: -3.5rem; margin-right: -3.5rem"
        >
          <div class="absolute inset-x-0" style="top: 32px">
            <div
              class="flow-line h-px w-full border-t border-dashed border-ui-border-muted transition-colors"
            ></div>
          </div>
          <!-- Request dot (left to right) -->
          <div
            class="flow-dot absolute size-2 -translate-y-1/2 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100"
            style="top: 32px"
          ></div>
          <!-- Response line (right to left) -->
          <div
            class="flow-line-reverse absolute h-[2px] w-4 -translate-y-1/2 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100"
            style="top: 32px"
          ></div>
        </div>

        <!-- Tako Kernel -->
        <div
          class="z-10 flex w-full flex-col items-center gap-4 text-center md:w-56"
          style="margin-top: -8px"
        >
          <div
            class="glass-badge text-primary flex size-20 items-center justify-center rounded-[1.25rem] transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(var(--color-primary-500),0.3)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="anim-cpu-svg size-10"
            >
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2" class="cpu-outer"></rect>
              <rect x="9" y="9" width="6" height="6" class="cpu-inner"></rect>
              <line x1="9" y1="1" x2="9" y2="4" class="cpu-pin pt1"></line>
              <line x1="15" y1="1" x2="15" y2="4" class="cpu-pin pt2"></line>
              <line x1="9" y1="20" x2="9" y2="23" class="cpu-pin pb1"></line>
              <line x1="15" y1="20" x2="15" y2="23" class="cpu-pin pb2"></line>
              <line x1="20" y1="9" x2="23" y2="9" class="cpu-pin pr1"></line>
              <line x1="20" y1="14" x2="23" y2="14" class="cpu-pin pr2"></line>
              <line x1="1" y1="9" x2="4" y2="9" class="cpu-pin pl1"></line>
              <line x1="1" y1="14" x2="4" y2="14" class="cpu-pin pl2"></line>
            </svg>
          </div>
          <div class="text-sm font-medium text-gray-900 transition-colors dark:text-gray-200">
            Tako Kernel
          </div>
          <div class="mt-1 flex flex-wrap justify-center gap-2">
            <div
              class="glass-badge rounded-sm px-2 py-1 font-mono text-[10px] tracking-widest text-gray-500 transition-colors"
            >
              IoC
            </div>
            <div
              class="glass-badge rounded-sm px-2 py-1 font-mono text-[10px] tracking-widest text-gray-500 transition-colors"
            >
              Bus
            </div>
            <div
              class="glass-badge rounded-sm px-2 py-1 font-mono text-[10px] tracking-widest text-gray-500 transition-colors"
            >
              Router
            </div>
          </div>
        </div>

        <!-- Flow Line 2 -->
        <div
          class="relative z-0 hidden flex-1 md:flex"
          style="height: 64px; margin-left: -3.5rem; margin-right: -3.5rem"
        >
          <div class="absolute inset-x-0" style="top: 32px">
            <div
              class="flow-line h-px w-full border-t border-dashed border-ui-border-muted transition-colors"
            ></div>
          </div>
          <!-- Request dot (left to right) -->
          <div
            class="flow-dot flow-dot-2 absolute size-2 -translate-y-1/2 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100"
            style="top: 32px"
          ></div>
          <!-- Response line (right to left) -->
          <div
            class="flow-line-reverse flow-line-reverse-2 absolute h-[2px] w-4 -translate-y-1/2 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100"
            style="top: 32px"
          ></div>
        </div>

        <!-- UI Renderer -->
        <div class="z-10 flex w-full flex-col items-center gap-4 text-center md:w-48">
          <div
            class="glass-badge flex size-16 items-center justify-center rounded-lg text-gray-500 transition-all duration-300 group-hover:bg-primary-500/10 group-hover:text-primary-500 dark:text-gray-400"
          >
            <div class="anim-window flex size-8 items-center justify-center">
              <div
                class="win-frame relative flex h-[24px] w-[28px] flex-col overflow-hidden rounded border-2 border-current"
              >
                <!-- Top bar -->
                <div
                  class="win-top flex items-center gap-[2px] border-b-2 border-current px-[3px] py-[3px]"
                >
                  <div class="win-dot dot1"></div>
                  <div class="win-dot dot2"></div>
                </div>
                <!-- Content area -->
                <div class="flex flex-1 flex-col gap-[3px] p-[3px]">
                  <div class="win-box box1 h-[4px]"></div>
                  <div class="flex flex-1 gap-[3px]">
                    <div class="win-box box2 flex-1"></div>
                    <div class="win-box box3 w-[6px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-sm font-medium text-gray-900 transition-colors dark:text-gray-200">
            UI Renderer
          </div>
          <div class="mt-1 flex flex-wrap justify-center gap-2">
            <div
              class="glass-badge rounded-sm px-3 py-1 font-mono text-[10px] tracking-widest text-gray-500 transition-colors"
            >
              Your Library
            </div>
          </div>
        </div>
      </div>

      <!-- Flow Legend -->
      <div
        class="mt-12 hidden flex-wrap items-center justify-center gap-8 border-t border-ui-border-muted pt-6 text-[9px] font-semibold tracking-[0.2em] text-gray-400 uppercase transition-colors md:flex dark:text-gray-500"
      >
        <div class="flex items-center gap-3">
          <div class="bg-primary h-[6px] w-[6px] rounded-full"></div>
          Request Flow
        </div>
        <div class="flex items-center gap-3">
          <div class="bg-primary h-[2px] w-4 rounded-full"></div>
          Response Flow
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Request Flow: dot bulat, bergerak kiri → kanan */
.flow-dot {
  animation: flowDot 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.flow-dot-2 {
  animation-delay: 0.4s;
}

/* Response Flow: garis memanjang, bergerak kanan → kiri */
.flow-line-reverse {
  animation: flowLineReverse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: 1.5s;
}
.flow-line-reverse-2 {
  animation-delay: 1.9s;
}

@keyframes flowDot {
  0% {
    left: 0;
    opacity: 0;
  }
  5% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  95% {
    opacity: 0.8;
  }
  100% {
    left: calc(100% - 8px);
    opacity: 0;
  }
}

@keyframes flowLineReverse {
  0% {
    right: 0;
    opacity: 0;
  }
  5% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.9;
  }
  95% {
    opacity: 0.6;
  }
  100% {
    right: calc(100% - 16px);
    opacity: 0;
  }
}

/* Keyboard Animation */
.kb-key {
  width: 3px;
  height: 2px;
  background-color: currentColor;
  border-radius: 1px;
  opacity: 0.4;
  transition: opacity 0.2s;
}
.kb-key.spacebar {
  width: 12px;
}
.group:hover .k1 {
  animation: pressKey 2s infinite 0.1s;
}
.group:hover .k5 {
  animation: pressKey 2s infinite 0.3s;
}
.group:hover .k3 {
  animation: pressKey 2s infinite 0.6s;
}
.group:hover .k8 {
  animation: pressKey 2s infinite 0.8s;
}
.group:hover .k2 {
  animation: pressKey 2s infinite 1.1s;
}
.group:hover .k4 {
  animation: pressKey 2s infinite 1.3s;
}
.group:hover .k6 {
  animation: pressKey 2s infinite 1.5s;
}
.group:hover .k7 {
  animation: pressKey 2s infinite 1.7s;
}
.group:hover .spacebar {
  animation: pressKey 2s infinite 1.9s;
}

@keyframes pressKey {
  0%,
  15%,
  100% {
    opacity: 0.4;
    transform: translateY(0);
  }
  5% {
    opacity: 1;
    transform: translateY(1.5px) scale(0.9);
    box-shadow: 0 0 6px currentColor;
  }
}

/* Window Animation */
.win-dot {
  width: 2.5px;
  height: 2.5px;
  border-radius: 50%;
  background-color: currentColor;
  opacity: 0.4;
}
.win-box {
  background-color: currentColor;
  border-radius: 1px;
  opacity: 0;
}
.group:hover .dot1 {
  animation: blinkDot 2s infinite 0s;
}
.group:hover .dot2 {
  animation: blinkDot 2s infinite 0.2s;
}
.group:hover .box1 {
  animation: drawBox 2s infinite 0.4s;
}
.group:hover .box2 {
  animation: drawBox 2s infinite 0.6s;
}
.group:hover .box3 {
  animation: drawBox 2s infinite 0.8s;
}

@keyframes blinkDot {
  0%,
  15%,
  100% {
    opacity: 0.4;
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 4px currentColor;
  }
}
@keyframes drawBox {
  0%,
  5% {
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
  }
  15%,
  85% {
    opacity: 0.6;
    transform: scaleX(1);
  }
  95%,
  100% {
    opacity: 0;
    transform: scaleX(1);
  }
}

/* CPU Animation */
.anim-cpu-svg {
  overflow: visible;
}
.cpu-pin {
  opacity: 0.4;
  transition: opacity 0.3s;
}
.group:hover .pt1,
.group:hover .pr2,
.group:hover .pb1,
.group:hover .pl2 {
  animation: pinData 1.2s infinite 0.1s;
}
.group:hover .pt2,
.group:hover .pr1,
.group:hover .pb2,
.group:hover .pl1 {
  animation: pinData 1.2s infinite 0.7s;
}

@keyframes pinData {
  0%,
  20%,
  100% {
    opacity: 0.4;
    filter: drop-shadow(0 0 0 transparent);
  }
  10% {
    opacity: 1;
    filter: drop-shadow(0 0 4px currentColor);
  }
}

.cpu-inner {
  transform-origin: center;
  transition: all 0.3s;
}
.group:hover .cpu-inner {
  fill: currentColor;
  fill-opacity: 0.2;
  animation: cpuCorePulse 1.2s infinite;
}
@keyframes cpuCorePulse {
  0%,
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scale(1.3);
    filter: drop-shadow(0 0 8px currentColor);
  }
}

.cpu-outer {
  transition: stroke 0.3s;
}
</style>
