'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faPlane,
  faBuilding,
  faCalendarAlt,
  faMapMarkerAlt,
  faTasks
} from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const experiences = [
    {
      id: 1,
      company: "Rolls-Royce Aerospace",
      title: "Mechanical Engineering Intern",
      period: "May 2025 – August 2025",
      location: "Montreal, Quebec",
      icon: faBuilding,
      color: "#00539b",
      skills: ["AutoCAD", "CNC", "Technical Documentation", "Risk Assessment", "Manufacturing"],
      description: [
        "Analyzed repair documentation and technical variance sheets, identifying cross-model efficiencies by evaluating materials and structural integrity.",
        "Conducted tool standardization projects, authored comprehensive documentation, and led risk assessments to ensure compliance with aerospace standards.",
        "Developed precise technical drawings in AutoCAD, enhancing clarity and operational efficiency in tooling processes.",
        "Initiated a project to streamline CNC machine operations by optimizing G-code generation, improving manufacturing throughput."
      ]
    },
    {
      id: 2,
      company: "Composites Research Network – Boeing/UBC",
      title: "Trainee Engineer",
      period: "May 2024 – August 2024",
      location: "Vancouver, British Columbia",
      icon: faFlask,
      color: "#ff4500",
      skills: ["Rheometer", "DMA", "TGA", "DSC", "TMA", "Instron", "ANSYS", "SolidWorks", "Python"],
      description: [
        "Collaborated with Canadian SMEs on composites-focused projects, bridging industry and academic research.",
        "Evaluated the efficiency and performance of an industrial autoclave through ANSYS airflow modeling and physical testing with anemometers.",
        "Used Python libraries (matplotlib, pandas, NumPy) to analyze raw anemometer data.",
        "Designed and implemented thermocouple layouts using 3D modeling software to assess and optimize thermal characteristics in autoclaves and composite tooling.",
        "Conducted comprehensive material testing using advanced instruments including Rheometer, DMA, TGA, DSC, TMA, and Instron.",
        "Manufactured carbon fiber parts using various methods: Bladder molding, Pre-preg, wet layup, and vacuum infusion."
      ]
    },
    {
      id: 3,
      company: "McGill Robotics – Drone Team",
      title: "Drone Mechanical Member",
      period: "September 2024 – April 2025",
      location: "Montreal, Canada",
      icon: faPlane,
      color: "#ff7e47",
      skills: ["Fusion 360", "Laser Cutting", "Glass Fiber", "Wet Layup"],
      description: [
        "Designed and modified NACA4412 airfoil profiles using Fusion 360 to fit foam block dimensions for drone.",
        "Generated DXF files from 3D models to enable precise laser cutting of wooden hot wire templates.",
        "Fabricated airfoil components using the wet layup method with glass fiber and resin."
      ]
    },
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

  const listItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section 
      id="experience"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#121212]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient inline-block">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-[#ff4500] rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-3xl">
            My professional journey has equipped me with hands-on experience in engineering research, design, and manufacturing. Here&apos;s where I&apos;ve applied my skills and gained valuable industry insight.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              variants={cardVariants}
              className="relative p-1 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff4500] to-[#ff7e47] opacity-30 rounded-lg"></div>
              
              <div className="relative bg-[#1a1a1a] rounded-lg p-6 md:p-8 shadow-xl overflow-hidden">
                {/* Experience Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div className="flex items-start">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mr-4 hidden md:flex"
                      style={{ backgroundColor: `${exp.color}20` }}
                    >
                      <FontAwesomeIcon 
                        icon={exp.icon} 
                        className="text-xl"
                        style={{ color: exp.color }}  
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                      <h4 className="text-lg text-[#ff4500] font-medium mt-1">{exp.title}</h4>
                    </div>
                  </div>
                  
                  <div className="text-gray-400 space-y-1 md:text-right">
                    <div className="flex items-center md:justify-end">
                      <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center md:justify-end">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-sm bg-[#ff4500]/20 text-[#ff7e47] rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Description */}
                <div>
                  <h5 className="flex items-center text-white font-medium mb-3">
                    <FontAwesomeIcon icon={faTasks} className="w-4 h-4 mr-2 text-[#ff4500]" />
                    Responsibilities & Achievements
                  </h5>
                  
                  <motion.ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li 
                        key={i}
                        variants={listItemVariants}
                        custom={i}
                        className="flex items-start text-gray-300"
                      >
                        <div className="min-w-5 mr-2 mt-1.5">
                          <div className="w-2 h-2 bg-[#ff4500] rounded-full"></div>
                        </div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 