import './PostPage.css'

function AiOverhyped() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>AI is Overhyped (For Now)</h1>
        <time>Mar 20, 2020</time>

        <p>
          "AI" and "Machine Learning" are the buzzwords of the decade. Every startup 
          claims to use AI. Every job posting mentions machine learning. But let's 
          be real - most of it is overhyped.
        </p>

        <h2>The Reality Check</h2>
        <p>
          Most "AI" in production is just if-else statements dressed up in fancy 
          marketing. True machine learning requires massive datasets, significant 
          compute power, and expertise that most companies don't have.
        </p>

        <h2>What AI Can't Do (Yet)</h2>
        <ul>
          <li>Write production-quality code</li>
          <li>Understand context and nuance like humans</li>
          <li>Be creative in any meaningful way</li>
          <li>Replace developers or knowledge workers</li>
        </ul>

        <h2>What It's Actually Good For</h2>
        <ul>
          <li>Pattern recognition in large datasets</li>
          <li>Recommendation systems (Netflix, Spotify)</li>
          <li>Image classification</li>
          <li>Paraphrasing and grammar fixing (I use it for this!)</li>
        </ul>

        <p>
          The technology will improve. But right now, if someone tells you their 
          product is "powered by AI," take it with a grain of salt.
        </p>
      </article>
    </main>
  )
}

export default AiOverhyped