'use client';
import { useRef, useEffect } from 'react';

export default function Starfield() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * width,
    }));

    const animate = () => {
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);

      for (let star of stars) {
        star.z -= 2;
        if (star.z <= 0) star.z = width;

        const sx = (star.x - width / 2) * (width / star.z) + width / 2;
        const sy = (star.y - height / 2) * (width / star.z) + height / 2;
        const r = width / star.z;

        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
    />
  );
}
