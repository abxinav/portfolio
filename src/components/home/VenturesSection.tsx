import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';

const ventures = [
  {
    id: 1,
    title: 'Meta Prime Technologies',
    subtitle: 'Empowering businesses with cutting-edge technology, custom software, and result-driven digital marketing solutions.',
    image: 'https://i.imgur.com/HFgEJXH.png',
    link: '/ventures/a1',
  },
  {
    id: 2,
    title: 'Boshu',
    subtitle: 'Boshu is a smart QR-based system that lets customers order and pay for food securely from their phones.',
    image: 'https://i.imgur.com/L7mhVtz.png',
    link: 'https://heyboshu.com/',
  },
];

const VenturesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Ventures"
          subtitle="Projects I've founded or co-founded"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link 
                to={venture.link}
                className="block relative overflow-hidden rounded-2xl border border-primary-500/20 bg-dark-800/50"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 z-10" />
                  <img 
                    src={venture.image} 
                    alt={venture.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                        {venture.title}
                      </h3>
                      <p className="text-white/70 mt-2">{venture.subtitle}</p>
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

export default VenturesSection;