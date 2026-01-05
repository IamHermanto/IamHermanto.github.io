import './PostPage.css'

function PassengerPermissions() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Fix Rails Passenger Permissions Error - Running as User 'nobody'</h1>
        <time>Sep 7, 2019</time>

        <h2>The Error</h2>
        <p>
          When setting up a Rails site with Passenger, you get this message in your browser:
        </p>

        <pre><code>{`This web application process is being run as user 'nobody' and group 'nobody' 
and must be able to access its application root directory 
'/var/www/vhosts/mysite.com/httpdocs'. However this directory is not accessible 
because it has wrong permissions. Please fix these permissions first.`}</code></pre>

        <h2>My Setup</h2>
        <p>
          Media Temple DV 4.0, running CentOS 5.8, using Passenger 4.0.10. If your setup 
          is too different, this might not apply.
        </p>

        <h2>The Explanation</h2>
        <p>
          The contents of <code>/var/www/vhosts/mysite.com/httpdocs</code> were owned by 
          <code>root:root</code>. This happened because I'd logged in as root and SFTP'd 
          up the files. (Note to self: don't do that!)
        </p>

        <p>
          Apache runs as the root user. However, Passenger won't run as root for security reasons. 
          So what user does Passenger run as?
        </p>

        <p>
          The Passenger website says: "to make a long story short: it will switch to the owner 
          of the file config/environment.rb. We rely on the system administrator to set the 
          correct owner on that file."
        </p>

        <p>
          Because Passenger won't run as <code>root:root</code>, it falls back to running 
          as <code>nobody:nobody</code>.
        </p>

        <h2>The Solution: Change the Owner</h2>
        <p>
          Find the owner/group of your Document Root (httpdocs folder), then recursively set 
          everything inside that folder to be owned by the same user/group.
        </p>

        <p>
          For me, it meant <code>cd</code>-ing into the correct directory, then running:
        </p>

        <pre><code>{`chown -R my_user:psaserv ./httpdocs`}</code></pre>

        <p>
          Replace <code>my_user:psaserv</code> with your <code>username:groupname</code>.
        </p>

        <p>
          I didn't need to restart Passenger, Apache or anything else. Just refresh 
          the browser and it worked.
        </p>
      </article>
    </main>
  )
}

export default PassengerPermissions