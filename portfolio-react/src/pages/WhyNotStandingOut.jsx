import './PostPage.css'

function WhyNotStandingOut() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Now I See Why I Wasn't Standing Out</h1>
        <time>Jan 3, 2026</time>

        <p>
          After being on the hiring side (even just for interns), I finally 
          understand why my job applications weren't landing.
        </p>

        <h2>My Old Resume Problems</h2>
        <ul>
          <li><strong>Too generic:</strong> "Collaborated across teams" - so did everyone else</li>
          <li><strong>No metrics:</strong> No numbers, no impact, no proof</li>
          <li><strong>Skills dump:</strong> Listed every technology I'd ever touched</li>
          <li><strong>No story:</strong> Just a list of jobs, not a narrative</li>
        </ul>

        <h2>What Actually Stands Out</h2>
        <ul>
          <li><strong>Specific achievements:</strong> "Reduced deployment time from 2 hours to 5 minutes"</li>
          <li><strong>Quantified impact:</strong> Numbers make claims believable</li>
          <li><strong>Relevant skills:</strong> Curated list that matches the job</li>
          <li><strong>Projects:</strong> Live links to real work</li>
        </ul>

        <h2>The Uncomfortable Truth</h2>
        <p>
          If someone else could put their name on your resume and it would 
          still be accurate, it's too generic. Your resume should be 
          impossible to copy.
        </p>
      </article>
    </main>
  )
}

export default WhyNotStandingOut