"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">

      {/* Animated gradient background */}
      <div
        className="
          absolute inset-0 
          opacity-60 
          animate-gradient
          bg-gradient-to-r 
          from-black via-blue-900 to-blue-600 
          blur-3xl
        "
      />

      {/* Particle layer */}
      <Particles
        id="tsparticles"
        init={particlesInit}
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
