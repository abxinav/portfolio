import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import { ExternalLink, Github } from 'lucide-react';

// Dummy project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with React, Node.js, and Stripe integration. Features include product listings, shopping cart, user accounts, payment processing, and order management.',
    image: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
    liveLink: 'https://example.com/ecommerce',
    githubLink: 'https://github.com/johndoe/ecommerce',
    category: 'Web App'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress. Includes notification system and reporting features.',
    image: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript', 'Context API'],
    liveLink: 'https://example.com/taskapp',
    githubLink: 'https://github.com/johndoe/taskapp',
    category: 'Web App'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool for marketers and content creators. Uses OpenAI API to generate blog posts, social media content, and product descriptions based on user prompts.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    liveLink: 'https://example.com/ai-generator',
    githubLink: 'https://github.com/johndoe/ai-generator',
    category: 'AI/ML'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that provides current conditions and forecasts for any location. Features include interactive maps, hourly and weekly forecasts, and weather alerts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Weather API', 'Recharts', 'Styled Components'],
    liveLink: 'https://example.com/weather',
    githubLink: 'https://github.com/johndoe/weather',
    category: 'Web App'
  },
  {
    id: 5,
    title: 'Mobile Fitness Tracker',
    description: 'A React Native fitness tracking app that monitors workouts, nutrition, and progress. Includes custom workout plans, progress visualization, and social sharing features.',
    image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Expo', 'Firebase', 'Redux', 'Health API'],
    liveLink: 'https://example.com/fitness',
    githubLink: 'https://github.com/johndoe/fitness',
    category: 'Mobile App'
  },
  {
    id: 6,
    title: 'Portfolio Website Template',
    description: 'A customizable portfolio website template for developers and designers. Features a modern design, smooth animations, and easy content management.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Responsive Design'],
    liveLink: 'https://example.com/portfolio-template',
    githubLink: 'https://github.com/johndoe/portfolio-template',
    category: 'Web Design'
  },
];

// Categories for filtering
const categories = ['All', 'Web App', 'Mobile App', 'Web Design', 'AI/ML'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="My Projects"
            subtitle="Explore my recent work and personal projects"
          />
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filter === category 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' 
                    : 'bg-dark-700/50 text-white/70 hover:bg-dark-600/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="card h-full flex flex-col"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-dark-800/80 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs text-primary-300">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    
                    <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-dark-700/50 text-primary-300 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs bg-dark-700/50 text-primary-300 px-3 py-1 rounded-full">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex mt-auto pt-4 border-t border-white/10 space-x-4">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white/90 hover:text-primary-400 transition-colors"
                      >
                        <span className="mr-1">Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white/90 hover:text-primary-400 transition-colors"
                      >
                        <span className="mr-1">Code</span>
                        <Github size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/70">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;