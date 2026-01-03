import './Resume.css'

function Resume() {
  return (
    <main className="container">
      <div className="resume-content">
        <h1>Resume</h1>

        <div className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Master of Computing and Innovation</h3>
            <div className="meta">University of Adelaide | Feb 2024 - Dec 2025</div>
            <p>GPA: 5.750/7.0 | North Terrace Campus</p>
            <p>Conferred: 31 December 2025</p>
          </div>
          
          <div className="resume-item">
            <h3>Bachelor of Computer Science (Data Analytics)</h3>
            <div className="meta">Asia Pacific University | 2019 - 2023</div>
            <p>CGPA: 3.27/4.0 | Second Class Honours, First Division</p>
            <p>Dual award with Staffordshire University, UK</p>
          </div>
        </div>

        <div className="resume-section">
          <h2>Work Experience</h2>
          
          <div className="resume-item">
            <h3>Fullstack Developer</h3>
            <div className="meta">Moximo | Feb 2024 - July 2025</div>
            <ul>
              <li>Built 8+ web-based solutions using ReactJS, TypeScript, JavaScript, HTML5, and CSS - delivered construction management, school management, HR payroll, and multiple POS systems</li>
              <li>Architected scalable full-stack solutions with RESTful APIs and deployed on AWS cloud platform</li>
              <li>Developed multi-tenant systems supporting 300+ users across 4 organizations with database-driven architecture</li>
              <li>Reduced operational costs by $3K/year through process improvement initiatives and internal tool development</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3>Cybersecurity Engineer</h3>
            <div className="meta">CyberLab, University of Adelaide | July 2025 - Oct 2025</div>
            <ul>
              <li>Engineered Unity 3D simulation with complex UI components and real-time data visualization</li>
              <li>Built RESTful web services using Flask and containerized applications with Docker</li>
              <li>Developed automated deployment solutions reducing setup time from 2+ hours to under 5 minutes</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3>Website & Content Manager</h3>
            <div className="meta">Cloudary Corporation | Apr 2023 - Mar 2024</div>
            <ul>
              <li>Maintained corporate WordPress site with daily bilingual content updates (Chinese and English)</li>
              <li>Collaborated with design teams to optimize user experience and ensure design consistency</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>ReactJS</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Databases</h4>
              <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools</h4>
              <ul>
                <li>Docker</li>
                <li>AWS</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h2>Contact</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:hermantokho2@gmail.com">hermantokho2@gmail.com</a><br />
            <strong>Phone:</strong> 0451557168<br />
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hermanto-kho-83974b201/" target="_blank" rel="noopener noreferrer">hermanto-kho</a><br />
            <strong>GitHub:</strong> <a href="https://github.com/IamHermanto" target="_blank" rel="noopener noreferrer">IamHermanto</a><br />
            <strong>Location:</strong> Adelaide, South Australia
          </p>
        </div>
      </div>
    </main>
  )
}

export default Resume