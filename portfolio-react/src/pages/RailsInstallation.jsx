import './PostPage.css'

function RailsInstallation() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Package Installation Errors When Installing Ruby on Rails</h1>
        <time>May 27, 2019</time>

        <p>
          While following a Rails tutorial, I hit a wall at Step 5 when trying to install Ruby 1.9.3.
        </p>

        <h2>The Command</h2>
        <pre><code>{`rvm install 1.9.3`}</code></pre>

        <h2>Initial Output (Looking Good)</h2>
        <pre><code>{`Searching for binary rubies, this might take some time.
No binary rubies available for: osx/10.8/x86_64/ruby-1.9.3-p429.
Continuing with compilation. Please read 'rvm mount' to get more information on binary rubies.
Installing requirements for osx, might require sudo password.
Already up-to-date.`}</code></pre>

        <h2>The Error</h2>
        <pre><code>{`Installing required packages: automake, apple-gcc42, libyaml, readline, libxml2, libxslt, libksba, openssl...
Error running 'requirements_osx_brew_libs_install automake apple-gcc42 libyaml readline libxml2 libxslt libksba openssl',
please read /Users/joshuapaling/.rvm/log/ruby-1.9.3-p429/1368886724_package_install_automake_apple-gcc42_libyaml_readline_libxml2_libxslt_libksba_openssl.log`}</code></pre>

        <p>Checking the log file revealed:</p>

        <pre><code>{`[2013-05-19 00:18:44] requirements_osx_brew_libs_install
Error: No such keg: /usr/local/Cellar/automake
There were package installation errors, make sure to read the log.
Check Homebrew requirements https://github.com/mxcl/homebrew/wiki/Installation`}</code></pre>

        <h2>The Solution</h2>
        <p>
          I resolved this by installing each required package individually through Homebrew:
        </p>

        <pre><code>{`brew install automake
brew install apple-gcc42
brew install libyaml
brew install readline
brew install libxml2
brew install libxslt
brew install libksba
brew install openssl`}</code></pre>

        <p>
          All packages installed successfully. Minor moment of panic when I saw this line:
        </p>

        <pre><code>{`Installing libksba dependency: libgpg-error`}</code></pre>

        <p>
          Turns out it wasn't an error - just a dependency with "error" in its name!
        </p>

        <h2>Retry and Success</h2>
        <p>After installing the dependencies, I retried:</p>

        <pre><code>{`rvm install 1.9.3`}</code></pre>

        <p>Success! Then I set Ruby 1.9.3 as the default:</p>

        <pre><code>{`rvm --default use 1.9.3`}</code></pre>

        <p>Restarted the terminal and verified the installation:</p>

        <pre><code>{`ruby -v
ruby 1.9.3p429 (2013-05-15 revision 40747) [x86_64-darwin12.3.0]`}</code></pre>

        <p>
          Perfect! Expected it to be more painful than that. Hope this helps someone else 
          running into the same issue!
        </p>
      </article>
    </main>
  )
}

export default RailsInstallation