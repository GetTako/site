export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const createObserver = (
      selector: string,
      options: IntersectionObserverInit,
      callback: (target: Element, idx?: number) => void,
    ) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (selector === '.stagger-container') {
              const children = entry.target.querySelectorAll('.stagger-item');
              children.forEach((child, idx) => callback(child, idx));
            } else {
              callback(entry.target);
            }
            observer.unobserve(entry.target);
          }
        });
      }, options);

      document.querySelectorAll(selector).forEach((el) => {
        observer.observe(el);
      });
    };

    // Give a slight delay to ensure the DOM is fully mounted
    setTimeout(() => {
      // Section-level reveal
      createObserver('.reveal', { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }, (target) => {
        target.classList.add('reveal-active');
      });

      // Staggered child reveal for grid items
      createObserver(
        '.stagger-container',
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
        (child, idx = 0) => {
          // @ts-ignore
          (child as HTMLElement).style.transitionDelay = `${idx * 80}ms`;
          child.classList.add('stagger-visible');
        },
      );
    }, 100);
  });
});
