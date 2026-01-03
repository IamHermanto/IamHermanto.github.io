import './PostPage.css'

function CakephpUnitTests() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Solution to 'Invalid Parameter Number: Number of Bound Variables Does Not Match Number of Tokens' When Running CakePHP Unit Tests</h1>
        <time>Jun 26, 2019</time>

        <p>
          Just came across this error in my CakePHP app. Posting my fix here to help any 
          error code googlers out there.
        </p>

        <h2>The Error</h2>
        <pre><code>{`Invalid parameter number: number of bound variables does not match number of tokens`}</code></pre>

        <h2>The Cause</h2>
        <p>
          Turns out in my case the issue was simply that one of my fixtures had an extra field 
          in the <code>$records</code> array which didn't belong to that model or database table.
        </p>

        <h2>The Solution</h2>
        <p>
          Get rid of that extra field, and the error disappears. Too easy!
        </p>

        <p>
          Double-check your fixture files and make sure all fields in the <code>$records</code> array 
          actually exist in your database schema. One mismatched field is all it takes to trigger this error.
        </p>
      </article>
    </main>
  )
}

export default CakephpUnitTests