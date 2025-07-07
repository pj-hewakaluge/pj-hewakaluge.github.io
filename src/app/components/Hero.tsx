'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-5xl w-full z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[#ff4500]">Hello, I&apos;m</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ff4500]">
                Pankaja Hewakaluge
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-xl md:text-2xl text-gray-300">Mechanical Engineering Student</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-8 max-w-2xl"
            >
              <p className="text-base md:text-lg text-gray-400">
                I&apos;m a mechanical engineering student at McGill University with a passion for innovative design, composite materials, and advanced manufacturing. My expertise spans from CAD modeling to experimental testing and programming for data analysis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mb-8 flex flex-wrap gap-2 md:gap-4"
            >
              <a href="tel:4389794432" className="text-gray-300 hover:text-white transition-colors">
                438-979-4432
              </a>
              <span className="text-gray-500">|</span>
              <a href="mailto:pankaja.hewakaluge@mail.mcgill.ca" className="text-gray-300 hover:text-white transition-colors">
                pankaja.hewakaluge@mail.mcgill.ca
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-6 flex flex-wrap gap-4"
            >
              <Link 
                href="#experience"
                className="px-6 py-3 bg-[#ff4500] hover:bg-[#cc3700] text-white font-medium rounded-md transition-colors duration-300 flex items-center gap-2"
              >
                View Experience
              </Link>

              <Link 
                href="#projects"
                className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-[#ff4500] font-medium rounded-md transition-colors duration-300"
              >
                My Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-8 flex items-center gap-6"
            >
              <a 
                href="https://www.linkedin.com/in/pankaja-hewakaluge/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff4500] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ff4500] transition-colors duration-300"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
              </a>
              <a 
                href="mailto:pankaja.hewakaluge@mail.mcgill.ca"
                className="text-gray-400 hover:text-[#ff4500] transition-colors duration-300"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
              </a>
            </motion.div>
          </div>

          {/* Headshot in slanted block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden md:block"
          >
            <div className="w-64 h-80 bg-white transform -rotate-6 rounded-lg shadow-xl overflow-hidden">
              <div className="w-full h-full transform rotate-6 overflow-hidden relative">
                
                <Image 
                  src="/images/headshot.jpg"
                  alt="Pankaja Hewakaluge"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <Link href="#education" aria-label="Scroll down">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L18 13M12 19L6 13" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 