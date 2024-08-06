import React, { useEffect, useRef } from "react";
// import "./FerrisWheel.css";

const FerrisWheel = () => {
  const wheelRef = useRef(null);

  useEffect(() => {
    if (wheelRef.current) {
      const wheel = wheelRef.current;
      const spokes = wheel.querySelector("#spokes");
      const cabins = wheel.querySelector("#cabins");
      const cabinCount = 14;
      const radius = 98;

      for (let i = 0; i < cabinCount; i++) {
        const angle = (i / cabinCount) * 2 * Math.PI;
        const x = 100 + radius * Math.cos(angle);
        const y = 100 + radius * Math.sin(angle);

        spokes.innerHTML += `<line class="spoke" x1="100" y1="100" x2="${x}" y2="${y}" stroke="url(#wheelGradient)"/>`;
        cabins.innerHTML += `<circle class="cabin" cx="${x}" cy="${y}" r="8" fill="url(#wheelGradient)" stroke="url(#wheelGradient)"/>`;
      }

      const animate = () => {
        const rotation = performance.now() / 120;
        wheel
          .querySelector("#wheel-structure")
          .setAttribute(
            "transform",
            `translate(0, 30) rotate(${rotation}, 100, 100)`
          );
        cabins.setAttribute(
          "transform",
          `translate(0, 30) rotate(${-rotation}, 100, 100)`
        );
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, []);

  return (
    <svg ref={wheelRef} className="ferris-wheel" viewBox="0 0 200 300">
      <defs>
        <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            stopColor="rgba(37, 98, 130, 0.5)"
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor="rgba(102, 82, 133, 0.5)"
            stopOpacity="1"
          />
        </linearGradient>
      </defs>
      <g id="wheel-structure" transform="translate(0, 30)">
        <circle
          className="wheel"
          cx="100"
          cy="100"
          r="98"
          stroke="url(#wheelGradient)"
        />
        <circle
          className="wheel"
          cx="100"
          cy="100"
          r="90"
          stroke="url(#wheelGradient)"
        />
        <circle
          className="wheel"
          cx="100"
          cy="100"
          r="80"
          stroke="url(#wheelGradient)"
        />
      </g>
      <g id="spokes" transform="translate(0, 30)"></g>
      <g id="cabins" transform="translate(0, 30)"></g>
      <path
        className="support"
        d="M 50 260 C 70 230, 80 180, 100 130 C 120 180, 130 230, 150 260"
        stroke="url(#wheelGradient)"
      />
      <path
        className="base"
        d="M 40 260 Q 100 250 160 260 L 160 270 L 40 270 Z"
        fill="url(#wheelGradient)"
      />
    </svg>
  );
};

export default FerrisWheel;
