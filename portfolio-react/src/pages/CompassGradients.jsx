import './PostPage.css'

function CompassGradients() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Compass CSS3 Background Gradients Not Working in IE 10</h1>
        <time>May 21, 2013</time>

        <p>
          I was using ColorZilla's gradient generator with the SASS/Compass output, and ran into an issue 
          where gradients weren't rendering in IE 10. Here's what the generated code looked like:
        </p>

        <pre><code>{`// needs latest Compass, add '@import "compass"' to your scss
background-color: #cccccc; // Old browsers
@include filter-gradient(#cccccc, #fafafa, vertical); // IE6-9
@include background-image(linear-gradient(top, #cccccc 0%, #fafafa 100%));`}</code></pre>

        <h2>The Root Cause</h2>
        <p>
          IE 10 actually follows the updated W3C specification (surprising, right?), while Compass was still 
          generating code based on the older syntax that other browsers were using.
        </p>

        <p>
          Most browsers at the time implemented gradients based on an earlier W3C candidate recommendation:
        </p>

        <pre><code>{`background-image: linear-gradient(top, #cccccc 0%, #fafafa 100%);`}</code></pre>

        <p>
          Notice the <code>top</code> keyword - it indicates the gradient starts from the top.
        </p>

        <p>
          However, the updated W3C spec (which IE 10 implemented) changed the syntax to indicate direction 
          in terms of where the gradient is heading:
        </p>

        <pre><code>{`background-image: linear-gradient(to bottom, #cccccc 0%, #fafafa 100%);`}</code></pre>

        <p>
          The <code>to bottom</code> replaces <code>top</code>, making the intent clearer.
        </p>

        <h2>Why Compass Failed</h2>
        <p>
          Compass generated CSS using the old syntax for both vendor-prefixed and non-prefixed versions. 
          It didn't generate any <code>-ms-</code> prefix because IE 10 supported unprefixed gradients - 
          but only in the new syntax format. The old format simply didn't work.
        </p>

        <h2>Solutions</h2>

        <h3>Solution 1: Top-to-Bottom Only</h3>
        <p>
          If you're only using top-to-bottom gradients, you're in luck! This is the default direction in 
          both specifications. Just omit the direction entirely:
        </p>

        <pre><code>{`@include background-image(linear-gradient(#cccccc 0%, #fafafa 100%));`}</code></pre>

        <p>
          Older browsers will assume 'top', and IE 10 will assume 'to bottom'. Perfect compatibility!
        </p>

        <h3>Solution 2: Use Plain CSS</h3>
        <p>
          Use ColorZilla's plain CSS output instead of the SASS/Compass version. More verbose, but it works.
        </p>

        <h3>Solution 3: Custom Mixin for -ms- Prefix</h3>
        <p>
          Create a mixin that adds the <code>-ms-</code> prefix to support IE 10's old syntax:
        </p>

        <pre><code>{`@mixin background-image-with-ms($image) {
    @include background-image($image); // Compass default
    background-image: -ms-#{$image}; // IE 10 support
}`}</code></pre>

        <p>Then use it like this:</p>

        <pre><code>{`@include background-image-with-ms(linear-gradient(top, #cccccc 0%, #fafafa 100%));`}</code></pre>

        <p>
          Note: This still outputs incorrect syntax for the non-prefixed version, but works because the 
          <code>-ms-</code> prefix supports the old syntax. Not future-proof, but functional.
        </p>

        <h3>Solution 4: Use Degrees</h3>
        <p>
          Using degree values works across all browsers and both syntax versions:
        </p>

        <ul>
          <li>Top-to-bottom: <code>0deg</code></li>
          <li>Left-to-right: <code>90deg</code></li>
        </ul>

        <p>
          This approach is universal and future-compatible.
        </p>
      </article>
    </main>
  )
}

export default CompassGradients