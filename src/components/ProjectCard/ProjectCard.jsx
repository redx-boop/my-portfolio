import './ProjectCard.css';

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick?.()}>
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

        {project.challenge && project.solution && (
          <div className="project-details">
            <p>
              <strong>Challenge:</strong> {project.challenge}
            </p>
            <p>
              <strong>Solution:</strong> {project.solution}
            </p>
          </div>
        )}

        <div className="project-links" onClick={(e) => e.stopPropagation()}>
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.github === '#' && (
            <span className="project-links-disabled">GitHub</span>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
