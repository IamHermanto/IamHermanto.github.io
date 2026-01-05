import './PostPage.css'

function QuestionsEmployers() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Questions to Ask Potential Employers</h1>
        <time>Jan 5, 2026</time>

        <p>
          I've done two job hunts recently. Here are the questions I ask 
          in interviews to evaluate if a company is right for me.
        </p>

        <h2>About the Business</h2>
        <ul>
          <li>What does the business do? Who's the target market?</li>
          <li>How long have you been around? Are you profitable?</li>
          <li>Have you taken VC? Who drives strategic direction?</li>
        </ul>

        <h2>About the Team</h2>
        <ul>
          <li>How big is the dev team? What roles?</li>
          <li>How long have core members been there?</li>
          <li>Who would I report to and work with most closely?</li>
        </ul>

        <h2>About the Work</h2>
        <ul>
          <li>What tech stack are you using?</li>
          <li>How do you manage technical debt and code quality?</li>
          <li>What development methodology do you follow?</li>
        </ul>

        <h2>About Culture</h2>
        <ul>
          <li>Are you open to remote work? Does anyone actually do it?</li>
          <li>What are typical work hours? Is flexibility real?</li>
          <li>Do you pay for conferences and professional development?</li>
        </ul>

        <h2>About Growth</h2>
        <ul>
          <li>What will I learn technically in this role?</li>
          <li>What are career growth opportunities?</li>
          <li>How do you measure performance?</li>
        </ul>

        <p>
          A good interview is a two-way evaluation. Ask the hard questions.
        </p>
      </article>
    </main>
  )
}

export default QuestionsEmployers