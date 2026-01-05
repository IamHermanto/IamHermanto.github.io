import './PostPage.css'

function PlayTheBall() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Play the Ball, Not the Man</h1>
        <time>Oct 20, 2019</time>

        <p>
          Years ago, on the rules page of an online forum, I read something that stuck with me: 
          "Play the ball, not the man."
        </p>

        <h2>Example: Playing the Ball</h2>
        <pre><code>{`Hi Bob, I'd agree with your point A, but your point B contradicts C and D, 
which I outlined above. How can you reconcile the two?`}</code></pre>

        <h2>Example: Playing the Man</h2>
        <pre><code>{`Hey Bob-a-job, you fuckstick, can you even FUCKING READ you idiot? 
Did your mum drop you on your head as a fucking baby? You've totally 
ignored points C and D. Your whole argument is fucking WORTHLESS.`}</code></pre>

        <p>
          Overall, although it's a close call, most would agree the former tone is more 
          conducive to good dialogue and is more likely to set the conversation in a 
          direction where both parties will get the best out of it.
        </p>

        <h2>On Tone Policing</h2>
        <p>
          Some would dismiss "play the ball not the person" as tone-policing. The Geek 
          Feminism wiki states: "The tone argument is a form of derailment... because the 
          tone of a statement is independent of the content."
        </p>

        <p>
          I'd largely disagree. While tone may theoretically be independent of content, 
          it's not how humans take it in practice. The recipient of a hostile message is 
          unlikely to say "wait, let me separate the tone from the content." Maybe they 
          should, but they won't.
        </p>

        <p>
          It goes on to say that drawing attention to tone rather than content can allow 
          others to avoid engaging with sound arguments. While true, poor tone alone will 
          do the same thing to itself, without anyone drawing attention to it.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          Pulling someone up on mild poor tone may be a red herring. But pulling someone 
          up on a post full of "fucks" and CAPSLOCK is a pretty fair call.
        </p>

        <p>
          I think the whole moral zeitgeist will move forward more quickly if we play 
          the ball not the person, and keep tone on the nice side of the spectrum.
        </p>

        <p>
          If you disagree, fuck you. Kidding ;)
        </p>
      </article>
    </main>
  )
}

export default PlayTheBall