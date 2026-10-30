(function () {
  const root = document.querySelector("[data-trust-quotes]");
  if (!root) {
    return;
  }

  const stage = root.querySelector("[data-trust-quotes-stage]");
  const items = Array.prototype.slice.call(root.querySelectorAll("[data-trust-quote]"));
  if (!stage || items.length < 2) {
    return;
  }

  const INTERVAL_MS = 4500;
  const SWIPE_MS = 700;
  let active = 0;
  let elapsed = 0;
  let last = performance.now();
  let hovering = false;
  let expanded = false;
  let offscreen = true;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function collapsedHeight(win) {
    const style = getComputedStyle(win);
    const lines = parseFloat(style.getPropertyValue("--trust-quote-lines")) || 5;
    return lines * parseFloat(style.lineHeight);
  }

  // Collapsed, the quote is shifted so its highlight sits on the window's
  // centre line. Expanded, the window grows to fit the whole quote.
  function layout(item, open) {
    const win = item.querySelector("[data-trust-quote-window]");
    const text = item.querySelector("[data-trust-quote-text]");
    const mark = text.querySelector(".trust-quotes__highlight");
    const windowHeight = collapsedHeight(win);
    let height = windowHeight;
    let offset;

    if (open) {
      height = Math.max(windowHeight, text.offsetHeight);
      offset = Math.max(0, (windowHeight - text.offsetHeight) / 2);
    } else {
      const textRect = text.getBoundingClientRect();
      const markRect = mark.getBoundingClientRect();
      offset = windowHeight / 2 - (markRect.top - textRect.top + markRect.height / 2);
    }

    win.style.height = height + "px";
    text.style.transform = "translateY(" + Math.round(offset) + "px)";
  }

  const link = root.querySelector(".trust-quotes__all");
  const band = root.closest(".trust-band");
  const label = band && band.querySelector(".trust-stats__item:last-child .trust-stats__label");

  // In the three-column layout the link ends where the stat label above it
  // ends. A transform keeps the shift out of layout, so it cannot count as a
  // layout shift.
  function alignLink() {
    if (!link || !label) {
      return;
    }
    link.style.transform = "";
    if (getComputedStyle(root).display !== "grid") {
      return;
    }
    const range = document.createRange();
    range.selectNodeContents(label);
    const shift = range.getBoundingClientRect().right - link.getBoundingClientRect().right;
    if (shift > 0) {
      link.style.transform = "translateX(" + Math.round(shift) + "px)";
    }
  }

  function layoutAll() {
    items.forEach(function (item, index) {
      layout(item, expanded && index === active);
    });
    alignLink();
  }

  function setExpanded(open) {
    if (expanded === open) {
      return;
    }
    expanded = open;
    root.classList.toggle("is-expanded", open);
    layout(items[active], open);
  }

  function syncItems() {
    items.forEach(function (item, index) {
      const hidden = index !== active;
      item.toggleAttribute("inert", hidden);
      if (hidden) {
        item.setAttribute("aria-hidden", "true");
      } else {
        item.removeAttribute("aria-hidden");
      }
    });
  }

  function next() {
    const leaving = items[active];
    active = (active + 1) % items.length;
    const entering = items[active];

    leaving.classList.remove("is-active");
    leaving.classList.add("is-leaving");
    entering.classList.add("is-active");
    syncItems();

    window.setTimeout(function () {
      leaving.classList.add("no-anim");
      leaving.classList.remove("is-leaving");
      void leaving.offsetHeight;
      leaving.classList.remove("no-anim");
    }, SWIPE_MS);
  }

  window.setInterval(function () {
    const now = performance.now();
    if (!(hovering || expanded || offscreen || document.hidden || reducedMotion.matches)) {
      elapsed += now - last;
    }
    last = now;
    if (elapsed >= INTERVAL_MS) {
      elapsed = 0;
      next();
    }
  }, 100);

  root.addEventListener("pointerenter", function (event) {
    if (event.pointerType !== "touch") {
      hovering = true;
    }
  });

  root.addEventListener("pointerleave", function (event) {
    if (event.pointerType !== "touch") {
      hovering = false;
    }
  });

  stage.addEventListener("pointerenter", function (event) {
    if (event.pointerType !== "touch") {
      setExpanded(true);
    }
  });

  stage.addEventListener("pointerleave", function (event) {
    if (event.pointerType !== "touch" && !stage.matches(":focus-visible")) {
      setExpanded(false);
    }
  });

  stage.addEventListener("pointerup", function (event) {
    if (event.pointerType === "touch") {
      setExpanded(!expanded);
    }
  });

  document.addEventListener("pointerdown", function (event) {
    if (event.pointerType === "touch" && expanded && !stage.contains(event.target)) {
      setExpanded(false);
    }
  });

  stage.addEventListener("focus", function () {
    if (stage.matches(":focus-visible")) {
      setExpanded(true);
    }
  });

  stage.addEventListener("blur", function () {
    if (!stage.matches(":hover")) {
      setExpanded(false);
    }
  });

  stage.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setExpanded(false);
    }
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      offscreen = !entries[0].isIntersecting;
    }).observe(root);
  } else {
    offscreen = false;
  }

  let resizeFrame = 0;
  window.addEventListener("resize", function () {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(layoutAll);
  });

  root.classList.add("is-ready");
  syncItems();
  layoutAll();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(layoutAll);
  }
})();
