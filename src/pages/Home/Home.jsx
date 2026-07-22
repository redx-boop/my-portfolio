import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Home.css';

const TECH_STACK = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'Figma',
];

const FEATURED_PROJECTS = [
  {
    name: 'School Management System',
    description: 'A comprehensive platform for managing student records, attendance, grades, and communication between teachers and parents.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    challenge: 'Handling concurrent data updates and maintaining data consistency across multiple school departments.',
    solution: 'Implemented optimistic UI updates with a queue-based sync system and database transactions for critical operations.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Inventory Management System',
    description: 'Real-time inventory tracking system with barcode scanning, automated reordering, and detailed analytics dashboards.',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
    challenge: 'Ensuring accurate real-time stock levels across multiple warehouse locations.',
    solution: 'Built a WebSocket-based event system that propagates inventory changes instantly with conflict resolution.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    name: 'Restaurant Management System',
    description: 'End-to-end solution for restaurant operations including POS, table management, online ordering, and staff scheduling.',
    technologies: ['React', 'Django', 'PostgreSQL', 'Docker'],
    challenge: 'Integrating online orders with in-house POS without double-booking or inventory mismatches.',
    solution: 'Designed a unified order pipeline with a two-phase commit pattern to synchronize online and in-store orders.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Alex Chen</h1>
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
              <span>AC</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="section section-alt" id="home-about">
        <div className="container">
          <SectionTitle
            title="About Me"
            subtitle="A brief overview of who I am and what I do."
          />
          <div className="home-about">
            <p>
              I am a software developer with experience building web applications
              across the full stack. I enjoy working on projects that require
              thoughtful problem-solving and clean implementation. Whether it is
              designing a database schema, debugging a tricky frontend issue, or
              figuring out how to make a UI feel more natural, I approach each
              task with the same level of care and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
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

      {/* Featured Projects */}
      <section className="section section-alt" id="home-projects">
        <div className="container">
          <SectionTitle
            title="Featured Projects"
            subtitle="A selection of projects I have built recently."
          />
          <div className="home-projects-grid">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          <div className="home-view-all">
            <a href="#projects">View all projects</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
