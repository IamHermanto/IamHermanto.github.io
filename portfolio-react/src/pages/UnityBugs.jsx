import './PostPage.css'

function UnityBugs() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Weird Unity Bugs That Annoy Me</h1>
        <time>Jan 4, 2026</time>

        <p>
          After years of working with Unity, you get used to the quirks. Here are 
          some annoying bugs I've encountered recently in Unity 6.
        </p>

        <h2>Disappearing Animation Events</h2>
        <p>
          <strong>Problem:</strong> Animation events randomly disappear from the 
          Inspector. They're still there in the animation clip, but the Inspector 
          just... doesn't show them.
        </p>
        <p>
          <strong>Workaround:</strong> Close and re-enable the Animation window. 
          The events magically reappear. No idea why this happens, but it's been 
          a thing for multiple Unity versions now.
        </p>

        <h2>Phantom Null Reference Exceptions</h2>
        <p>
          <strong>Problem:</strong> Console spamming NullReferenceException errors 
          that seem to originate from the Inspector itself. Not from my code.
        </p>
        <p>
          <strong>Reality:</strong> The game runs perfectly fine. No actual issues. 
          Just Unity's Inspector throwing errors for no apparent reason.
        </p>
        <p>
          <strong>Solution:</strong> Ignore it and move on. If the game works, it works.
        </p>

        <h2>The Takeaway</h2>
        <p>
          Unity has its share of editor quirks. Learn to distinguish between 
          "this is actually broken" and "Unity is just being Unity." Don't waste 
          hours debugging problems that aren't really problems.
        </p>
      </article>
    </main>
  )
}

export default UnityBugs