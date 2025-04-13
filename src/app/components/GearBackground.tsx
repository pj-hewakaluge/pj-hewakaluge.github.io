'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GearSVG = ({ className, fillColor, rotationSpeed, reverse = false }: { 
  className: string; 
  fillColor: string; 
  rotationSpeed: number;
  reverse?: boolean;
}) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
    initial={{ rotate: 0 }}
    animate={{ rotate: reverse ? -360 : 360 }}
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
  
  // Transform scroll progress into different speeds for each gear
  const rotateGear1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateGear2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotateGear3 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  
  // Parallax effect for gears
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  // Opacity effect for fade-in/out
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.2, 0.4, 0.4, 0.2]
  );

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        {/* Large gear in top-right */}
        <motion.div
          className="absolute -right-24 -top-24"
          style={{ rotate: rotateGear1, y: y1 }}
        >
          <GearSVG 
            className="w-64 h-64" 
            fillColor="rgba(255, 69, 0, 0.15)" 
            rotationSpeed={20}
          />
        </motion.div>

        {/* Medium gear in bottom-left */}
        <motion.div
          className="absolute -left-16 -bottom-16"
          style={{ rotate: rotateGear2, y: y2 }}
        >
          <GearSVG 
            className="w-48 h-48" 
            fillColor="rgba(255, 69, 0, 0.1)" 
            rotationSpeed={25}
            reverse={true}
          />
        </motion.div>

        {/* Small gear in middle-right */}
        <motion.div
          className="absolute right-32 top-1/3"
          style={{ rotate: rotateGear3, y: y3 }}
        >
          <GearSVG 
            className="w-32 h-32" 
            fillColor="rgba(255, 69, 0, 0.12)" 
            rotationSpeed={15}
          />
        </motion.div>

        {/* Extra small gear in middle-left */}
        <motion.div
          className="absolute left-1/4 top-1/2"
          style={{ rotate: rotateGear1, y: y1 }}
        >
          <GearSVG 
            className="w-24 h-24" 
            fillColor="rgba(255, 69, 0, 0.08)" 
            rotationSpeed={30}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GearBackground; 