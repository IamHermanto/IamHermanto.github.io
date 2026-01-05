import './PostPage.css'

function ExploringPython() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Exploring Python - First Impressions</h1>
        <time>Nov 15, 2019</time>

        <p>
          As a data analytics student, Python is unavoidable. I've been diving deeper 
          into it lately and here are my thoughts.
        </p>

        <h2>What I Like</h2>
        <ul>
          <li><strong>Readability:</strong> The syntax is so clean. No curly braces, no semicolons.</li>
          <li><strong>Libraries:</strong> pandas, numpy, scikit-learn - there's a library for everything</li>
          <li><strong>Community:</strong> Stack Overflow has answers for every Python question imaginable</li>
        </ul>

        <h2>What Trips Me Up</h2>
        <ul>
          <li><strong>Indentation:</strong> Coming from other languages, forgetting that whitespace matters has caused many errors</li>
          <li><strong>Dynamic typing:</strong> Sometimes I miss having the compiler catch type errors</li>
          <li><strong>Package management:</strong> pip, conda, virtualenv - it can get confusing</li>
        </ul>

        <h2>Simple Example</h2>
        <pre><code>{`import pandas as pd

# Load data
df = pd.read_csv('sales.csv')

# Quick analysis
print(df.describe())
print(df.groupby('region')['sales'].sum())`}</code></pre>

        <p>
          The amount you can do in just a few lines is impressive. I can see why 
          Python has become the go-to language for data work.
        </p>
      </article>
    </main>
  )
}

export default ExploringPython