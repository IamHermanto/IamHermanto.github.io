import './PostPage.css'

function PythonVirtualEnv() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Python Virtual Environments Explained - Stop Installing Packages Globally</h1>
        <time>Aug 12, 2019</time>

        <p>
          If you're installing Python packages globally with <code>pip install</code>, you're doing 
          it wrong. Virtual environments save you from dependency hell. Here's why and how.
        </p>

        <h2>The Problem</h2>
        <p>
          Imagine you have two projects:
        </p>
        <ul>
          <li>Project A needs Flask 1.0</li>
          <li>Project B needs Flask 2.0</li>
        </ul>

        <p>
          If you install both globally, they'll conflict. One will break. Virtual environments solve this.
        </p>

        <h2>Creating a Virtual Environment</h2>
        <p>
          Python 3 comes with <code>venv</code> built-in:
        </p>

        <pre><code>{`# Create a virtual environment
python -m venv venv

# On Windows
python -m venv venv`}</code></pre>

        <p>
          This creates a <code>venv</code> folder in your project directory containing an isolated 
          Python installation.
        </p>

        <h2>Activating the Virtual Environment</h2>
        <p>
          On macOS/Linux:
        </p>

        <pre><code>{`source venv/bin/activate`}</code></pre>

        <p>
          On Windows:
        </p>

        <pre><code>{`venv\\Scripts\\activate`}</code></pre>

        <p>
          You'll see <code>(venv)</code> appear in your terminal prompt. Now any packages you install 
          will only affect this project.
        </p>

        <h2>Installing Packages</h2>
        <p>
          Once activated, install packages normally:
        </p>

        <pre><code>{`pip install flask
pip install requests
pip install pandas`}</code></pre>

        <p>
          These packages are installed only in this virtual environment, not globally.
        </p>

        <h2>Deactivating</h2>
        <p>
          When you're done working:
        </p>

        <pre><code>{`deactivate`}</code></pre>

        <h2>Requirements.txt</h2>
        <p>
          Save your project's dependencies so others can recreate your environment:
        </p>

        <pre><code>{`# Save current packages
pip freeze > requirements.txt

# Install from requirements.txt
pip install -r requirements.txt`}</code></pre>

        <h2>Don't Commit venv/</h2>
        <p>
          Add this to your <code>.gitignore</code>:
        </p>

        <pre><code>{`venv/
*.pyc
__pycache__/`}</code></pre>

        <p>
          Never commit your virtual environment folder. Other developers should create their own 
          from <code>requirements.txt</code>.
        </p>

        <h2>Why Not Use virtualenv?</h2>
        <p>
          <code>virtualenv</code> is a third-party tool that does the same thing. For Python 3.3+, 
          the built-in <code>venv</code> module is good enough. Use <code>virtualenv</code> only if 
          you need Python 2 support.
        </p>

        <h2>Common Mistakes</h2>

        <h3>Forgetting to Activate</h3>
        <p>
          If you install packages without activating the environment first, they'll install globally. 
          Always check for <code>(venv)</code> in your prompt.
        </p>

        <h3>Activating the Wrong Environment</h3>
        <p>
          If you have multiple projects, make sure you're in the right directory before activating.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          Always use virtual environments. Always. It takes 5 seconds to set up and saves hours of 
          debugging later.
        </p>
      </article>
    </main>
  )
}

export default PythonVirtualEnv