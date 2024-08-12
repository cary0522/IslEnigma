// RainEffect.js
import React from "react";

const RainEffect = ({ isRaining }) => {
  if (!isRaining) return null;
  return (
    <div className="rain-container">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="rain"
          style={{
            left: `${Math.random() * 100}vw`,
            opacity: Math.random() * 0.4 + 0.1,
            animationDuration: `${Math.random() * 0.5 + 0.5}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;
