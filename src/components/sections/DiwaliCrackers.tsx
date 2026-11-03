import { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

export function DiwaliCrackers() {
  const canvasHost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = canvasHost.current;
    if (!host) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const fireworks = new Fireworks(host, {
      autoresize: true,
      opacity: 0.85,
      acceleration: 1.015,
      friction: 0.985,
      gravity: 1.05,
      particles: 95,
      explosion: 8,
      flickering: 40,
      intensity: 16,
      traceLength: 5,
      traceSpeed: 3,
      lineStyle: 'round',
      hue: { min: 0, max: 360 },
      delay: { min: 50, max: 110 },
      rocketsPoint: { min: 12, max: 88 },
      lineWidth: {
        explosion: { min: 1, max: 4 },
        trace: { min: 1, max: 2.4 },
      },
      brightness: { min: 55, max: 90 },
      decay: { min: 0.008, max: 0.016 },
      mouse: { click: false, move: false, max: 1 },
    });

    fireworks.start();
    return () => fireworks.stop(true);
  }, []);

  return <div ref={canvasHost} className="diwali-crackers" aria-hidden />;
}
