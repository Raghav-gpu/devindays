export function runWhenIdle(callback: () => void, timeout = 3000) {
  if (typeof window === "undefined") {
    return;
  }

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(callback, { timeout });
    return;
  }

  setTimeout(callback, 1);
}

export function runAfterInteraction(callback: () => void) {
  if (typeof window === "undefined") {
    return;
  }

  const events = ["pointerdown", "keydown", "touchstart"] as const;

  const run = () => {
    events.forEach((event) => {
      window.removeEventListener(event, run);
    });
    callback();
  };

  events.forEach((event) => {
    window.addEventListener(event, run, { once: true, passive: true });
  });

  runWhenIdle(callback, 5000);
}
