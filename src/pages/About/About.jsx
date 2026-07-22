import aboutImage from '../../assets/images/IMG_0038.JPEG';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './About.css';

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="Who I am, what I do, and where I am headed."
        />

        <div className="about-grid">
          <div>
            <div className="about-section">
              <h3>Who I Am</h3>
              <p>
                I am a software developer interested in building practical systems
                that solve real-world problems. I enjoy creating web applications
                from frontend interfaces to backend APIs and databases. My work
                focuses on clean code, usability, and continuous improvement as
                I grow my experience.
              </p>
              <p>
                I started programming in high school and have been building
                projects ever since. Each project teaches me something new about
                software design, user behavior, or the technologies I work with.
                I believe that good software comes from understanding the people
                who use it.
              </p>
            </div>

            <div className="about-section">
              <h3>Education</h3>
              <ul>
                <li><strong>Computer Science</strong> - 2022 - 2026</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Career Goals</h3>
              <p>
                I am looking for opportunities where I can contribute to meaningful
                projects while continuing to grow as a developer. I am particularly
                interested in roles that involve full-stack development and building
                tools that make a difference for their users.
              </p>
            </div>
          </div>

          <div>
            <div className="about-photo">
              <img src={aboutImage} alt="Mugisha Chrispin" />
            </div>

            <div className="about-section">
              <h3>Languages</h3>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML / CSS</li>
                <li>SQL</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Frameworks &amp; Libraries</h3>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Tools</h3>
              <ul>
                <li>Git / GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>Docker</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Experience</h3>
              <ul>
                <li><strong>Freelance Web Developer</strong> - Self-employed, Jun 2023 - Present</li>
                <li><strong>Personal Projects</strong> - Solo Developer, Jan 2023 - May 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
