import './PostPage.css'

function SassPercentages() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Dividing Percentages in Sass</h1>
        <time>May 28, 2019</time>

        <p>
          I was trying to divide two percentages in SASS (relatively new to it at the time). 
          I had 7 columns for days of the week and wanted to do something like this:
        </p>

        <pre><code>{`width: (100/7)%; // did NOT work`}</code></pre>

        <p>
          After a bit of searching, it turns out SASS has its own percentage function built in.
        </p>

        <h2>The Solution</h2>
        <p>
          If you need to divide percentages or convert fractions to percent in SASS/SCSS, 
          it's as simple as:
        </p>

        <pre><code>{`width: percentage(1/7);`}</code></pre>

        <p>Too easy!</p>

        <h2>It Also Works With Variables and Units</h2>
        <p>
          The percentage function also works with variables and pixel units:
        </p>

        <pre><code>{`width: percentage(360px / 960px);`}</code></pre>

        <p>
          This makes it incredibly flexible for responsive designs and grid calculations.
        </p>
      </article>
    </main>
  )
}

export default SassPercentages