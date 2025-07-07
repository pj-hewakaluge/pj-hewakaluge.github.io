'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faCode, faRobot, faMicrochip, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Project {
  title: string;
  description: string;
  image?: string;
  icon: any;
  links?: {
    github?: string;
    youtube?: string;
    demo?: string;
  };
}

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Pipe Inspection Robot",
      description: "An autonomous robot designed to inspect and navigate through pipes, equipped with sensors and a camera system.",
      image: "/images/projects/pipe-inspection-robot.jpg",
      icon: faRobot,
      links: {
        github: "https://github.com/yourusername/pipe-inspection-robot",
        youtube: "https://youtube.com/your-video-link"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const ProjectCard = ({ project, isActive, onClick }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
      <motion.div
        className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${
          isActive ? 'ring-2 ring-[#ff4500]' : 'hover:ring-1 hover:ring-[#ff4500]/50'
        }`}
        onClick={onClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative aspect-video overflow-hidden">
          {project.image && (
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition-transform duration-500 ${
                  isHovered ? 'scale-110' : 'scale-100'
                }`}
                onLoadingComplete={() => setIsImageLoaded(true)}
              />
              {!isImageLoaded && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse" />
              )}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-300 text-sm mt-1">{project.description}</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-2">
          <FontAwesomeIcon 
            icon={project.icon} 
            className="text-[#ff4500] text-xl" 
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 bg-[#0a0a0a]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient inline-block">
            Projects
          </h2>
          <div className="w-20 h-1 bg-[#ff4500] rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-3xl">
            A collection of my engineering projects, where I've applied my technical skills to solve real-world problems. Each project demonstrates my approach to design, problem-solving, and implementation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-lg bg-[#1a1a1a] shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] relative overflow-hidden">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#ff4500] mb-4">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 