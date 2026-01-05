import './PostPage.css'

function FrontendFatigue() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>I Don't Like Frontend Development (There, I Said It)</h1>
        <time>Mar 15, 2024</time>

        <p>
          Controversial opinion time: I don't enjoy frontend development. 
          CSS is frustrating, JavaScript frameworks change every week, and 
          making things "pixel perfect" drives me insane.
        </p>

        <h2>What I Don't Like</h2>
        <ul>
          <li><strong>CSS:</strong> Why is centering a div still hard in 2024?</li>
          <li><strong>Browser inconsistencies:</strong> Works in Chrome, breaks in Safari</li>
          <li><strong>Framework churn:</strong> React, Vue, Svelte, Solid, Qwik... pick one already</li>
          <li><strong>Design implementation:</strong> "Can you move this 2 pixels to the left?"</li>
        </ul>

        <h2>What I Prefer</h2>
        <p>
          Backend work. APIs, databases, system design, algorithms. There's something 
          satisfying about building robust systems that just work, without worrying 
          about how they look.
        </p>

        <h2>The Reality</h2>
        <p>
          As a fullstack developer, I can't avoid frontend entirely. I've made 
          peace with it. I use component libraries (MUI, Tailwind) to minimize 
          CSS pain. I pick one framework (React) and stick with it.
        </p>

        <p>
          But if I could be a pure backend developer? I'd take it in a heartbeat.
        </p>
      </article>
    </main>
  )
}

export default FrontendFatigue