import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SkillBar from '../../components/SkillBar/SkillBar';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 70 },
      { name: 'React', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'Docker', level: 60 },
    ],
  },
];

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I have experience with."
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
