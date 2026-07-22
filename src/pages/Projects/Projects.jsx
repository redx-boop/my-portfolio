import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
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
];

function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <SectionTitle
          title="Projects"
          subtitle="A collection of projects I have built. Each one taught me something new."
        />
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
