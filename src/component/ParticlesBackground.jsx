
import React from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadStarsPreset(main); // Stars preset লোড করানো
  };

  return (
    <Particles
      id="tsparticles"
      // style={{ position: "absolute", zIndex: -1 }}
      init={particlesInit}
      options={{
        preset: "stars", // Preset নামটি ঠিকভাবে লিখতে হবে
        background: {
          color: {
            value: "#1a1a2e", // dark blue #1a1a2e #adb5ef #f19e9a
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1, // particles will go behind all content
        },
      }}
    />
  );
};

export default ParticlesBackground;
