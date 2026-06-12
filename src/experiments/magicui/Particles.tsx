import { useEffect, useRef, useState, type ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/utils';

interface Circle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
}

interface ParticlesProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): number[] {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const properHex = hex.replace(shorthandRegex, (_m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(properHex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
}

export function Particles({
  className = '',
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  color = '#ffffff',
  vx = 0,
  vy = 0,
  ...props
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
  const rafID = useRef<number | null>(null);
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (isInit) return;
    const init = () => {
      if (canvasRef.current && canvasContainerRef.current) {
        context.current = canvasRef.current.getContext('2d');
      }
      if (context.current) {
        const rect = canvasContainerRef.current!.getBoundingClientRect();
        canvasSize.current = { w: rect.width, h: rect.height };
        canvasRef.current!.width = canvasSize.current.w * dpr;
        canvasRef.current!.height = canvasSize.current.h * dpr;
        canvasRef.current!.style.width = `${canvasSize.current.w}px`;
        canvasRef.current!.style.height = `${canvasSize.current.h}px`;
        context.current.scale(dpr, dpr);
        circles.current = [];
        for (let i = 0; i < quantity; i++) {
          const circle = circleParams();
          drawCircle(circle);
        }
        setIsInit(true);
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInit, quantity]);

  const circleParams = (): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const pSize = Math.floor(Math.random() * 2) + size;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.1;
    const dy = (Math.random() - 0.5) * 0.1;
    return {
      x, y,
      translateX: 0, translateY: 0,
      size: pSize, alpha, targetAlpha,
      dx, dy,
      magnetism: 0.1 + Math.random() * 4,
    };
  };

  const rgb = hexToRgb(color);

  const drawCircle = (circle: Circle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(${rgb.join(', ')}, ${alpha})`;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!update) {
        circles.current.push(circle);
      }
    }
  };

  const animate = () => {
    context.current!.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    circles.current.forEach((circle) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = Math.min(...edge);
      const remapClosestEdge = closestEdge / 20;
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }
      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;
      drawCircle(circle, true);
      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(circles.current.indexOf(circle), 1);
        const newCircle = circleParams();
        drawCircle(newCircle);
      }
    });
    rafID.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!isInit) return;
    animate();
    return () => {
      if (rafID.current) window.cancelAnimationFrame(rafID.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInit]);

  const onMouseMove = (e: MouseEvent) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={canvasContainerRef}
      className={cn('pointer-events-none', className)}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
