import './PostPage.css'

function CssFixedWidth() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Fixing Truncated Fixed-Width Headers</h1>
        <time>CSS Solution</time>

        <h2>The Problem</h2>
        <p>
          Sometimes when your window is narrow, you'll find that your fixed-width header or 
          content appears to get truncated when you scroll to the right.
        </p>

        <div className="image-comparison">
          <img src="/css-problem.png" alt="Before and after comparison showing truncated header fix" />
        </div>

        <h2>The Solution</h2>
        <p>Add a CSS rule to ensure that your body element is at least as wide as the fixed-width area of your site:</p>
        
        <pre><code>{`body {
    min-width: 980px;
}`}</code></pre>

        <h2>What's Happening Here?</h2>
        <p>
          Let's say the fixed-width area of your site is 980px, but your window has been resized to 400px.
        </p>
        <p>
          By default, your body element will be the width of the window – ie, 400px. And if a block element 
          doesn't have a specified width, it will default to the width of its container.
        </p>
        <p>
          So in this case, the black background has been applied to a div which is a child of the body element, 
          meaning it has a default width of 400px.
        </p>
        <p>
          Of course, when you scroll over to the right, you're scrolling past that 400px mark, and therefore 
          scrolling beyond the width of the div with the black background. This is what makes it appear as 
          though your content is truncated.
        </p>
        <p>
          By specifying a min-width on your body, the body element (and therefore its children without 
          explicit widths) will always be at least as wide as you need it to be, no matter how small 
          you resize the window.
        </p>
      </article>
    </main>
  )
}

export default CssFixedWidth