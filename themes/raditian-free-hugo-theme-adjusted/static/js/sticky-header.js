class StickyHeader {
  constructor(header) {
    this.header = header;
    this.thresholdPosition = 15;
    this.triggeredStickyClass = "header--sticky-triggered";
    this.stickyClass = "header--sticky";
    this.ticking = false;
    window.addEventListener("DOMContentLoaded", () => this.initSticky(), { once: true });
  }

  initSticky() {
    this.header.classList.add(this.stickyClass);
    this.scrollChanged();
    window.addEventListener("scroll", () => this.scrollHandler(), { passive: true });
  }

  scrollHandler() {
    if (this.ticking) {
      return;
    }

    window.requestAnimationFrame(() => {
      this.scrollChanged();
      this.ticking = false;
    });
    this.ticking = true;
  }

  scrollChanged() {
    this.header.classList.toggle(
      this.triggeredStickyClass,
      window.scrollY > this.thresholdPosition,
    );
  }
}

const headerEl = document.querySelector(".header");
if (headerEl) {
  new StickyHeader(headerEl);
}