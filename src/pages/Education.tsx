import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import { Calendar, Award, BookOpen } from 'lucide-react';

// Dummy education data
const education = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2015 - 2017',
    description: 'Specialized in Human-Computer Interaction and Artificial Intelligence. Graduated with honors.',
    achievements: [
      'GPA: 3.9/4.0',
      'Teaching Assistant for Introduction to Web Development',
      'Research Assistant in the Human-Computer Interaction Lab',
    ],
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Berkeley',
    period: '2011 - 2015',
    description: 'Focused on software engineering and data structures. Minor in Digital Media.',
    achievements: [
      'Dean\'s List (all semesters)',
      'President of the Web Development Club',
      'Participated in ACM Programming Competition',
    ],
  },
];

// Dummy certifications data
const certifications = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Jan 2022',
    credentialId: 'AWS-123456',
  },
  {
    id: 2,
    name: 'Google Cloud Professional Developer',
    issuer: 'Google',
    date: 'Mar 2021',
    credentialId: 'GCP-789012',
  },
  {
    id: 3,
    name: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta (Facebook)',
    date: 'Nov 2020',
    credentialId: 'META-345678',
  },
  {
    id: 4,
    name: 'Advanced React and Redux',
    issuer: 'Udemy',
    date: 'Jun 2020',
    credentialId: 'UC-901234',
  },
];

const Education: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Education"
            subtitle="My academic background and ongoing learning journey"
          />
          
          {/* Formal Education */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <BookOpen size={24} className="mr-2 text-primary-500" />
              <span>Formal Education</span>
            </h3>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="card overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-1 bg-gradient-to-r from-primary-600 to-accent-600"></div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                        <h5 className="text-lg text-primary-400">{edu.institution}</h5>
                      </div>
                      
                      <div className="flex items-center mt-2 md:mt-0">
                        <Calendar size={16} className="text-white/60 mr-1" />
                        <span className="text-white/60">{edu.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6">{edu.description}</p>
                    
                    <div>
                      <h5 className="text-lg font-semibold mb-3">Achievements:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-white/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award size={24} className="mr-2 text-primary-500" />
              <span>Certifications</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="p-2 rounded-lg bg-primary-500/20 mr-4">
                      <Award size={24} className="text-primary-400" />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-primary-400">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between text-white/60 text-sm">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <Calendar size={14} className="mr-1" />
                      <span>Issued: {cert.date}</span>
                    </div>
                    
                    <div>
                      <span>Credential ID: {cert.credentialId}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;