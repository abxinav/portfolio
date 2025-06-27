import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';

// Dummy experience data
const experiences = [
  {
    id: 1,
    role: 'Founder',
    company: 'Meta Prime Technologies(formerly City Tech)',
    logo: 'https://i.imgur.com/lNYT9St.jpeg',
    period: 'July 2023 - April 2025',
    description: 'Lead the frontend development team in building modern web applications. Implemented component libraries, improved performance, and mentored junior developers.',
    responsibilities: [
      'Led the redesign of the company\'s flagship product, resulting in a 40% increase in user engagement',
      'Implemented CI/CD pipeline using GitHub Actions, reducing deployment time by 60%',
      'Optimized application performance, improving load times by 35%',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'Jest'],
  },
  {
    id: 2,
    role: 'Co-Founder',
    company: 'Boshu',
    logo: 'https://i.imgur.com/JXdMZun.png',
    period: 'Sep 2024 - Jan 2024',
    description: 'Developed and maintained multiple web applications for clients across various industries. Worked on both frontend and backend aspects of the projects.',
    responsibilities: [
      'Built scalable APIs using Node.js and Express, serving over 500,000 requests daily',
      'Designed and implemented database schemas for SQL and NoSQL databases',
      'Created responsive UI components and implemented complex user interactions',
      'Collaborated with UX designers to implement intuitive interfaces',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redux'],
  },
  {
    id: 3,
    role: 'Network and ICT Intern',
    company: 'Mannai Corporation QPSC',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcr6X3pucQBKNVkZC8lkXNLiOEj__UJXdUQ&s',
    period: 'Jun 2022 - Seb 2022',
    description: 'Started as an intern and quickly moved to a full-time position. Worked on developing and maintaining the company website and internal tools.',
    responsibilities: [
      'Developed responsive websites using HTML, CSS, and JavaScript',
      'Implemented various features for the company\'s content management system',
      'Assisted in migrating legacy code to modern JavaScript frameworks',
      'Participated in daily stand-ups and sprint planning meetings',
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'jQuery', 'Bootstrap', 'PHP', 'MySQL'],
  },
];

const Experience: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Work Experience"
          subtitle="A look at my professional journey and achievements"
          alignment="center"
        />
        
        <div className="space-y-32 mt-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center"
            >
              {/* Company Logo */}
              <motion.div
                className="absolute -top-16 z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-32 h-32 p-1 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 shadow-xl">
                  <div className="w-full h-full rounded-xl overflow-hidden border-4 border-dark-800">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Experience Card */}
              <div className="card w-full pt-20 pb-8 px-8 border border-primary-500/30 bg-gradient-to-br from-dark-800/80 to-dark-700/80 backdrop-blur-sm shadow-xl">
                {/* Header */}
                <div className="text-center mb-8">
                  <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-white/90 mb-4 shadow-lg shadow-primary-500/10">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-primary-400">{exp.company}</h4>
                </div>

                {/* Description */}
                <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-sm bg-dark-700/50 text-primary-300 px-4 py-1.5 rounded-full border border-primary-500/20 shadow-sm shadow-primary-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Responsibilities */}
                <div className="bg-dark-900/50 rounded-xl p-6 border border-primary-500/20">
                  <h4 className="text-lg font-semibold mb-6 text-primary-400 text-center">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-4 max-w-3xl mx-auto">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start group">
                        <span className="w-2 h-2 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                        <span className="text-white/80 group-hover:text-white transition-colors duration-300">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;