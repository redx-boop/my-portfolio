import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SkillBar from '../../components/SkillBar/SkillBar';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 85 },
      { name: 'Python / Django', level: 80 },
      { name: 'Java / Spring Boot', level: 65 },
      { name: 'REST API Design', level: 85 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 70 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    name: 'UI / UX',
    skills: [
      { name: 'Figma', level: 80 },
      { name: 'Wireframing', level: 85 },
      { name: 'Prototyping', level: 75 },
      { name: 'User Research', level: 70 },
    ],
  },
  {
    name: 'Version Control',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'GitHub Actions', level: 75 },
    ],
  },
  {
    name: 'Other Technologies',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Agile / Scrum', level: 80 },
    ],
  },
];

function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I have experience with, grouped by category."
        />
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div className="skills-category" key={category.name}>
              <h3>{category.name}</h3>
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
