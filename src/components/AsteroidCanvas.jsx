import { useEffect, useRef } from 'react';

export default function AsteroidCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        // Start from random edges or full area on init
        if (initial) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        } else {
          // Respawn from a random edge
          const edge = Math.floor(Math.random() * 4);
          if (edge === 0) { this.x = Math.random() * canvas.width; this.y = -5; }
          else if (edge === 1) { this.x = canvas.width + 5; this.y = Math.random() * canvas.height; }
          else if (edge === 2) { this.x = Math.random() * canvas.width; this.y = canvas.height + 5; }
          else { this.x = -5; this.y = Math.random() * canvas.height; }
        }

        // Random size: most are tiny dots, some are slightly bigger
        this.size = Math.random() < 0.85
          ? Math.random() * 1.5 + 0.3     // tiny stars
          : Math.random() * 3 + 1.5;      // asteroid

        // Speed — faster for big ones (asteroid feel)
        const baseSpeed = this.size > 2 ? 0.6 + Math.random() * 1.2 : 0.1 + Math.random() * 0.5;

        // Asteroid direction: mostly moving in one direction with slight variance
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * baseSpeed;
        this.vy = Math.sin(angle) * baseSpeed;

        this.opacity = Math.random() * 0.7 + 0.15;
        this.twinkleSpeed = 0.005 + Math.random() * 0.015;
        this.twinkleDir = Math.random() > 0.5 ? 1 : -1;

        // Tail / trail for asteroid-like particles
        this.hasTail = this.size > 2;
        this.tailLength = this.hasTail ? Math.random() * 12 + 8 : 0;
        this.history = [];
        this.maxHistory = this.hasTail ? 12 : 0;
      }

      update() {
        if (this.hasTail) {
          this.history.unshift({ x: this.x, y: this.y });
          if (this.history.length > this.maxHistory) this.history.pop();
        }

        this.x += this.vx;
        this.y += this.vy;

        // Twinkle
        this.opacity += this.twinkleDir * this.twinkleSpeed;
        if (this.opacity > 0.9 || this.opacity < 0.05) this.twinkleDir *= -1;

        // Wrap / reset when off screen
        const margin = this.tailLength + 20;
        if (
          this.x < -margin || this.x > canvas.width + margin ||
          this.y < -margin || this.y > canvas.height + margin
        ) {
          this.reset(false);
        }
      }

      draw() {
        // Draw tail first
        if (this.hasTail && this.history.length > 1) {
          for (let i = 0; i < this.history.length - 1; i++) {
            const t = 1 - i / this.history.length;
            ctx.beginPath();
            ctx.moveTo(this.history[i].x, this.history[i].y);
            ctx.lineTo(this.history[i + 1].x, this.history[i + 1].y);
            ctx.strokeStyle = `rgba(180, 170, 255, ${this.opacity * t * 0.6})`;
            ctx.lineWidth = this.size * t * 0.7;
            ctx.lineCap = 'round';
            ctx.stroke();
          }
        }

        // Draw the particle itself
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);

        if (this.hasTail) {
          // Asteroid glow
          const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 1.5);
          grad.addColorStop(0, `rgba(220, 210, 255, ${this.opacity})`);
          grad.addColorStop(0.5, `rgba(150, 130, 255, ${this.opacity * 0.6})`);
          grad.addColorStop(1, `rgba(100, 80, 200, 0)`);
          ctx.fillStyle = grad;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        }

        ctx.fill();
      }
    }

    const init = () => {
      resize();
      // ~120 small stars + ~15 asteroid-style particles
      particles = [];
      for (let i = 0; i < 130; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => { resize(); };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
