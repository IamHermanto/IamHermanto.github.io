import './PostPage.css'

function DiscoveringMoximo() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>New Opportunity: Fullstack Developer at Moximo</h1>
        <time>Feb 5, 2024</time>

        <p>
          Big news! I got a fullstack developer position at Moximo. Finally a 
          real development role where I can actually code.
        </p>

        <h2>What Moximo Does</h2>
        <p>
          They build B2B systems - construction management, school management, 
          HR payroll, POS systems. Varied work, lots of different clients.
        </p>

        <h2>Tech Stack</h2>
        <ul>
          <li>PHP with Laravel</li>
          <li>Filament for admin panels</li>
          <li>React/TypeScript for frontends</li>
          <li>MySQL/PostgreSQL</li>
          <li>AWS for deployment</li>
        </ul>

        <h2>Learning Curve</h2>
        <p>
          Laravel is new to me. Coming from Python/Flask, PHP feels... different. 
          But Filament is amazing for building admin interfaces quickly. 
          Already started learning and building things.
        </p>

        <p>
          Excited for this new chapter!
        </p>
      </article>
    </main>
  )
}

export default DiscoveringMoximo