"use client";

import { useEffect, useRef } from "react";

export function MouseTrail() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const streakRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarsePointer) return;

    const dot = dotRef.current;
    const glow = glowRef.current;
    const streak = streakRef.current;
    if (!dot || !glow || !streak) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let glowX = targetX;
    let glowY = targetY;
    let prevX = targetX;
    let prevY = targetY;
    let rafId = 0;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const hideTrail = () => {
      dot.style.opacity = "0";
      glow.style.opacity = "0";
      streak.style.opacity = "0";
    };

    const showTrail = () => {
      dot.style.opacity = "1";
      glow.style.opacity = "1";
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      showTrail();

      // Dot follows the cursor exactly.
      dot.style.transform = `translate3d(${targetX - 3}px, ${targetY - 3}px, 0)`;

      // Directional streak based on pointer velocity.
      const dx = targetX - prevX;
      const dy = targetY - prevY;
      const speed = Math.min(Math.hypot(dx, dy), 42);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const stretch = 18 + speed * 1.6;
      const opacity = Math.min(0.28 + speed / 180, 0.6);

      streak.style.opacity = `${opacity}`;
      streak.style.width = `${stretch}px`;
      streak.style.transform = `translate3d(${targetX - stretch / 2}px, ${targetY - 1}px, 0) rotate(${angle}deg)`;

      prevX = targetX;
      prevY = targetY;

      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        streak.style.opacity = "0";
      }, 60);
    };

    const onLeave = () => hideTrail();
    const onEnter = () => showTrail();

    const animate = () => {
      // Slight lag on glow for a floating effect.
      glowX += (targetX - glowX) * 0.18;
      glowY += (targetY - glowY) * 0.18;
      glow.style.transform = `translate3d(${glowX - 18}px, ${glowY - 18}px, 0)`;
      rafId = window.requestAnimationFrame(animate);
    };

    hideTrail();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.cancelAnimationFrame(rafId);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      <div
        ref={glowRef}
        className="absolute rounded-full"
        style={{
          width: 36,
          height: 36,
          background: "radial-gradient(circle, rgba(232, 240, 255, 0.32) 0%, rgba(232, 240, 255, 0) 72%)",
          filter: "blur(0.4px)",
          opacity: 0,
          transition: "opacity 180ms ease-out",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={streakRef}
        className="absolute rounded-full"
        style={{
          height: 2,
          background: "linear-gradient(90deg, rgba(232, 240, 255, 0), rgba(232, 240, 255, 0.75), rgba(232, 240, 255, 0))",
          transformOrigin: "center",
          opacity: 0,
          transition: "opacity 120ms ease-out, width 120ms ease-out",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={dotRef}
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          background: "rgba(232, 240, 255, 0.95)",
          boxShadow: "0 0 10px rgba(232, 240, 255, 0.45)",
          opacity: 0,
          transition: "opacity 150ms ease-out",
        }}
      />
    </div>
  );
}

