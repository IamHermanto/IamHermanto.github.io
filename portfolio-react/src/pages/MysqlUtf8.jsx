import './PostPage.css'

function FlaskDebug() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Enable Flask Debug Mode Without Security Warnings</h1>
        <time>Jul 18, 2019</time>

        <p>
          When developing Flask applications, debug mode is incredibly useful - it provides detailed 
          error pages, auto-reloads on code changes, and an interactive debugger. But enabling it 
          can be confusing for newcomers.
        </p>

        <h2>The Problem</h2>
        <p>
          You might try to enable debug mode like this:
        </p>

        <pre><code>{`app = Flask(__name__)
app.debug = True
app.run()`}</code></pre>

        <p>
          This works, but it's not the recommended approach and you'll get security warnings.
        </p>

        <h2>The Better Way</h2>
        <p>
          Use environment variables instead:
        </p>

        <pre><code>{`export FLASK_APP=app.py
export FLASK_ENV=development
flask run`}</code></pre>

        <p>
          Or on Windows:
        </p>

        <pre><code>{`set FLASK_APP=app.py
set FLASK_ENV=development
flask run`}</code></pre>

        <h2>Why This Matters</h2>
        <p>
          Setting <code>FLASK_ENV=development</code> automatically enables:
        </p>
        <ul>
          <li>Debug mode</li>
          <li>Auto-reloader</li>
          <li>Better error messages</li>
        </ul>

        <p>
          And it makes it clear you're in development mode, preventing accidental deployment 
          with debug enabled.
        </p>

        <h2>Even Better: Use a .env File</h2>
        <p>
          For a more permanent solution, create a <code>.env</code> file:
        </p>

        <pre><code>{`FLASK_APP=app.py
FLASK_ENV=development`}</code></pre>

        <p>
          Then install <code>python-dotenv</code>:
        </p>

        <pre><code>{`pip install python-dotenv`}</code></pre>

        <p>
          Flask will automatically load environment variables from <code>.env</code> when you run 
          <code>flask run</code>.
        </p>

        <p>
          Just remember to add <code>.env</code> to your <code>.gitignore</code> so you don't 
          accidentally commit sensitive configuration!
        </p>
      </article>
    </main>
  )
}

export default FlaskDebug