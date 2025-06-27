import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-6 leading-tight">
            <span className="block text-white/80">Hello, I'm</span>
            <span className="gradient-text">Abhinav Jiji</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-white/90 tracking-wide mb-6">
            <span className="inline-flex items-center gap-4">
              <span>Product Management</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              <span>Tech Entrepreneur</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              <span>Full-Stack Innovator</span>
            </span>
          </h2>
          
          <p className="text-white/70 mb-8 mx-auto max-w-2xl">
            I build data-driven products and seamless digital experiences. Blending tech expertise with product strategy, I drive innovation from concept to launch.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              <span>Download CV</span>
              <Download size={18} className="ml-2" />
            </a>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl -z-10"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;