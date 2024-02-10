import React, { useState, useEffect, useMemo } from 'react';
import { GradientBackground } from './Gradient.styles';

function Gradient() {
  const [colorIndices, setColorIndices] = useState([0, 1, 2, 3]);
  const [step, setStep] = useState(0);

  const colors = useMemo(
    () => [
      [245,248,254],
      [226,229,229],
      [222,237,237],
      [233,222,236],
      [236,225,215],
      [215,236,229],
    ],
    []
  );

  const gradientSpeed = 0.002;

  useEffect(() => {
    const updateGradient = () => {
      let newStep = step + gradientSpeed;
      let newColorIndices = [...colorIndices];

      if (newStep >= 1) {
        newStep %= 1;
        newColorIndices[0] = newColorIndices[1];
        newColorIndices[2] = newColorIndices[3];

        newColorIndices[1] =
          (newColorIndices[1] +
            Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length;
        newColorIndices[3] =
          (newColorIndices[3] +
            Math.floor(1 + Math.random() * (colors.length - 1))) %
          colors.length;
      }

      setStep(newStep);
      setColorIndices(newColorIndices);
    };

    const interval = setInterval(updateGradient, 10);

    return () => clearInterval(interval);
  }, [step, colorIndices, colors]);

  const getGradientStyle = () => {
    const c0_0 = colors[colorIndices[0]];
    const c0_1 = colors[colorIndices[1]];
    const c1_0 = colors[colorIndices[2]];
    const c1_1 = colors[colorIndices[3]];

    const istep = 1 - step;
    const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    const color1 = `rgb(${r1},${g1},${b1})`;

    const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    const color2 = `rgb(${r2},${g2},${b2})`;

    return {
      background: `linear-gradient(to right, ${color1}, ${color2})`,
      width: '1440px',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1
    };
  };

  return (
    <GradientBackground style={getGradientStyle()} />
  );
}

export default Gradient;
