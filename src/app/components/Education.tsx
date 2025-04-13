'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 px-4 min-h-screen flex items-center"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient inline-block">
              Education
            </h2>
            <div className="w-20 h-1 bg-[#ff4500] rounded-full mb-10"></div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-[#1e1e1e] rounded-lg p-6 md:p-8 shadow-lg border-l-4 border-[#ff4500] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff4500]/20 to-transparent rounded-bl-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">McGill University</h3>
                <span className="text-[#ff4500] font-medium">Sep. 2022 – Present</span>
              </div>

              <h4 className="text-lg text-gray-300 mb-4">Bachelor of Engineering in Mechanical Engineering</h4>
              <p className="text-gray-300 mb-2">Montreal, Quebec</p>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
                <li className="pl-2">GPA 3.9/4.0</li>
                <li className="pl-2">James McGill Scholarship, Rio Tinto-Evans award</li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-700 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-[#ff4500]/20 text-[#ff7e47] rounded-full text-sm">CAD Design</span>
                <span className="px-3 py-1 bg-[#ff4500]/20 text-[#ff7e47] rounded-full text-sm">Material Science</span>
                <span className="px-3 py-1 bg-[#ff4500]/20 text-[#ff7e47] rounded-full text-sm">Fluid Mechanics</span>
                <span className="px-3 py-1 bg-[#ff4500]/20 text-[#ff7e47] rounded-full text-sm">Thermodynamics</span>
                <span className="px-3 py-1 bg-[#ff4500]/20 text-[#ff7e47] rounded-full text-sm">Programming</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff4500] to-[#ff7e47] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mt-12">
            <Link href="#projects" className="text-gradient font-medium text-lg cursor-pointer flex items-center gap-2 group">
              <span>View Academic Projects</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 