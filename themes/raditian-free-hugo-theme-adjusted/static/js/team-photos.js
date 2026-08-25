(function () {
  const root = document.querySelector("[data-team-photos]");
  if (!root) {
    return;
  }

  const viewport = root.querySelector("[data-team-photos-viewport]");
  const prev = document.querySelector("[data-team-photos-prev]");
  const next = document.querySelector("[data-team-photos-next]");
  if (!viewport || !prev || !next) {
    return;
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  function maxScroll() {
    return Math.max(0, viewport.scrollWidth - viewport.clientWidth);
  }

  function step() {
    const first = viewport.querySelector(".team-photos__frame");
    if (!first) {
      return Math.round(viewport.clientWidth * 0.7);
    }
    const style = window.getComputedStyle(viewport.querySelector(".team-photos__track"));
    const gap = parseFloat(style.columnGap || style.gap) || 16;
    return first.getBoundingClientRect().width + gap;
  }

  function syncControls() {
    const max = maxScroll();
    const x = viewport.scrollLeft;
    prev.disabled = x <= 4;
    next.disabled = x >= max - 4;
    root.classList.toggle("is-start", prev.disabled);
    root.classList.toggle("is-end", next.disabled);
  }

  function scrollByDir(dir) {
    viewport.scrollBy({
      left: dir * step(),
      behavior: reduce.matches ? "auto" : "smooth",
    });
  }

  prev.addEventListener("click", function () {
    scrollByDir(-1);
  });

  next.addEventListener("click", function () {
    scrollByDir(1);
  });

  viewport.addEventListener("scroll", syncControls, { passive: true });
  window.addEventListener("resize", syncControls);
  window.addEventListener("load", syncControls);
  if (typeof ResizeObserver === "function") {
    const ro = new ResizeObserver(syncControls);
    ro.observe(viewport);
    const track = viewport.querySelector(".team-photos__track");
    if (track) {
      ro.observe(track);
    }
  }

  syncControls();
})();
