import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

const VantaBirds = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000000,
          color1: 0xffcc00,
          color2: 0xffffff,
          birdSize: 1.5,
          wingSpan: 20.0,
          speedLimit: 4.0,
          separation: 50.0,
          alignment: 20.0,
          cohesion: 20.0,
          quantity: 4,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="w-full h-screen z-0"></div>;
};

export default VantaBirds;
