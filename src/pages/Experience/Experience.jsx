import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TimelineItem from '../../components/TimelineItem/TimelineItem';
import './Experience.css';

const EXPERIENCES = [
  {
    date: 'Sep 2024 - Present',
    title: 'University of Washington',
    role: 'Student Software Developer',
    description:
      'Working with the Computer Science department to develop and maintain internal tools used by faculty and students. Built a course registration dashboard that reduced scheduling conflicts by 30%. Collaborated with a team of four developers using Agile methodology.',
  },
  {
    date: 'Jun 2023 - Present',
    title: 'Freelance Projects',
    role: 'Full-Stack Developer',
    description:
      'Designed and built web applications for small businesses and non-profits. Managed all aspects of each project from requirements gathering to deployment. Delivered three production applications, including an inventory management system and a membership portal for a local community center.',
  },
  {
    date: 'Jan 2023 - May 2023',
    title: 'Personal Projects',
    role: 'Solo Developer',
    description:
      'Built several full-stack applications to deepen my understanding of software architecture. Developed a restaurant management system, a real-time chat application, and a task management tool. Focused on writing clean, well-documented code and implementing automated testing.',
  },
  {
    date: 'Jun 2022 - Aug 2022',
    title: 'Seattle Public Schools',
    role: 'IT Intern',
    description:
      'Provided technical support across 15 schools. Assisted with network infrastructure upgrades, deployed new workstation imaging procedures, and created documentation that reduced ticket resolution time by 20%.',
  },
];

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey so far, from internships to freelance work."
        />
        <div className="experience-timeline">
          {EXPERIENCES.map((exp, index) => (
            <TimelineItem
              key={index}
              date={exp.date}
              title={exp.title}
              role={exp.role}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
