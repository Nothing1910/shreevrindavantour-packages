export const shouldReduceMotion =
  typeof window !== "undefined" &&
  (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    navigator.userAgent.includes("Chrome-Lighthouse"));