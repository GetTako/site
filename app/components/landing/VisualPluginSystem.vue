<template>
  <div class="ecosystem-magnetic mt-4">
    <!-- Core Framework -->
    <div class="mag-core glass-badge">
      <div
        class="mag-label absolute top-1 left-1/2 flex -translate-x-1/2 items-center gap-1 font-mono text-[10px] whitespace-nowrap text-slate-500 transition-colors group-hover:text-primary-500"
      >
        <UIcon name="i-lucide-plug" class="size-3" /> Your Host App
      </div>
      <div class="mag-data-flow-track"><div class="mag-data-flow"></div></div>
      <div
        class="mag-contact-track absolute bottom-0 left-1/2 flex w-[140px] -translate-x-1/2 justify-between"
      >
        <div class="mag-contact-wrapper">
          <div class="mag-contact group-hover:bg-primary-500 group-hover:opacity-100"></div>
        </div>
        <div class="mag-contact-wrapper">
          <div class="mag-contact group-hover:bg-primary-500 group-hover:opacity-100"></div>
        </div>
        <div class="mag-contact-wrapper">
          <div class="mag-contact group-hover:bg-primary-500 group-hover:opacity-100"></div>
        </div>
      </div>
    </div>

    <!-- Plugins -->
    <div class="mag-plugins">
      <div
        class="mag-plugin plug-1 glass-badge group-hover:border-primary-500! group-hover:bg-primary-500/10!"
      >
        <div class="mag-pin-group">
          <div class="mag-pin group-hover:bg-primary-500 group-hover:opacity-100"></div>
          <div class="mag-pin group-hover:bg-primary-500 group-hover:opacity-100"></div>
          <div class="mag-pin group-hover:bg-primary-500 group-hover:opacity-100"></div>
        </div>
        <UIcon
          name="i-lucide-zap"
          class="mag-icon size-4 text-slate-400 group-hover:scale-110 group-hover:text-primary-500!"
        />
      </div>
      <div
        class="mag-plugin plug-2 glass-badge group-hover:border-primary-500! group-hover:bg-primary-500/10!"
      >
        <div class="mag-pin-group">
          <div class="mag-pin group-hover:bg-primary-500 group-hover:opacity-100"></div>
          <div class="mag-pin group-hover:bg-primary-500 group-hover:opacity-100"></div>
          <div class="mag-pin group-hover:bg-primary-500 group-hover:opacity-100"></div>
        </div>
        <UIcon
          name="i-lucide-palette"
          class="mag-icon size-4 text-slate-400 group-hover:scale-110 group-hover:text-primary-500!"
        />
      </div>
      <div
        class="mag-plugin plug-3 glass-badge group-hover:border-primary-500! group-hover:bg-primary-500/10!"
      >
        <div class="mag-pin-group">
          <div class="mag-pin group-hover:bg-primary-500 group-hover:opacity-100"></div>
          <div class="mag-pin group-hover:bg-primary-500 group-hover:opacity-100"></div>
          <div class="mag-pin group-hover:bg-primary-500 group-hover:opacity-100"></div>
        </div>
        <UIcon
          name="i-lucide-puzzle"
          class="mag-icon size-4 text-slate-400 group-hover:scale-110 group-hover:text-primary-500!"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.ecosystem-magnetic {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.mag-core {
  width: 160px;
  height: 44px;
  border-radius: 6px;
  position: relative;
  overflow: visible;
  transition: all 0.3s ease;
}
.mag-data-flow-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 6px;
}
.mag-data-flow {
  position: absolute;
  top: 60%;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(148, 163, 184, 0.6);
  opacity: 0.8;
}
.mag-data-flow::after {
  content: '';
  position: absolute;
  top: -1px;
  left: -100%;
  width: 50%;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgb(var(--color-primary-500)), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}
.group:hover .mag-data-flow::after {
  opacity: 1;
  animation: dataFlow 1.5s infinite 0.5s ease-in-out;
}
@keyframes dataFlow {
  0% {
    left: -50%;
  }
  100% {
    left: 100%;
  }
}
.mag-contact-wrapper {
  width: 36px;
  display: flex;
  justify-content: center;
}
.mag-contact {
  width: 20px;
  height: 5px;
  background: rgba(148, 163, 184, 0.6);
  border-radius: 0 0 2px 2px;
  transition: all 0.3s ease;
  opacity: 0.8;
}
.mag-plugins {
  display: flex;
  gap: 16px;
  width: 140px;
}
.mag-plugin {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: translateY(8px);
}
.group:hover .mag-plugin {
  transform: translateY(-8px);
  box-shadow:
    0 0 12px rgba(var(--color-primary-500), 0.5),
    0 0 4px rgba(var(--color-primary-500), 0.3);
}
.group:hover .mag-pin {
  box-shadow: 0 -4px 8px rgba(var(--color-primary-500), 0.6);
}
.group:hover .mag-contact {
  box-shadow: 0 4px 8px rgba(var(--color-primary-500), 0.6);
}
.mag-pin-group {
  position: absolute;
  top: -7px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2px;
}
.mag-pin {
  width: 3px;
  height: 7px;
  background: rgba(148, 163, 184, 0.6);
  border-radius: 1px 1px 0 0;
  transition: all 0.3s ease;
  opacity: 0.9;
}
.mag-icon {
  transition: all 0.3s ease;
}
.plug-1 {
  transition-delay: 0s;
}
.plug-2 {
  transition-delay: 0.1s;
}
.plug-3 {
  transition-delay: 0.2s;
}
</style>
