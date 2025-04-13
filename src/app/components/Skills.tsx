'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faLaptopCode, 
  faCogs, 
  faTools,
  faHammer,
  faLayerGroup,
  faCubes,
  faPrint,
  faLaptop
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillCategories = [
    {
      category: "Software",
      icon: faLaptopCode,
      skills: [
        "SolidWorks",
        "AutoCAD",
        "ABAQUS",
        "ANSYS",
        "MS Office (Excel etc)",
        "Finite Element Analysis",
        "MasterCAM (Gcode)"
      ]
    },
    {
      category: "Hands-on",
      icon: faTools,
      skills: [
        "CNC turning and milling certification",
        "WHMIS certification",
        "Machine tools",
        "Composites Manufacturing",
        "Laser/Water Jet Cutting",
        "3D Printing"
      ]
    },
    {
      category: "Programming",
      icon: faCode,
      skills: [
        "Python",
        "JavaScript",
        "Data Analysis Libraries",
        "Web Development"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4 relative bg-[#0a0a0a]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient inline-block">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-[#ff4500] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My toolkit encompasses specialized software, hands-on manufacturing techniques, and programming skills that I've developed throughout my engineering education and experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(255, 69, 0, 0.2)"
              }}
              className="bg-[#1a1a1a] rounded-lg p-6 shadow-lg border-t-2 border-[#ff4500]/50 flex flex-col h-full transform transition-all duration-300"
            >
              <div className="mb-5 flex items-center">
                <div className="w-12 h-12 bg-[#ff4500]/20 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={category.icon} className="text-[#ff4500] text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.category}</h3>
              </div>
              
              <ul className="space-y-3 mt-2 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skill}
                    className="flex items-start text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="min-w-5 mr-2 mt-1">
                      <div className="w-2 h-2 bg-[#ff4500] rounded-full"></div>
                    </div>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="w-full h-1 bg-gradient-to-r from-[#ff4500]/80 to-transparent rounded-full mt-6"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-[#1e1e1e] rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-[#ff4500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faCogs} className="text-[#ff4500] text-xl" />
            </div>
            <h4 className="text-white font-medium">CAD Design</h4>
          </div>
          
          <div className="bg-[#1e1e1e] rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-[#ff4500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faLayerGroup} className="text-[#ff4500] text-xl" />
            </div>
            <h4 className="text-white font-medium">Composite Materials</h4>
          </div>
          
          <div className="bg-[#1e1e1e] rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-[#ff4500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faCubes} className="text-[#ff4500] text-xl" />
            </div>
            <h4 className="text-white font-medium">3D Printing</h4>
          </div>
          
          <div className="bg-[#1e1e1e] rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-[#ff4500]/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <FontAwesomeIcon icon={faHammer} className="text-[#ff4500] text-xl" />
            </div>
            <h4 className="text-white font-medium">Manufacturing</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 