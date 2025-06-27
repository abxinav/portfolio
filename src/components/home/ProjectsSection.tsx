import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    subtitle: 'A full-featured shopping experience',
    image: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects/e-commerce-platform',
  },
  {
    id: 2,
    title: 'Task Management App',
    subtitle: 'Collaborative project management',
    image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects/task-management-app',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    subtitle: 'AI-powered content creation tool',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects/ai-content-generator',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    subtitle: 'Personal portfolio template',
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/projects/portfolio-website',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Projects"
          subtitle="Selected works from my portfolio"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link 
                to={project.link}
                className="block relative overflow-hidden rounded-2xl border border-primary-500/20 bg-dark-800/50"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/70 mt-2">{project.subtitle}</p>
                    </div>
                    
                    <div className="flex items-center text-primary-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-4 transition-all duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;