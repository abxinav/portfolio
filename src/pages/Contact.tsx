import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/shared/PageTransition';
import SectionHeading from '../components/shared/SectionHeading';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Contact Me"
            subtitle="Have a project in mind? Let's discuss how we can work together."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                className="card p-6 h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-primary-500/20 mr-4">
                      <Mail size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-sm text-white/60 mb-1">Email</h4>
                      <a href="mailto:john@example.com" className="text-white hover:text-primary-400 transition-colors">
                        john@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-primary-500/20 mr-4">
                      <Phone size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-sm text-white/60 mb-1">Phone</h4>
                      <a href="tel:+1234567890" className="text-white hover:text-primary-400 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-primary-500/20 mr-4">
                      <MapPin size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-sm text-white/60 mb-1">Location</h4>
                      <p className="text-white">
                        San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/johndoe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-dark-700 hover:bg-primary-600 text-white/80 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/johndoe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-dark-700 hover:bg-primary-600 text-white/80 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://twitter.com/johndoe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-dark-700 hover:bg-primary-600 text-white/80 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                
                {submitSuccess ? (
                  <motion.div 
                    className="bg-primary-500/20 border border-primary-500/40 rounded-lg p-4 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h4 className="text-lg font-semibold text-primary-400 mb-2">Thank You!</h4>
                    <p className="text-white/80">Your message has been sent successfully. I'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-white/80 mb-2">
                          Name <span className="text-accent-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg bg-dark-700/50 border ${
                            errors.name ? 'border-accent-500' : 'border-dark-500'
                          } text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-accent-500 text-sm">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white/80 mb-2">
                          Email <span className="text-accent-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg bg-dark-700/50 border ${
                            errors.email ? 'border-accent-500' : 'border-dark-500'
                          } text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50`}
                          placeholder="Your email"
                        />
                        {errors.email && (
                          <p className="mt-1 text-accent-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-white/80 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-dark-700/50 border border-dark-500 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-white/80 mb-2">
                        Message <span className="text-accent-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg bg-dark-700/50 border ${
                          errors.message ? 'border-accent-500' : 'border-dark-500'
                        } text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 resize-none`}
                        placeholder="Your message..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-accent-500 text-sm">{errors.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className={`btn-primary w-full justify-center ${
                          isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                        }`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                              <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <span>Send Message</span>
                            <Send size={18} className="ml-2" />
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;