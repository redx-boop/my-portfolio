import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={project.name} />
        ) : (
          <div className="placeholder">{project.name}</div>
        )}
      </div>
      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-details">
          <p>
            <strong>Challenge:</strong> {project.challenge}
          </p>
          <p>
            <strong>Solution:</strong> {project.solution}
          </p>
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
