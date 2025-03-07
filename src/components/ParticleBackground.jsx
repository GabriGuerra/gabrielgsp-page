import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ["#ffffff", "#b0bec5", "#90a4ae", "#78909c", "#607d8b"];

    class Particle {
      constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = Math.random() * 0.5 + 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${parseInt(this.color.slice(1, 3), 16)}, ${parseInt(this.color.slice(3, 5), 16)}, ${parseInt(this.color.slice(5, 7), 16)}, ${this.alpha})`;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
        if (this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const velocity = { x: (Math.random() - 0.5) * 1.5, y: (Math.random() - 0.5) * 1.5 };
        particles.push(new Particle(x, y, radius, color, velocity));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Use clearRect instead of fillRect to avoid darkening the screen
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
    };

    initParticles();
    animate();

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 -z-10 bg-transparent" />;
};

export default ParticleBackground;
