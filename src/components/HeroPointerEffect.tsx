"use client";

import { useEffect, useRef } from "react";

export function HeroPointerEffect() {
  const effectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const effect = effectRef.current;
    const hero = effect?.parentElement;
    const finePointer = window.matchMedia("(any-pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!effect || !hero || !finePointer.matches || reducedMotion.matches) {
      return;
    }

    const effectElement = effect;
    const heroElement = hero;
    let animationFrame = 0;

    function handlePointerMove(event: PointerEvent) {
      const bounds = heroElement.getBoundingClientRect();
      const pointerX = Math.min(
        Math.max(event.clientX - bounds.left, 0),
        bounds.width,
      );
      const pointerY = Math.min(
        Math.max(event.clientY - bounds.top, 0),
        bounds.height,
      );

      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        effectElement.style.setProperty("--hero-pointer-x", `${pointerX}px`);
        effectElement.style.setProperty("--hero-pointer-y", `${pointerY}px`);
        effectElement.dataset.active = "true";
      });
    }

    function handlePointerLeave() {
      effectElement.dataset.active = "false";
    }

    heroElement.addEventListener("pointermove", handlePointerMove);
    heroElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      heroElement.removeEventListener("pointermove", handlePointerMove);
      heroElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={effectRef}
      aria-hidden="true"
      className="hero-pointer-effect pointer-events-none absolute inset-0 z-[1]"
    />
  );
}
