import './PostPage.css'

function SqliteDump() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>How to Dump a SQLite Database to SQL File</h1>
        <time>Sep 2, 2019</time>

        <p>
          Quick tip for exporting your SQLite database to a SQL dump file.
        </p>

        <h2>Step 1: Navigate to Your Database Directory</h2>
        <p>
          Open Terminal and <code>cd</code> into your app's <code>db</code> directory 
          where your SQLite database files are stored:
        </p>

        <pre><code>{`cd /path/to/rails_app/db`}</code></pre>

        <h2>Step 2: Run the Dump Command</h2>
        <p>
          Run this command (adjust the parameters - the first is your existing database file, 
          the second is the path to the dump file you want to create):
        </p>

        <pre><code>{`sqlite3 development.sqlite3 .dump > /Users/username/Desktop/database.sql`}</code></pre>

        <h2>Not Just for Rails</h2>
        <p>
          This command isn't specific to Rails. Just <code>cd</code> into the directory 
          containing your database, or specify the full path to it as the first parameter, 
          and you're good to go.
        </p>
      </article>
    </main>
  )
}

export default SqliteDump