import { useEffect, useRef } from "react";

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { x: 0.2, y: 0.2, r: 400, color: "rgba(124, 58, 237, 0.35)", speed: 0.0003 },
      { x: 0.8, y: 0.15, r: 350, color: "rgba(6, 182, 212, 0.3)", speed: 0.0004 },
      { x: 0.5, y: 0.6, r: 500, color: "rgba(79, 70, 229, 0.25)", speed: 0.0002 },
      { x: 0.1, y: 0.8, r: 300, color: "rgba(16, 185, 129, 0.2)", speed: 0.0005 },
      { x: 0.9, y: 0.7, r: 380, color: "rgba(236, 72, 153, 0.2)", speed: 0.00035 },
    ];

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep dark background
      ctx.fillStyle = "#04040f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb, i) => {
        const ox = (orb.x + Math.sin(t * orb.speed * 1.3 + i * 1.2) * 0.12) * canvas.width;
        const oy = (orb.y + Math.cos(t * orb.speed + i * 0.8) * 0.1) * canvas.height;

        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(ox, oy, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: "none" }}
    />
  );
}
