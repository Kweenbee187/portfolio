"use client";

import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      
      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 animated-bg"></div>

      {/* PARTICLES */}
      <Particles
        id="tsparticles"
        particlesLoaded={() => {}}
        init={particlesInit}  // ← Valid in Vercel when using loadSlim
        options={{
          fullScreen: false,
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { speed: 1 },
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
            },
          },
        }}
        className="absolute inset-0"
      />
    </div>
  );
}
