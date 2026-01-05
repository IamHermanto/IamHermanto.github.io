import './PostPage.css'

function PixelArt() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Learning Pixel Art for Game Development</h1>
        <time>Jan 4, 2026</time>

        <p>
          For my indie game, I decided to do the art myself. Pixel art seemed 
          approachable. How hard could it be?
        </p>

        <h2>It's Harder Than It Looks</h2>
        <p>
          Every pixel matters. There's no hiding behind high resolution. 
          Bad pixel art is immediately obvious.
        </p>

        <h2>What I've Learned</h2>
        <ul>
          <li><strong>Start small:</strong> 16x16 or 32x32 sprites first</li>
          <li><strong>Limited palettes:</strong> Fewer colors = more cohesive look</li>
          <li><strong>Reference constantly:</strong> Study games you admire</li>
          <li><strong>Animation is key:</strong> Even simple movement brings sprites to life</li>
        </ul>

        <h2>Tools I Use</h2>
        <ul>
          <li>Aseprite (worth every penny)</li>
          <li>Lospec for color palettes</li>
          <li>Pinterest for references</li>
        </ul>

        <h2>Progress</h2>
        <p>
          My first sprites were terrible. Now they're... less terrible. 
          Improvement is slow but visible. That's what matters.
        </p>
      </article>
    </main>
  )
}

export default PixelArt