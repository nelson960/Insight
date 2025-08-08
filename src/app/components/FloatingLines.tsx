'use client';

import { useEffect, useRef } from 'react';

export default function FloatingLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Line particles
    class Line {
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
      angleSpeed: number;
      opacity: number;
      fadeDirection: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.length = Math.random() * 60 + 40;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.3 + 0.2;
        this.angleSpeed = (Math.random() - 0.5) * 0.008;
        this.opacity = Math.random() * 0.3 + 0.2;
        this.fadeDirection = Math.random() > 0.5 ? 0.001 : -0.001;
      }

      update() {
        // Float movement
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.angle += this.angleSpeed;

        // Fade in/out
        this.opacity += this.fadeDirection;
        if (this.opacity > 0.5 || this.opacity < 0.15) {
          this.fadeDirection *= -1;
        }

        // Wrap around screen
        if (this.x < -this.length) this.x = (canvas?.width || window.innerWidth) + this.length;
        if (this.x > (canvas?.width || window.innerWidth) + this.length) this.x = -this.length;
        if (this.y < -this.length) this.y = (canvas?.height || window.innerHeight) + this.length;
        if (this.y > (canvas?.height || window.innerHeight) + this.length) this.y = -this.length;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        // Draw line
        ctx.strokeStyle = `rgba(0, 0, 0, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.length, 0);
        ctx.stroke();
        
        // Draw small circle at end
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity * 0.7})`;
        ctx.beginPath();
        ctx.arc(this.length, 0, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Create lines
    const lines: Line[] = [];
    const lineCount = 40;
    for (let i = 0; i < lineCount; i++) {
      lines.push(new Line());
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach(line => {
        line.update();
        line.draw();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8, zIndex: 1 }}
    />
  );
}