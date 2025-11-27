"use client";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-bg"></div>
    </div>
  );
}
