(function () {
  const root = document.querySelector("[data-testimonial-carousel]");
  if (!root) {
    return;
  }

  const viewport = root.querySelector("[data-testimonial-viewport]");
  const track = root.querySelector(".home-testimonials__track");
  const items = root.querySelectorAll(".home-testimonials__item");
  const prev = root.querySelector("[data-testimonial-prev]");
  const next = root.querySelector("[data-testimonial-next]");
  const pager = root.querySelector("[data-testimonial-pager]");
  if (!viewport || !track || !items.length || !prev || !next || !pager) {
    return;
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pageLabel = root.getAttribute("data-page-label") || "Page";
  let page = 0;
  let programmatic = false;
  let progTimer = null;
  let dragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let dragMoved = false;

  function visibleCount() {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      return Math.min(3, items.length);
    }
    if (window.matchMedia("(min-width: 768px)").matches) {
      return Math.min(2, items.length);
    }
    return 1;
  }

  function pageCount() {
    return Math.max(1, Math.ceil(items.length / visibleCount()));
  }

  function firstIndexForPage(p) {
    return Math.min(p * visibleCount(), items.length - 1);
  }

  function offsetForIndex(index) {
    const item = items[index];
    if (!item) {
      return 0;
    }
    return item.getBoundingClientRect().left - items[0].getBoundingClientRect().left;
  }

  function offsetForPage(p) {
    const max = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    return Math.min(max, offsetForIndex(firstIndexForPage(p)));
  }

  function endProgrammatic() {
    programmatic = false;
    window.clearTimeout(progTimer);
  }

  function scrollToPage(nextPage, smooth) {
    const pages = pageCount();
    page = Math.max(0, Math.min(pages - 1, nextPage));
    programmatic = true;
    window.clearTimeout(progTimer);
    viewport.scrollTo({
      left: offsetForPage(page),
      behavior: smooth && !reduce.matches ? "smooth" : "auto",
    });
    progTimer = window.setTimeout(endProgrammatic, 800);
    syncControls();
  }

  function pageFromScroll() {
    const pages = pageCount();
    const x = viewport.scrollLeft;
    let nearest = 0;
    let nearestDist = Infinity;
    for (let i = 0; i < pages; i += 1) {
      const dist = Math.abs(x - offsetForPage(i));
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = i;
      }
    }
    return nearest;
  }

  function updateSnap() {
    const count = visibleCount();
    for (let i = 0; i < items.length; i += 1) {
      items[i].style.scrollSnapAlign = i % count === 0 ? "start" : "none";
    }
  }

  function syncControls() {
    const pages = pageCount();
    prev.disabled = page <= 0;
    next.disabled = page >= pages - 1;

    const dots = pager.querySelectorAll("button");
    for (let i = 0; i < dots.length; i += 1) {
      const active = i === page;
      dots[i].classList.toggle("is-active", active);
      dots[i].setAttribute("aria-selected", String(active));
      dots[i].tabIndex = active ? 0 : -1;
    }
  }

  function buildPager() {
    const pages = pageCount();
    pager.innerHTML = "";
    for (let i = 0; i < pages; i += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", pageLabel + " " + (i + 1));
      dot.addEventListener("click", function () {
        scrollToPage(i, true);
      });
      pager.appendChild(dot);
    }
    if (page > pages - 1) {
      page = pages - 1;
    }
    updateSnap();
    syncControls();
  }

  prev.addEventListener("click", function () {
    scrollToPage(page - 1, true);
  });

  next.addEventListener("click", function () {
    scrollToPage(page + 1, true);
  });

  viewport.addEventListener("scrollend", function () {
    endProgrammatic();
    page = pageFromScroll();
    syncControls();
  });

  viewport.addEventListener(
    "scroll",
    function () {
      if (programmatic) {
        return;
      }
      page = pageFromScroll();
      syncControls();
    },
    { passive: true }
  );

  viewport.addEventListener("pointerdown", function (event) {
    if (event.pointerType === "touch" || event.button !== 0) {
      return;
    }
    dragging = true;
    dragMoved = false;
    dragStartX = event.clientX;
    dragStartScroll = viewport.scrollLeft;
    viewport.classList.add("is-dragging");
    try {
      viewport.setPointerCapture(event.pointerId);
    } catch (err) {
      /* ignore */
    }
  });

  viewport.addEventListener("pointermove", function (event) {
    if (!dragging) {
      return;
    }
    const dx = event.clientX - dragStartX;
    if (Math.abs(dx) > 6) {
      dragMoved = true;
    }
    programmatic = true;
    viewport.scrollLeft = dragStartScroll - dx;
  });

  function endDrag() {
    if (!dragging) {
      return;
    }
    dragging = false;
    viewport.classList.remove("is-dragging");
    scrollToPage(pageFromScroll(), true);
  }

  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);

  viewport.addEventListener(
    "click",
    function (event) {
      if (!dragMoved) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      dragMoved = false;
    },
    true
  );

  window.addEventListener("resize", function () {
    buildPager();
    scrollToPage(page, false);
  });

  buildPager();
  scrollToPage(0, false);
})();
