import { useEffect, useRef } from "react";

export default function GridBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let offset = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const horizon = height * 0.42;
      const spacing = 58;
      const depth = 26;

      ctx.lineWidth = 1;

      ctx.strokeStyle = "rgba(53, 67, 79, 0.55)";
      ctx.beginPath();
      for (let i = -14; i <= 14; i++) {
        const x = width / 2 + i * spacing;
        ctx.moveTo(x, height);
        ctx.lineTo(width / 2 + i * spacing * 0.16, horizon);
      }
      ctx.stroke();

      for (let row = 0; row < depth; row++) {
        const t = (row + offset) / depth;
        const eased = t * t;
        const y = horizon + eased * (height - horizon);
        if (y > height) continue;

        const alpha = Math.max(0, 0.42 - eased * 0.34);
        ctx.strokeStyle = `rgba(53, 67, 79, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const glow = ctx.createRadialGradient(
        width * 0.5,
        horizon,
        0,
        width * 0.5,
        horizon,
        width * 0.55
      );
      glow.addColorStop(0, "rgba(233, 161, 59, 0.07)");
      glow.addColorStop(1, "rgba(233, 161, 59, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const tick = () => {
      offset = (offset + 0.012) % 1;
      draw();
      raf = requestAnimationFrame(tick);
    };

    resize();
    draw();

    if (!reduced) raf = requestAnimationFrame(tick);

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="h-full w-full opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}
