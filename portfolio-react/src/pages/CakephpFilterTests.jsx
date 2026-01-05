import './PostPage.css'

function CakephpFilterTests() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>How to Run a Single CakePHP Test Case in the Browser</h1>
        <time>Aug 20, 2019</time>

        <p>
          The CakePHP Cookbook mentions that you can filter test cases from the command line, 
          so you don't have to run ALL tests every time.
        </p>

        <p>
          What it doesn't mention is that it's easy to do the same thing in the browser.
        </p>

        <h2>The Solution</h2>
        <p>
          If you're wondering how to filter test cases in the browser, or how to run only a 
          single test case, all you need to do is add the <code>&filter=regularExpression</code> 
          parameter on the end of your URL.
        </p>

        <p>
          Let's say you have a <code>Task</code> model, and you want to test the 
          <code>testAddTask</code> case only, without running through any other test cases 
          in that file. Your URL would look like:
        </p>

        <pre><code>{`http://www.example.com/test.php?case=Model/Task&filter=testAddTask`}</code></pre>

        <h2>Using Regular Expressions</h2>
        <p>
          The <code>filter</code> parameter accepts a regular expression. So let's say you 
          wanted to test only the cases related to delegating tasks:
        </p>

        <pre><code>{`http://www.example.com/test.php?case=Model/Task&filter=*Delegate*`}</code></pre>

        <p>
          This matches all test cases with the word 'Delegate' in the method name. Quick and easy!
        </p>
      </article>
    </main>
  )
}

export default CakephpFilterTests   