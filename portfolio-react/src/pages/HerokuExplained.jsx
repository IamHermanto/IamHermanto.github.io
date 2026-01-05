import './PostPage.css'

function HerokuExplained() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Heroku Deployment Explained - The WTF Moments</h1>
        <time>Aug 25, 2019</time>

        <p className="post-series">This post is part of a series</p>

        <p>
          Here we'll go over 'WTF' moments from publishing a Rails blog on Heroku. 
          It happens pretty fast - you sign up, install the Heroku toolbelt, run a few 
          commands and then your blog is live.
        </p>

        <h2>WTF?</h2>
        <ul>
          <li>We didn't create a database</li>
          <li>We didn't explicitly upload anything</li>
          <li>We didn't change our database.yml file for production</li>
          <li>We didn't specify anything about what server to connect to</li>
        </ul>

        <h2>Heroku is Unique</h2>
        <p>
          Heroku is a hosting service that doesn't allow write access to the file system. 
          Really. You have no SSH access, no FTP access, no SFTP access.
        </p>

        <p>Everything is done through:</p>
        <ol>
          <li>Heroku's online interface (we only used it to sign up)</li>
          <li>The heroku toolbelt (the command line tool we installed)</li>
        </ol>

        <p>
          If your app needs to handle image uploads, you can't write images to Heroku's server. 
          You have to store them on Amazon S3 or similar.
        </p>

        <h2>The 3 Magic Commands Explained</h2>
        <p>After installing the Heroku toolbelt, we run 3 commands and our app is live:</p>

        <pre><code>{`heroku create
git push heroku master
heroku run rake db:setup`}</code></pre>

        <h3>1. heroku create</h3>
        <p>
          This turns our Rails blog into a Heroku app. Two things to note:
        </p>
        <ul>
          <li>The URL for your live app will be printed in the terminal (like http://frozen-bastion-1730.herokuapp.com/)</li>
          <li>It adds the Heroku server as a remote repository in your git repo</li>
        </ul>

        <h3>2. git push heroku master</h3>
        <p>
          Standard git push - it pushes changes from our local repository to the 
          <code>heroku master</code> remote repository that was created in the previous step.
        </p>

        <h3>3. heroku run rake db:setup</h3>
        <p>
          We're setting up the database via Heroku's toolbelt, using rake to create and 
          setup our database from the migration files.
        </p>

        <h2>The Magic Part</h2>
        <p>
          Sharp coders might have noted that in <code>database.yml</code>, our production 
          config still has SQLite:
        </p>

        <pre><code>{`production:
  adapter: sqlite3
  database: db/production.sqlite3
  pool: 5
  timeout: 5000`}</code></pre>

        <p>
          But Heroku doesn't support SQLite! Here's the magic: Heroku automatically replaces 
          your database.yml file with its own. Yours gets deleted and a Heroku-compatible 
          one is put in its place.
        </p>

        <p>You might want to change that config to:</p>

        <pre><code>{`# production:
  # heroku replaces database.yml
  # so we don't need to specify anything here`}</code></pre>
      </article>
    </main>
  )
}

export default HerokuExplained