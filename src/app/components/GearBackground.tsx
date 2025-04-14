'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const GearSVG = ({ className, fillColor, rotationSpeed, reverse = false, initialRotation = 0 }: { 
  className: string; 
  fillColor: string; 
  rotationSpeed: number;
  reverse?: boolean;
  initialRotation?: number;
}) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
    initial={{ rotate: initialRotation }}
    animate={{ rotate: reverse ? initialRotation - 360 : initialRotation + 360 }}
    transition={{ duration: rotationSpeed, repeat: Infinity, ease: "linear" }}
  >
    <path
      fill={fillColor}
      d="M55.45 2.97l.69 7.05c.08 1.03.83 1.88 1.84 2.1a37.4 37.4 0 0 1 8.6 3.58c.9.5 2.02.4 2.79-.28l5.31-4.66 5.36 5.36-4.66 5.31c-.67.77-.78 1.89-.28 2.8 1.56 2.7 2.81 5.59 3.58 8.59.22 1 1.07 1.76 2.1 1.85l7.05.68v7.58l-7.05.69c-1.03.09-1.88.84-2.1 1.85a37.4 37.4 0 0 1-3.58 8.58c-.5.91-.39 2.03.28 2.8l4.66 5.31-5.36 5.36-5.31-4.66c-.77-.67-1.89-.78-2.8-.28a37.4 37.4 0 0 1-8.58 3.58c-1.01.22-1.76 1.07-1.85 2.1l-.68 7.05h-7.58l-.69-7.05c-.09-1.03-.84-1.88-1.85-2.1a37.4 37.4 0 0 1-8.58-3.58c-.91-.5-2.03-.39-2.8.28l-5.31 4.66-5.36-5.36 4.66-5.31c.67-.77.78-1.89.28-2.8a37.4 37.4 0 0 1-3.58-8.58c-.22-1.01-1.07-1.76-2.1-1.85l-7.05-.69v-7.58l7.05-.68c1.03-.09 1.88-.84 2.1-1.85 .77-3 2.02-5.88 3.58-8.6 .5-.9.39-2.02-.28-2.79l-4.66-5.31 5.36-5.36 5.31 4.66c.77.67 1.89.78 2.8.28 2.71-1.56 5.59-2.81 8.58-3.58 1.01-.22 1.76-1.07 1.85-2.1l.69-7.05h7.58m2 16.43a33.06 33.06 0 0 0-11.57 0c-10.66 1.95-19.27 9.31-22.86 19.3a33.06 33.06 0 0 0 0 11.57c1.95 10.66 9.31 19.27 19.3 22.86a33.06 33.06 0 0 0 11.57 0c10.66-1.95 19.27-9.31 22.86-19.3a33.06 33.06 0 0 0 0-11.57c-1.95-10.66-9.31-19.27-19.3-22.86M53.45 0h-11.7l-.82 8.36a41.66 41.66 0 0 0-6.86 2.85l-6.3-5.52-8.27 8.27 5.52 6.3a41.66 41.66 0 0 0-2.85 6.86l-8.36.82v11.7l8.36.82a41.66 41.66 0 0 0 2.85 6.86l-5.52 6.3 8.27 8.27 6.3-5.52a41.66 41.66 0 0 0 6.86 2.85l.82 8.36h11.7l.82-8.36a41.66 41.66 0 0 0 6.86-2.85l6.3 5.52 8.27-8.27-5.52-6.3a41.66 41.66 0 0 0 2.85-6.86l8.36-.82v-11.7l-8.36-.82a41.66 41.66 0 0 0-2.85-6.86l5.52-6.3-8.27-8.27-6.3 5.52a41.66 41.66 0 0 0-6.86-2.85l-.82-8.36"
    />
  </motion.svg>
);

const GearBackground = () => {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Fixed initial rotations for server rendering consistency
  const [rotations, setRotations] = useState({
    gear1: 0,
    gear2: 0,
    gear3: 0,
    gear4: 0,
    gear5: 0
  });
  
  // Initialize random rotations on client-side only
  useEffect(() => {
    setRotations({
      gear1: Math.random() * 360,
      gear2: Math.random() * 360,
      gear3: Math.random() * 360,
      gear4: Math.random() * 360,
      gear5: Math.random() * 360
    });
  }, []);
  
  // Create springy animations for mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to window center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Normalize to a value between -1 and 1
      const normalizedX = (e.clientX - centerX) / centerX;
      const normalizedY = (e.clientY - centerY) / centerY;
      
      mouseX.set(normalizedX * 15); // Amplify the effect
      mouseY.set(normalizedY * 15); // Amplify the effect
      
      setMousePosition({ x: normalizedX, y: normalizedY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Transform scroll progress into different speeds for each gear
  const rotateGear1 = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const rotateGear2 = useTransform(scrollYProgress, [0, 1], [0, -540]);
  const rotateGear3 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateGear4 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const rotateGear5 = useTransform(scrollYProgress, [0, 1], [0, 270]);
  
  // Parallax effect for gears based on scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  // Opacity effect for fade-in/out
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 0.5, 0.5, 0.3]
  );

  // Scale effect based on scroll
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.2, 1]);
  
  // Mouse-based transforms for each gear
  const mouseMoveX1 = useTransform(smoothMouseX, value => value * -5);
  const mouseMoveY1 = useTransform(smoothMouseY, value => value * -5);
  
  const mouseMoveX2 = useTransform(smoothMouseX, value => value * 3);
  const mouseMoveY2 = useTransform(smoothMouseY, value => value * 3);
  
  const mouseMoveX3 = useTransform(smoothMouseX, value => value * -2);
  const mouseMoveY3 = useTransform(smoothMouseY, value => value * -2);
  
  const mouseMoveX4 = useTransform(smoothMouseX, value => value * 4);
  const mouseMoveY4 = useTransform(smoothMouseY, value => value * 4);
  
  const mouseMoveX5 = useTransform(smoothMouseX, value => value * -3);
  const mouseMoveY5 = useTransform(smoothMouseY, value => value * -3);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0"
        style={{ 
          opacity,
          x: smoothMouseX,
          y: smoothMouseY
        }}
      >
        {/* Large gear in top-right */}
        <motion.div
          className="absolute -right-24 -top-24"
          style={{ 
            rotate: rotateGear1, 
            y: y1,
            scale: scale1,
            x: mouseMoveX1,
          }}
        >
          <GearSVG 
            className="w-64 h-64" 
            fillColor="rgba(255, 69, 0, 0.15)" 
            rotationSpeed={60}
            initialRotation={rotations.gear1}
          />
        </motion.div>

        {/* Medium gear in bottom-left */}
        <motion.div
          className="absolute -left-16 -bottom-16"
          style={{ 
            rotate: rotateGear2, 
            y: y2,
            scale: scale2,
            x: mouseMoveX2,
          }}
        >
          <GearSVG 
            className="w-48 h-48" 
            fillColor="rgba(255, 69, 0, 0.12)" 
            rotationSpeed={45}
            reverse={true}
            initialRotation={rotations.gear2}
          />
        </motion.div>

        {/* Small gear in middle-right */}
        <motion.div
          className="absolute right-32 top-1/3"
          style={{ 
            rotate: rotateGear3, 
            y: y3,
            x: mouseMoveX3,
          }}
        >
          <GearSVG 
            className="w-32 h-32" 
            fillColor="rgba(255, 69, 0, 0.14)" 
            rotationSpeed={30}
            initialRotation={rotations.gear3}
          />
        </motion.div>

        {/* Extra small gear in middle-left */}
        <motion.div
          className="absolute left-1/4 top-1/2"
          style={{ 
            rotate: rotateGear4, 
            y: y4,
            x: mouseMoveX4,
          }}
        >
          <GearSVG 
            className="w-24 h-24" 
            fillColor="rgba(255, 69, 0, 0.1)" 
            rotationSpeed={50}
            reverse={true}
            initialRotation={rotations.gear4}
          />
        </motion.div>
        
        {/* New small gear in bottom-right */}
        <motion.div
          className="absolute right-1/4 bottom-1/4"
          style={{ 
            rotate: rotateGear5, 
            y: y5,
            x: mouseMoveX5,
          }}
        >
          <GearSVG 
            className="w-36 h-36" 
            fillColor="rgba(255, 69, 0, 0.13)" 
            rotationSpeed={40}
            initialRotation={rotations.gear5}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GearBackground; 