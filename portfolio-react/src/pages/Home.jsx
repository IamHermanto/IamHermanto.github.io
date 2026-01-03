import { useState } from 'react'
import './Home.css'

function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  const allPosts = [
    {
      title: "Solution to 'Invalid Parameter Number: Number of Bound Variables Does Not Match Number of Tokens' When Running CakePHP Unit Tests",
      date: "Jun 26, 2019",
      description: "Quick fix for a common CakePHP testing error. The culprit? An extra field in the fixture's $records array that didn't exist in the database schema.",
      link: "/posts/cakephp-unit-tests"
    },
    {
      title: "Foo Bar Baz – The Worst Convention Ever",
      date: "Jun 24, 2019",
      description: "The foo/bar/baz convention adds unnecessary abstraction to code examples. Real-world context makes examples clearer, especially for beginners learning to code.",
      link: "/posts/foo-bar-baz"
    },
    {
      title: "Solution to Fatal Error - Allowed Memory Size Exhausted in CakePHP FileEngine.php",
      date: "Jun 14, 2019",
      description: "Debugging a CakePHP memory exhaustion error caused by a massive DebugKit cache file. Found the culprit: an unpaginated page loading hundreds of joined records.",
      link: "/posts/cakephp-memory"
    },
    {
      title: "Dividing Percentages in Sass",
      date: "May 28, 2019",
      description: "Trying to divide percentages in SASS for a 7-column layout? The built-in percentage() function makes it simple to convert fractions to percentages.",
      link: "/posts/sass-percentages"
    },
    {
      title: "Package Installation Errors When Installing Ruby on Rails",
      date: "May 27, 2019",
      description: "Hit a wall installing Ruby 1.9.3 with RVM due to missing Homebrew packages. Here's how I resolved the automake, libyaml, and other dependency errors.",
      link: "/posts/rails-installation"
    },
    {
      title: "Fixing Truncated Fixed-Width Headers",
      date: "May 22, 2019",
      description: "When your browser window is narrower than your fixed-width content, scrolling horizontally can make your header appear cut off. Here's a simple CSS fix.",
      link: "/posts/css-fixed-width"
    },
    {
      title: "Compass CSS3 Background Gradients Not Working in IE 10",
      date: "May 21, 2019",
      description: "IE 10 implemented the updated W3C gradient syntax while Compass was still using the old format. Here's why your gradients broke and four different solutions to fix them.",
      link: "/posts/compass-gradients"
    },
    {
      title: "Welcome!",
      date: "May 20, 2019",
      description: "This is where I share development insights and solutions I've discovered along the way. If it helped me solve a problem, chances are it might help you too.",
      link: null
    }
  ]

  const totalPages = Math.ceil(allPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo(0, 0)
    }
  }

  return (
    <main className="container">
      {currentPosts.map((post, index) => (
        <article key={index} className="post-preview">
          <h2>
            {post.link ? (
              <a href={post.link}>{post.title}</a>
            ) : (
              post.title
            )}
          </h2>
          <time>{post.date}</time>
          <p>{post.description}</p>
          {post.link && (
            <a href={post.link} className="read-more">
              read more →
            </a>
          )}
        </article>
      ))}

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className={currentPage === 1 ? 'disabled' : ''}
          >
            ← Previous
          </button>
          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? 'disabled' : ''}
          >
            Next →
          </button>
        </div>
      )}
    </main>
  )
}

export default Home