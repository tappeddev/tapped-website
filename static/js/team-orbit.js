(function () {
  "use strict";

  var orbit = document.querySelector("[data-team-orbit]");
  if (!orbit) {
    return;
  }

  /* Pointer parallax: members drift slightly with the mouse, by depth. */

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  if (reduceMotion.matches || !finePointer.matches) {
    return;
  }

  var MAX_SHIFT = 6;
  var EASE = 0.08;

  var layers = Array.prototype.slice
    .call(orbit.querySelectorAll(".team-orbit__member"))
    .map(function (el) {
      return {
        el: el.querySelector("[data-parallax]"),
        depth: parseFloat(el.dataset.depth) || 1,
      };
    })
    .filter(function (layer) {
      return layer.el;
    });

  var targetX = 0;
  var targetY = 0;
  var currentX = 0;
  var currentY = 0;
  var frame = null;

  function tick() {
    currentX += (targetX - currentX) * EASE;
    currentY += (targetY - currentY) * EASE;

    layers.forEach(function (layer) {
      layer.el.style.transform =
        "translate3d(" +
        (currentX * layer.depth).toFixed(2) + "px," +
        (currentY * layer.depth).toFixed(2) + "px,0)";
    });

    if (
      Math.abs(targetX - currentX) > 0.1 ||
      Math.abs(targetY - currentY) > 0.1
    ) {
      frame = requestAnimationFrame(tick);
    } else {
      frame = null;
    }
  }

  function schedule() {
    if (frame === null) {
      frame = requestAnimationFrame(tick);
    }
  }

  orbit.addEventListener("mousemove", function (event) {
    var rect = orbit.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2 * MAX_SHIFT;
    targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2 * MAX_SHIFT;
    schedule();
  });

  orbit.addEventListener("mouseleave", function () {
    targetX = 0;
    targetY = 0;
    schedule();
  });
})();
