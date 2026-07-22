import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import './Projects.css';

const PROJECTS = [
  {
    name: 'Kora Flow',
    description: 'A modern web application built with React focusing on clean UI and user experience. Features responsive design, component-based architecture, and efficient state management.',
    technologies: ['React', 'JavaScript', 'CSS3'],
    github: '#',
    demo: 'https://kora-flow-ektr.vercel.app/',
  },
  {
    name: 'Mizero Inventory System',
    description: 'A school inventory management system that helps departments manage stock, borrowing, returning, reports, users, and inventory operations. Streamlines administrative workflows and reduces paperwork.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
    github: '#',
    demo: 'https://mizero.vercel.app/',
  },
  {
    name: 'Health Business Website',
    description: 'A responsive healthcare business website designed with modern layouts, smooth navigation, and professional presentation. Optimized for accessibility and mobile viewing.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    github: '#',
    demo: 'https://health-business-website.vercel.app/',
  },
  {
    name: 'Smart Rwanda',
    description: 'A modern digital platform developed to showcase smart technology solutions for Rwanda. Focuses on clean user experience, responsive design, and practical digital services while demonstrating modern web development practices.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://smart-rwanda.vercel.app/',
    image: '/images/smart-rwanda-screenshot.png',
  },
  {
    name: 'AgriConnect Rwanda',
    description: 'AgriConnect Rwanda is a modern digital agriculture platform that connects farmers, buyers, and agricultural stakeholders through an intelligent online marketplace. The platform showcases agricultural technologies, provides market insights, promotes transparency, and supports sustainable farming through a responsive and user-friendly web experience.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://agriconnect-rwanda-oqli.vercel.app/',
    image: '/images/agriconnect-screenshot.png',
  },
  {
    name: 'WildWatch Guardian',
    description: 'WildWatch Guardian is a wildlife conservation platform designed to support environmental protection through technology. The application provides a modern, responsive interface for monitoring wildlife, raising conservation awareness, and presenting environmental data in an accessible way.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://wild-watch-guardian.vercel.app/',
    image: '/images/wildwatch-screenshot.png',
  },
  {
    name: 'Rwanda Ride Secure',
    description: 'Rwanda Ride Secure is a modern transportation platform concept focused on safe, reliable, and user-friendly ride services. The application demonstrates responsive web design, intuitive navigation, and a clean user interface suitable for a digital mobility solution.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://rwanda-ride-secure.vercel.app/',
    image: '/images/rwanda-ride-screenshot.png',
  },
  {
    name: 'SchoolPath Gateway',
    description: 'SchoolPath Gateway is an education-focused digital platform designed to improve access to learning resources and simplify educational processes through technology. The project demonstrates modern web development practices with a clean interface, responsive design, and user-friendly experience for students and educational communities.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://schoolpath-gateway.vercel.app/',
    image: '/images/schoolpath-screenshot.png',
  },
  {
    name: 'ClearCart Express',
    description: 'ClearCart Express is a modern e-commerce web application designed to provide a smooth online shopping experience. The platform focuses on clean product presentation, easy navigation, and a responsive user interface that allows customers to explore products and interact with a digital shopping environment.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://clear-cart-express.vercel.app/',
    image: '/images/clearcart-screenshot.png',
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <SectionTitle
          title="Projects"
          subtitle="A collection of projects I have built. Each one taught me something new."
        />
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
