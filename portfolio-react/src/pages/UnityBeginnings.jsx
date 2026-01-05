import './PostPage.css'

function UnityBeginnings() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Getting Into Game Development with Unity</h1>
        <time>Oct 25, 2019</time>

        <p>
          COVID has everyone stuck at home and I'm going a bit stir crazy. So I decided 
          to finally try something I've always wanted to do: game development.
        </p>

        <p>
          I picked Unity because it seems to be the industry standard for indie games, 
          and there's a ton of tutorials on YouTube. How hard could it be?
        </p>

        <h2>It's Hard</h2>
        <p>
          Turns out, very hard. The learning curve is steep. There's so much to learn - 
          C# scripting, the Unity editor, physics, animations, UI systems, and that's 
          just scratching the surface.
        </p>

        <p>
          I've been watching Brackeys tutorials on YouTube (highly recommend) and following 
          along. Made a simple platformer where a cube jumps on other cubes. It's not much, 
          but seeing something move on screen that I coded myself is incredibly satisfying.
        </p>

        <h2>What I've Learned So Far</h2>
        <ul>
          <li>GameObjects and Components are the building blocks of everything</li>
          <li>The Update() function runs every frame - be careful what you put in there</li>
          <li>Physics can be janky if you don't use FixedUpdate() for rigidbody stuff</li>
          <li>Prefabs are your friend for reusable objects</li>
        </ul>

        <p>
          Still a long way to go, but I'm enjoying the process. There's something different 
          about game dev compared to web dev - it feels more creative somehow.
        </p>
      </article>
    </main>
  )
}

export default UnityBeginnings