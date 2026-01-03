import './About.css'

function About() {
  return (
    <main className="container">
      <div className="about-content">
        <h1>About</h1>
        
        <div className="about-text">
          <p>
            I'm Hermanto, a Full-Stack Developer with a Master's in Computing & Innovation 
            from the University of Adelaide. I build scalable web applications and data-driven solutions 
            across the full technology stack.
          </p>
          <p>
            Currently based in Adelaide, South Australia, I combine modern web development 
            with data analytics expertise to create impactful software solutions.
          </p>
        </div>

        <h2>What I Do</h2>
        <p>I specialize in full-stack development with a focus on:</p>
        <ul>
          <li><strong>Web Development</strong> - Building responsive applications with React, TypeScript, and modern JavaScript frameworks</li>
          <li><strong>Backend Systems</strong> - Architecting RESTful APIs, database design, and cloud deployments on AWS</li>
          <li><strong>Data Solutions</strong> - Creating analytics dashboards, implementing machine learning models, and optimizing data workflows</li>
        </ul>

        <h2>Technical Approach</h2>
        <p>
          I work with ReactJS, TypeScript, JavaScript, Python, and various databases including MySQL and PostgreSQL. 
          My approach combines Agile development practices with user-centered design to deliver scalable, 
          maintainable solutions.
        </p>
        <p>
          From containerization with Docker to deployment automation, I focus on building systems that are 
          both powerful and practical.
        </p>

        <h2>Background</h2>
        <p>
          I hold dual degrees: a Master's from the University of Adelaide and a Bachelor's in Computer Science 
          (Data Analytics) from Asia Pacific University with dual award from Staffordshire University, UK.
        </p>
        <p>
          My experience spans multiple sectors - from construction management systems to educational platforms, 
          e-commerce solutions to cybersecurity projects. I'm active in the Adelaide Game Developers community 
          and currently developing an indie game project using Unity.
        </p>

        <h2>Get in Touch</h2>
        <p>
          Looking to collaborate on a project? I'm available for full-stack development, data analytics, 
          and system architecture work. Reach out at{' '}
          <a href="mailto:hermantokho2@gmail.com">hermantokho2@gmail.com</a> or connect on{' '}
          <a href="https://www.linkedin.com/in/hermanto-kho-83974b201/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
    </main>
  )
}

export default About