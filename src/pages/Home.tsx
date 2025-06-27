import React from 'react';
import PageTransition from '../components/shared/PageTransition';
import HeroSection from '../components/home/HeroSection';
import Experience from './Experience';
import VenturesSection from '../components/home/VenturesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import SkillsSection from '../components/home/SkillsSection';
import ContactCTA from '../components/home/ContactCTA';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <HeroSection />
      <Experience />
      <VenturesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactCTA />
    </PageTransition>
  );
};

export default Home;