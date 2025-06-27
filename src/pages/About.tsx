import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '15+', label: 'Happy Clients' },
    { value: '3', label: 'Awards Received' },
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="About Me"
            subtitle="Get to know more about me and my journey"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative z-10">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-primary-500/20 shadow-xl shadow-primary-500/20">
                  <img 
                    src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="John Doe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-3xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-xl -z-10 rotate-6"></div>
            </motion.div>
            
            <div>
              <motion.div
                ref={bioRef}
                initial={{ opacity: 0, y: 20 }}
                animate={bioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
                
                <div className="space-y-4 text-white/80">
                  <p>
                    Hello! I'm John Doe, a passionate Full-Stack Developer and UI/UX Designer based in San Francisco, CA. 
                    I enjoy creating beautiful, functional, and user-centered digital experiences.
                  </p>
                  
                  <p>
                    With 5+ years of experience in web development, I've worked with a variety of clients from startups to 
                    established businesses. My goal is to build products that not only look great but also solve real problems.
                  </p>
                  
                  <p>
                    I specialize in React, TypeScript, Node.js, and modern web technologies. I'm also well-versed in 
                    UX/UI design principles and creating seamless user experiences.
                  </p>
                  
                  <p>
                    When I'm not coding or designing, you'll find me hiking, reading sci-fi novels, or experimenting 
                    with new recipes in the kitchen.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">
                    <span>Download CV</span>
                    <Download size={18} className="ml-2" />
                  </a>
                  
                  <Link to="/contact" className="btn-secondary">
                    <span>Contact Me</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Stats section */}
          <motion.div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;