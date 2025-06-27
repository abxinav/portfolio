import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

// Skill categories with items
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs', 'WebSockets', 'Microservices'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase', 'Firebase'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Testing', 'Performance Optimization', 'Agile/Scrum'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 bg-dark-900/50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Skills & Expertise"
          subtitle="I've spent years refining my skills in full-stack development."
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary-400">{category.title}</h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    <span className="text-white/80">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;