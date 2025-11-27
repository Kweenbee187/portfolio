"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function Background() {
  const [init, setInit] = useState(false);

  // initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // lightweight engine — no loadFull needed
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">

      {/* BLACK + BLUE Gradient */}
      <div
        className="absolute inset-0 opacity-60 mix-blend-screen animate-gradient
        bg-gradient-to-r from-black via-blue-900 to-blue-600 blur-3xl"
      />

      {/* Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: false,
            particles: {
              number: { value: 40 },
              size: { value: 2 },
              opacity: { value: 0.1 },
              move: { enable: true, speed: 0.5 },
              links: { enable: true, distance: 130, opacity: 0.2 },
            }
          }}
          className="absolute w-full h-full"
        />
      )}

      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 12s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
