import './PostPage.css'

function AgileScrum() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Agile Methodology and Scrum - What I Learned at University</h1>
        <time>Nov 5, 2019</time>

        <p>
          I took a project management course at Asia Pacific University in Malaysia. 
          The professor was... a bit eccentric, but the content was genuinely interesting. 
          We covered both traditional PMBOK methodology and Agile/Scrum.
        </p>

        <h2>Traditional vs Agile</h2>
        <p>
          PMBOK (Project Management Body of Knowledge) is very structured - you plan 
          everything upfront, create detailed documentation, and follow a linear process. 
          It works well for construction or manufacturing where requirements don't change.
        </p>

        <p>
          Agile flips this on its head. You work in short cycles (sprints), deliver 
          working software frequently, and adapt to changes as they come.
        </p>

        <h2>How Scrum Works</h2>
        <ul>
          <li><strong>Sprint Planning:</strong> Team decides what to work on for the next 2 weeks</li>
          <li><strong>Daily Standup:</strong> 15-minute meeting - what did you do, what will you do, any blockers?</li>
          <li><strong>Sprint Review:</strong> Demo what you built to stakeholders</li>
          <li><strong>Retrospective:</strong> What went well? What could improve?</li>
        </ul>

        <h2>My Take</h2>
        <p>
          Honestly, for software development, I'd probably just follow Agile with daily 
          standups. The formal ceremonies can feel like overhead for small teams, but 
          the core principle of "deliver working software frequently" makes total sense.
        </p>

        <p>
          The standup is the most valuable part - it keeps everyone aligned and surfaces 
          blockers before they become big problems.
        </p>
      </article>
    </main>
  )
}

export default AgileScrum