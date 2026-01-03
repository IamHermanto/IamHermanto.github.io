import './PostPage.css'

function CakephpMemory() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Solution to Fatal Error - Allowed Memory Size Exhausted in CakePHP FileEngine.php</h1>
        <time>Jun 14, 2019</time>

        <p>
          Just encountered this error in one of my CakePHP apps. I'm documenting my debugging process 
          here for my own reference and to help anyone else googling this error.
        </p>

        <h2>The Error</h2>
        <p>In my CakePHP 2.3 app, every request was throwing:</p>

        <pre><code>{`Fatal error: Allowed memory size of 33554432 bytes exhausted (tried to allocate 32 bytes) 
in /Applications/MAMP/htdocs/BIG/Employee_Management_Website/www/lib/Cake/Cache/Engine/FileEngine.php 
on line 196`}</code></pre>

        <h2>Initial Investigation</h2>
        <p>
          I opened <code>/lib/Cake/Cache/Engine/FileEngine.php</code> to see what was happening. 
          (Note: While you shouldn't permanently modify CakePHP core files, adding temporary debug 
          messages is fine - the code is well-written and easy to read.)
        </p>

        <p>Line 196 is within the 'read' method. Cake was trying to read from cache but running out of memory:</p>

        <pre><code>{`$data = unserialize((string)$data);`}</code></pre>

        <h2>Debugging</h2>
        <p>To debug, I added this line right before line 196:</p>

        <pre><code>{`echo $key." (end of key) ";`}</code></pre>

        <p>
          This prints every cache key the app tries to read. The last key printed before the error 
          is the culprit.
        </p>

        <h2>The Culprit</h2>
        <p>Turns out the problematic key was:</p>

        <pre><code>{`cake_toolbar_cachecb15c56b604b708b46f1b0ae9142f278`}</code></pre>

        <p>
          I checked <code>app/tmp/cache/cake_toolbar_cachecb15c56b604b708b46f1b0ae9142f278</code> 
          and it was massive - 3.9MB! This cache file was from CakePHP's DebugKit Toolbar.
        </p>

        <h2>Testing the Fix</h2>
        <p>
          I deleted the file and reloaded a page. The cache regenerated at 168K - much more reasonable. 
          So the issue wasn't every page, just one specific request.
        </p>

        <p>
          I clicked around the site to find which page caused the cache file to balloon. Found it: 
          a work-in-progress page displaying several hundred records with multiple joins, no pagination.
        </p>

        <h2>The Solution</h2>
        <p>
          Clean up that page and add pagination to reduce database queries. In the meantime, 
          to avoid memory errors while working, I could either:
        </p>

        <ul>
          <li>Disable the DebugKit toolbar, or</li>
          <li>Add this to AppController's before_filter method:</li>
        </ul>

        <pre><code>{`ini_set('memory_limit', '-1');`}</code></pre>

        <p>
          <strong>Important:</strong> Make sure to remove that line once the problem is resolved! 
          It's a temporary workaround, not a permanent solution.
        </p>
      </article>
    </main>
  )
}

export default CakephpMemory