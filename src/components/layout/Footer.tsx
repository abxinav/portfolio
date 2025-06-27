import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 glass">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold gradient-text block mb-4">
              John Doe
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:john@example.com" 
                className="text-white/70 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-primary-400 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-primary-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/resume.pdf" 
                  className="text-white/70 hover:text-primary-400 transition-colors inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Resume</span>
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <Link to="/experience" className="text-white/70 hover:text-primary-400 transition-colors">Experience</Link>
              </li>
              <li>
                <Link to="/education" className="text-white/70 hover:text-primary-400 transition-colors">Education</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-2 md:mt-0">
            Designed and built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;