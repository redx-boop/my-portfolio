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
                I am a software developer based in Seattle, Washington. I started
                programming in high school, building simple scripts to automate
                homework assignments, and have been hooked ever since. I studied
                computer science at the University of Washington, where I learned
                the fundamentals of software engineering, algorithms, and system design.
              </p>
              <p>
                Outside of coding, I enjoy reading about history, hiking the
                Pacific Northwest trails, and experimenting with coffee brewing
                methods. I believe that good software comes from understanding
                the people who use it, which is why I spend as much time listening
                to users as I do writing code.
              </p>
            </div>

            <div className="about-section">
              <h3>Education</h3>
              <ul>
                <li><strong>B.S. Computer Science</strong> - University of Washington, 2022 - 2026</li>
                <li><strong>A.S. Computer Science</strong> - Seattle Central College, 2020 - 2022</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Career Goals</h3>
              <p>
                I am looking for opportunities where I can contribute to meaningful
                projects while continuing to grow as an engineer. I am particularly
                interested in roles that involve full-stack development, systems
                design, and developer tooling. In the long term, I want to work on
                software that helps other developers build better products.
              </p>
            </div>
          </div>

          <div>
            <div className="about-section">
              <h3>Languages</h3>
              <ul>
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>SQL</li>
                <li>HTML / CSS</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Frameworks &amp; Libraries</h3>
              <ul>
                <li>React / React Native</li>
                <li>Vue.js</li>
                <li>Node.js / Express</li>
                <li>Django / Flask</li>
                <li>Spring Boot</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Databases &amp; Tools</h3>
              <ul>
                <li>PostgreSQL / MySQL</li>
                <li>MongoDB / Redis</li>
                <li>Docker / Kubernetes</li>
                <li>AWS / GCP</li>
                <li>Git / GitHub Actions</li>
              </ul>
            </div>

            <div className="about-section">
              <h3>Experience</h3>
              <ul>
                <li><strong>Student Software Developer</strong> - UW CSE Department, Sep 2024 - Present</li>
                <li><strong>Freelance Web Developer</strong> - Self-employed, Jun 2023 - Present</li>
                <li><strong>IT Intern</strong> - Seattle Public Schools, Jun 2022 - Aug 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
