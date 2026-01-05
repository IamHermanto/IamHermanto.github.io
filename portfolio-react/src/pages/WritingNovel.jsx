import './PostPage.css'

function WritingNovel() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>I Started Writing a Novel</h1>
        <time>Jan 5, 2020</time>

        <p>
          Plot twist: the data analytics/game dev guy is also writing fiction. 
          Started writing a novel for fun during the holidays. No idea if it'll 
          go anywhere, but the process is surprisingly therapeutic.
        </p>

        <h2>Why Writing?</h2>
        <p>
          Coding is logical and structured. Writing fiction is the opposite - it's 
          messy, emotional, and there's no compiler to tell you if you're doing 
          it wrong. I needed that creative outlet.
        </p>

        <h2>What I'm Learning</h2>
        <ul>
          <li>Show, don't tell (harder than it sounds)</li>
          <li>Characters need flaws to be interesting</li>
          <li>Plot outlines help, but characters will surprise you</li>
          <li>First drafts are supposed to be terrible</li>
        </ul>

        <p>
          It's a different kind of problem-solving. Instead of debugging code, 
          you're debugging plot holes and character motivations.
        </p>
      </article>
    </main>
  )
}

export default WritingNovel