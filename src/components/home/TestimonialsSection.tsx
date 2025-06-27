import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

// Dummy testimonial data
const testimonials = [
  {
    id: 1,
    content: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive.",
    author: "Sarah Johnson",
    position: "CTO at TechCorp",
    image: "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "Working with John was a game-changer for our project. His technical expertise and ability to translate complex requirements into elegant solutions made all the difference.",
    author: "Michael Chen",
    position: "Product Manager at InnovateCo",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "John's work on our e-commerce platform exceeded our expectations. The UI is beautiful, the code is clean, and the performance is outstanding.",
    author: "Emily Rodriguez",
    position: "CEO at ShopWave",
    image: "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Client Testimonials"
          subtitle="What people say about working with me."
          alignment="center"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 relative">
                  <Quote size={32} className="absolute -top-4 -left-4 text-primary-500/30" />
                  <p className="text-xl md:text-2xl text-white/90 italic relative z-10">
                    "{testimonials[current].content}"
                  </p>
                </div>
                
                <div className="flex items-center flex-col">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-primary-500/30">
                    <img 
                      src={testimonials[current].image} 
                      alt={testimonials[current].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg">{testimonials[current].author}</h4>
                  <p className="text-white/60 text-sm">{testimonials[current].position}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-between w-full">
              <button
                onClick={prev}
                className="bg-dark-700/80 hover:bg-dark-600/80 text-white/80 hover:text-white p-3 rounded-full transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={next}
                className="bg-dark-700/80 hover:bg-dark-600/80 text-white/80 hover:text-white p-3 rounded-full transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? 'bg-primary-500' : 'bg-dark-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;