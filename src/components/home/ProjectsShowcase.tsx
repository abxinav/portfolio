import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';

// Project data
const featuredProjects = [
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
];

const ProjectsShowcase: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Projects"
          subtitle="Selected works from my portfolio"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 gap-20">
          {featuredProjects.map((project, index) => (
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
                className="block relative overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-primary-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mt-2">{project.subtitle}</p>
                  </div>
                  
                  <div className="flex items-center text-primary-400 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">View Project</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/projects" 
            className="btn-primary inline-flex items-center"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;