import './PostPage.css'

function InstallFestCommands() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>InstallFest Terminal Commands Explained</h1>
        <time>Jul 14, 2019</time>

        <p className="post-series">This post is part of a series</p>

        <p>
          Throughout the Rails blog tutorial, you'll use several command line tools and copy/paste 
          various commands into the terminal. Here's a more detailed explanation of each command.
        </p>

        <h2>rails</h2>
        <p>
          When you install the Rails gem, you also get the <code>rails</code> command line tool - 
          aptly named... wait for it... rails. At some point, read the full documentation.
        </p>

        <p>Here's what we use in the tutorial:</p>

        <h3>Create a New App</h3>
        <pre><code>{`rails new quick_blog -T`}</code></pre>
        <p>
          This creates a folder called 'quick_blog' in the current directory with a new Rails 
          application inside it. The <code>-T</code> option means we don't include Test::Unit files. 
          Test::Unit is the default unit testing framework for Rails - though most developers prefer 
          RSpec instead, which is what we use in this blog.
        </p>

        <h3>Start Our Local Webserver</h3>
        <pre><code>{`rails server`}</code></pre>
        <p>
          Or <code>rails s</code> for short. This launches the WEBrick web server, allowing us to 
          access our app through the browser. WEBrick comes bundled with Ruby, making it the easiest 
          webserver to use for our new blog.
        </p>
        <p>Type <code>Control-C</code> to stop the server.</p>

        <h3>Generate Blog Post Files and Migrations</h3>
        <pre><code>{`rails g scaffold Post title body:text`}</code></pre>
        <p>
          Short for <code>rails generate</code>. The <code>rails g</code> command helps us create 
          controllers, views, models, and more.
        </p>
        <p>
          The scaffold option creates a full set including a model file, controller file, view files, 
          route definitions, and a database migration file.
        </p>
        <p>
          After scaffold, we specify the name of our model (Post), along with the name:type pairs we 
          want as fields in our posts database table.
        </p>
        <p>
          Since we don't specify a type for title, it will use the default type of string.
        </p>

        <h3>Generate Comments Model, Controller and Routes</h3>
        <pre><code>{`rails generate resource Comment post:references body:text`}</code></pre>
        <p>
          We've opted for the longer <code>rails generate</code> option, but it's exactly the same 
          as <code>rails g</code>. We've specified <code>resource</code> this time, rather than 
          <code>scaffold</code>.
        </p>
        <p>
          <code>resource</code> generates all the same stuff as <code>scaffold</code>, except it 
          leaves out the view files. We don't need view files for Comments because comments aren't 
          viewed in their own right. To view comments, we'll manually add code to our Post view files.
        </p>
        <p>
          Note the <code>post:references</code> pair says that a Comment should have a 
          <code>post_id</code> foreign key field.
        </p>

        <h2>rake (short for 'Ruby Make')</h2>
        <p>
          Rake helps with common admin tasks like compiling assets, creating/updating databases, 
          clearing temp data, and more. Most commonly, it's used for handling database migrations.
        </p>

        <h3>Update the Database Based on Your Migration Files</h3>
        <pre><code>{`rake db:migrate`}</code></pre>
        <p>
          This looks at the files in your <code>db/migrate/</code> folder and runs the appropriate 
          migration files to get the database up to date.
        </p>
        <p>
          Rails auto-maintains the <code>app/db/schema.rb</code> file, where it keeps track of which 
          migration the database is up to.
        </p>
        <p>
          After running this command, you'll need to restart the rails server (<code>Control-C</code> to 
          stop, <code>rails s</code> to start).
        </p>

        <h2>bundle exec</h2>
        <p>
          If you're having to prefix your rake commands with <code>bundle exec</code>, there's a 
          specific reason related to gem dependencies and version management.
        </p>

        <h2>git (version control)</h2>
        <p>
          Several git commands are used in the tutorial, but I won't cover git here. If you're not 
          already familiar with git, you'd best learn it before writing another line of code, in any 
          language!
        </p>
        <p>Tower made a great git cheat sheet.</p>

        <h2>heroku</h2>
        <p>
          The heroku command line tool is used to interact with Heroku's server, to put our blog 
          live and publish changes. I've done a separate post covering the heroku commands.
        </p>
      </article>
    </main>
  )
}

export default InstallFestCommands