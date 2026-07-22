import { useState } from 'react';
import heroImage from '../../assets/images/IMG_0130.JPEG';
import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import './Home.css';

const TECH_STACK = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React',
  'Node.js', 'Express.js', 'MySQL', 'Git', 'Figma', 'Docker',
];

const FEATURED_PROJECTS = [
  {
    name: 'Kora Flow',
    description: 'A modern web application built with React focusing on clean UI and user experience.',
    technologies: ['React', 'JavaScript', 'CSS3'],
    github: '#',
    demo: 'https://kora-flow-ektr.vercel.app/',
  },
  {
    name: 'Mizero Inventory System',
    description: 'A school inventory management system that helps departments manage stock, borrowing, returning, reports, users, and inventory operations.',
    technologies: ['React', 'Node.js', 'MySQL', 'Express.js'],
    github: '#',
    demo: 'https://mizero.vercel.app/',
  },
  {
    name: 'Health Business Website',
    description: 'A responsive healthcare business website designed with modern layouts, smooth navigation, and professional presentation.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    github: '#',
    demo: 'https://health-business-website.vercel.app/',
  },
  {
    name: 'Smart Rwanda',
    description: 'A modern digital platform developed to showcase smart technology solutions for Rwanda.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://smart-rwanda.vercel.app/',
    image: '/images/smart-rwanda-screenshot.png',
  },
  {
    name: 'AgriConnect Rwanda',
    description: 'A modern digital agriculture platform that connects farmers, buyers, and agricultural stakeholders through an intelligent online marketplace.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://agriconnect-rwanda-oqli.vercel.app/',
    image: '/images/agriconnect-screenshot.png',
  },
  {
    name: 'WildWatch Guardian',
    description: 'A wildlife conservation platform designed to support environmental protection through technology. Provides a responsive interface for monitoring wildlife and raising conservation awareness.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://wild-watch-guardian.vercel.app/',
    image: '/images/wildwatch-screenshot.png',
  },
  {
    name: 'Rwanda Ride Secure',
    description: 'A modern transportation platform concept focused on safe, reliable, and user-friendly ride services.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://rwanda-ride-secure.vercel.app/',
    image: '/images/rwanda-ride-screenshot.png',
  },
  {
    name: 'SchoolPath Gateway',
    description: 'An education-focused digital platform designed to improve access to learning resources and simplify educational processes through technology.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://schoolpath-gateway.vercel.app/',
    image: '/images/schoolpath-screenshot.png',
  },
  {
    name: 'ClearCart Express',
    description: 'A modern e-commerce web application designed to provide a smooth online shopping experience with clean product presentation and easy navigation.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: '#',
    demo: 'https://clear-cart-express.vercel.app/',
    image: '/images/clearcart-screenshot.png',
  },
];

function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Mugisha Chrispin</h1>
              <p className="hero-title">
                Software Developer | UI/UX Designer | Backend Developer
              </p>
              <p>
                I build software that solves real problems. From designing intuitive
                interfaces to architecting reliable backend systems, I focus on
                creating tools that people actually enjoy using.
              </p>
              <div className="hero-actions">
                <Button href="#projects" variant="primary" size="lg">
                  View Projects
                </Button>
                <Button href="#contact" variant="secondary" size="lg">
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="hero-photo">
              <img src={heroImage} alt="Mugisha Chrispin" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="home-about">
        <div className="container">
          <SectionTitle
            title="About Me"
            subtitle="A brief overview of who I am and what I do."
          />
          <div className="home-about">
            <p>
              I am a software developer interested in building practical systems
              that solve real-world problems. I enjoy creating web applications
              from frontend interfaces to backend APIs and databases. My work
              focuses on clean code, usability, and continuous improvement as
              I grow my experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="home-tech">
        <div className="container">
          <SectionTitle
            title="Technologies I Use"
            subtitle="Tools and languages I work with regularly."
          />
          <div className="home-tech-stack">
            <div className="tech-tags">
              {TECH_STACK.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="home-projects">
        <div className="container">
          <SectionTitle
            title="Featured Projects"
            subtitle="A selection of projects I have built recently."
          />
          <div className="home-projects-grid">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
          <div className="home-view-all">
            <a href="#projects">View all projects</a>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default Home;
