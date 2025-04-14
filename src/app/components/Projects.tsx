'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: "Pipe Inspection Robot",
      period: "September 2023 – December 2023",
      skills: ["SolidWorks", "DFM", "DFA", "Mechanical Design"],
      description: [
        "Created 3D models of an inspection robot, ensuring practicality through DFM and DFA methods.",
        "Organized an iterative design process by collecting feedback and data analytics to enhance functionality, resulting in a 40% decrease in the total number of parts.",
        "Collaborated effectively in a team, contributing innovative ideas and design process insights."
      ],
      image: "/placeholder-project.jpg",
      links: [
        { icon: faGithub, url: "#", label: "GitHub" }
      ]
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
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-lg bg-[#1a1a1a] shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-64 md:h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#ff4500]/50 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Project Image</span>
                  </div>
                  {/* Placeholder instead of actual image since we don't have images yet */}
                  {/* <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> */}
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#ff4500] mb-4">{project.period}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-sm bg-[#ff4500]/20 text-[#ff7e47] rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {project.description.map((item, i) => (
                        <li 
                          key={i}
                          className="flex items-start text-gray-300"
                        >
                          <div className="min-w-5 mr-2 mt-1.5">
                            <div className="w-2 h-2 bg-[#ff4500] rounded-full"></div>
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto flex gap-4">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#ff4500] transition-colors duration-300"
                        aria-label={link.label}
                      >
                        <FontAwesomeIcon icon={link.icon} className="h-6 w-6" />
                      </a>
                    ))}
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