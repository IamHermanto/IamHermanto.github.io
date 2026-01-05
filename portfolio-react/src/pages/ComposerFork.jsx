import './PostPage.css'

function ComposerFork() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Composer Error: Using a Forked Repository? Use the Original Package Name</h1>
        <time>Oct 8, 2019</time>

        <p>
          I was trying to use my own forked repository with Composer. I had forked the package 
          <code>kamisama/cake-resque</code> to my own GitHub account and was trying to include 
          my version in my project.
        </p>

        <h2>The Broken composer.json</h2>
        <pre><code>{`{
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/joshuapaling/Cake-Resque.git"
        }
    ],
    "require": {
        "joshuapaling/cake-resque": "dev-master as 3.3.8"
    }
}`}</code></pre>

        <h2>The Error</h2>
        <pre><code>{`The requested package joshuapaling/cake-resque could not be found 
in any version, there may be a typo in the package name.`}</code></pre>

        <h2>The Solution</h2>
        <p>
          If you use your own repository, you still need to use the <strong>original package name</strong>. 
          In my case, <code>kamisama/cake-resque</code> rather than <code>joshuapaling/cake-resque</code>.
        </p>

        <h2>The Working composer.json</h2>
        <pre><code>{`{
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/joshuapaling/Cake-Resque.git"
        }
    ],
    "require": {
        "kamisama/cake-resque": "dev-master as 3.3.8"
    }
}`}</code></pre>

        <h2>Why?</h2>
        <p>
          The package name is defined in the package's own <code>composer.json</code> file. 
          Even though I'd forked it to my GitHub account at a new URL, that hasn't changed 
          the package's name from Composer's perspective.
        </p>

        <p>
          A simple error - but I was new to Composer and it wasn't clear at first!
        </p>
      </article>
    </main>
  )
}

export default ComposerFork