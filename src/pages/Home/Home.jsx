import heroImage from '../../assets/images/IMG_0130.JPEG';
import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
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
];

function Home() {
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
