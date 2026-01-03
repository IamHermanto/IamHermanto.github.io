import './PostPage.css'

function CssFlexboxCenter() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>The Definitive Guide to Centering Things with Flexbox</h1>
        <time>Aug 5, 2019</time>

        <p>
          Centering elements in CSS used to be a nightmare. Flexbox changed everything. 
          Here's how to center anything, anywhere, every time.
        </p>

        <h2>Center Horizontally and Vertically</h2>
        <p>
          The most common use case - centering something both ways:
        </p>

        <pre><code>{`.container {
  display: flex;
  justify-content: center;  /* horizontal */
  align-items: center;      /* vertical */
  height: 100vh;            /* or any height */
}`}</code></pre>

        <p>
          That's it. No margin tricks, no absolute positioning, no transforms. Just works.
        </p>

        <h2>Center Horizontally Only</h2>
        <pre><code>{`.container {
  display: flex;
  justify-content: center;
}`}</code></pre>

        <h2>Center Vertically Only</h2>
        <pre><code>{`.container {
  display: flex;
  align-items: center;
  height: 100vh;  /* needs a height */
}`}</code></pre>

        <h2>Center Multiple Items</h2>
        <p>
          Want to center multiple items with space between them?
        </p>

        <pre><code>{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;  /* spacing between items */
}`}</code></pre>

        <h2>The Old Way (Don't Do This)</h2>
        <p>
          Before flexbox, we did terrible things like:
        </p>

        <pre><code>{`/* The bad old days */
.container {
  position: relative;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`}</code></pre>

        <p>
          This works but it's clunky and takes elements out of document flow. Use flexbox instead.
        </p>

        <h2>Common Mistakes</h2>

        <h3>Forgetting the Height</h3>
        <p>
          Vertical centering needs the container to have a height:
        </p>

        <pre><code>{`/* This won't center vertically */
.container {
  display: flex;
  align-items: center;
  /* No height! */
}

/* This will */
.container {
  display: flex;
  align-items: center;
  height: 400px;
}`}</code></pre>

        <h3>Using text-align on Flex Containers</h3>
        <p>
          <code>text-align: center</code> doesn't work on flex containers. Use <code>justify-content</code> instead.
        </p>

        <h2>Browser Support</h2>
        <p>
          Flexbox is supported in all modern browsers. If you need to support IE10 or earlier... 
          I'm sorry. Use the old transform method.
        </p>

        <p>
          For everything else, flexbox is the answer.
        </p>
      </article>
    </main>
  )
}

export default CssFlexboxCenter