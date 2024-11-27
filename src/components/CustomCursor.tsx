import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = Date.now();

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add new particles with varying sizes
      if (Date.now() - lastTime > 50) { // Limit particle creation rate
        const newParticles = Array.from({ length: 2 }, () => ({
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() * 20 - 10),
          y: e.clientY + (Math.random() * 20 - 10),
          size: Math.random() * 6 + 4 // Particles of different sizes
        }));
        setParticles(prev => [...prev, ...newParticles]);
        lastTime = Date.now();
      }
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const cleanupParticles = () => {
      setParticles(prev => prev.filter(p => Date.now() - p.id < 500));
      animationFrameId = requestAnimationFrame(cleanupParticles);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateHoverState);
    animationFrameId = requestAnimationFrame(cleanupParticles);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateHoverState);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        className={`fire-cursor ${isHovering ? 'scale-150' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      >
        <div className="flame-core" />
        <div className="flame-outer" />
      </div>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fire-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </>
  );
}