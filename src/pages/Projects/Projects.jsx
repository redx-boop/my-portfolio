import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

const PROJECTS = [
  {
    name: 'School Management System',
    description: 'A comprehensive platform for managing student records, attendance tracking, grade management, and teacher-parent communication. Used by three schools across the district.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    challenge: 'Handling concurrent data updates and maintaining data consistency across multiple school departments with different access levels.',
    solution: 'Implemented optimistic UI updates with a queue-based sync system and database transactions for critical operations. Used role-based access control to secure sensitive data.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Inventory Management System',
    description: 'Real-time inventory tracking system with barcode scanning integration, automated reorder alerts, and detailed analytics dashboards for warehouse managers.',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Redis'],
    challenge: 'Ensuring accurate real-time stock levels across multiple warehouse locations with sub-second latency requirements.',
    solution: 'Built a WebSocket-based event system that propagates inventory changes instantly with conflict resolution. Implemented a read-optimized caching layer using Redis.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Restaurant Management System',
    description: 'End-to-end solution for restaurant operations including POS, table management, online ordering, inventory tracking, and staff scheduling.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Docker', 'Stripe'],
    challenge: 'Integrating online orders with in-house POS without double-booking or inventory mismatches, especially during peak hours.',
    solution: 'Designed a unified order pipeline with a two-phase commit pattern to synchronize online and in-store orders. Added a fallback queue for offline resilience.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Healthcare System',
    description: 'A secure patient management platform with appointment scheduling, medical record keeping, prescription management, and telemedicine capabilities.',
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    challenge: 'Meeting strict HIPAA compliance requirements while keeping the application fast and developer-friendly to maintain.',
    solution: 'Used end-to-end encryption for patient data, implemented audit logging for all data access, and built a permission system that enforces the principle of least privilege.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle
          title="Projects"
          subtitle="A collection of projects I have built, each with its own set of challenges and solutions."
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
