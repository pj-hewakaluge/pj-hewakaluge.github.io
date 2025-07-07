'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

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
            A collection of my engineering projects, where I&apos;ve applied my technical skills to solve real-world problems. Each project demonstrates my approach to design, problem-solving, and implementation.
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