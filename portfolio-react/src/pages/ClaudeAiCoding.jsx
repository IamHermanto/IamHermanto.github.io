import './PostPage.css'

function ClaudeAiCoding() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Claude is Actually Good at Coding Now</h1>
        <time>Oct 20, 2025</time>

        <p>
          I've been using Claude for coding assistance and... it's actually good? 
          Like, genuinely helpful, not just a gimmick.
        </p>

        <h2>What I Use It For</h2>
        <ul>
          <li><strong>Debugging:</strong> "Why isn't this working?" with code snippet</li>
          <li><strong>Boilerplate:</strong> Generate repetitive code patterns</li>
          <li><strong>Learning:</strong> Explain unfamiliar codebases or concepts</li>
          <li><strong>Refactoring:</strong> "How can I make this cleaner?"</li>
          <li><strong>Documentation:</strong> Generate docstrings and README files</li>
        </ul>

        <h2>What It's Bad At</h2>
        <ul>
          <li>Large-scale architecture decisions</li>
          <li>Understanding full project context</li>
          <li>Getting things right 100% of the time (always verify!)</li>
          <li>Knowing about very recent libraries/updates</li>
        </ul>

        <h2>The Right Mindset</h2>
        <p>
          It's a tool, not a replacement. Like having a very knowledgeable 
          colleague who sometimes hallucinates. Trust but verify.
        </p>

        <p>
          Developers who refuse to use AI tools are handicapping themselves. 
          Developers who blindly trust AI output are creating tech debt.
        </p>

        <p>
          Find the balance.
        </p>
      </article>
    </main>
  )
}

export default ClaudeAiCoding