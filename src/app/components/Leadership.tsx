'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faPrint, 
  faGlobe,
  faCalendarAlt,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

const Leadership = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const roles = [
    {
      id: 1,
      role: "U2 Mechanical Engineering Representative",
      organization: "McGill Association of Mechanical Engineers (MAME)",
      period: "May 2024 – April 2025",
      location: "McGill University",
      icon: faUsers,
      color: "#ff4500",
      description: [
        "Manage and organize events for engineering students to enhance engagement and community.",
        "Collaborate with representatives to improve student life, wellbeing, and culture.",
        "Provide academic support and guidance within the U2 Mechanical Engineering cohort.",
        "Organize various social, professional, and academic club events."
      ]
    },
    {
      id: 2,
      role: "Shop Technician",
      organization: "McGill Additive Manufacturing Lab",
      period: "Fall 2024 – Present",
      location: "McGill University",
      icon: faPrint,
      color: "#ff7e47",
      description: [
        "Oversee 3D printing services for academic and personal projects, including group assignments like drone frames, ensuring timely production.",
        "Provide expertise on material selection, design file printability, and optimization to support users in achieving high-quality prints.",
        "Maintain and troubleshoot 3D printers, ensuring consistent operation and minimizing downtime."
      ]
    },
    {
      id: 3,
      role: "Delegate",
      organization: "Youth Advisory Delegation",
      period: "September 2022 – April 2023",
      location: "McGill University",
      icon: faGlobe,
      color: "#ff9f4a",
      description: [
        "Formulated impactful youth policies for international discussions, collaborating with NGOs to gather information.",
        "Held consultative status with the UN ECOSOC, engaging in high-level dialogues.",
        "Advocated for youth issues with Permanent Missions (e.g., Japan, Germany)."
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
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="leadership"
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
            Leadership & Extracurricular
          </h2>
          <div className="w-20 h-1 bg-[#ff4500] rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-3xl">
            Beyond academics and professional work, I&apos;ve taken on leadership roles and participated in activities that broaden my perspective and develop my collaborative abilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {roles.map((role, index) => (
            <motion.div 
              key={role.id}
              variants={cardVariants}
              className="bg-[#1a1a1a] rounded-lg p-6 md:p-8 shadow-lg overflow-hidden relative"
            >
              {/* Curved colored accent line */}
              <div 
                className="absolute top-0 left-0 w-3 h-full rounded-tl-lg rounded-bl-lg"
                style={{ backgroundColor: role.color }}
              ></div>
              
              <div className="ml-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div className="flex items-start">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                      style={{ backgroundColor: `${role.color}20` }}
                    >
                      <FontAwesomeIcon 
                        icon={role.icon} 
                        className="text-xl"
                        style={{ color: role.color }}  
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{role.role}</h3>
                      <h4 className="text-lg text-[#ff4500] font-medium mt-1">{role.organization}</h4>
                    </div>
                  </div>
                  
                  <div className="text-gray-400 space-y-1 md:text-right">
                    <div className="flex items-center md:justify-end">
                      <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span>{role.period}</span>
                    </div>
                    <div className="flex items-center md:justify-end">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {role.description.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) + (i * 0.05) }}
                      className="flex items-start text-gray-300"
                    >
                      <div className="min-w-5 mr-2 mt-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: role.color }}></div>
                      </div>
                      <span>{item.replace(/'/g, "&apos;")}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership; 