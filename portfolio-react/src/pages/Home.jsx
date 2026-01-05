import { useState } from 'react'
import './Home.css'

function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  const allPosts = [
    {
      title: "Improving Technical Communication Skills",
      date: "Jan 5, 2026",
      description: "Technical skill gets you in the door. Communication skill gets you promoted. Here's what I've learned.",
      link: "/posts/communication-skills"
    },
    {
      title: "Questions to Ask Potential Employers",
      date: "Jan 5, 2026",
      description: "A list of questions I ask in interviews to evaluate if a company is right for me.",
      link: "/posts/questions-employers"
    },
    {
      title: "Hiring Offshore - Lessons Learned",
      date: "Jan 4, 2026",
      description: "Tips for hiring remote developers overseas. Don't lower your bar just because they're cheaper.",
      link: "/posts/hiring-offshore"
    },
    {
      title: "Weird Unity Bugs That Annoy Me",
      date: "Jan 4, 2026",
      description: "Animation events disappearing, phantom null exceptions, and other Unity 6 quirks.",
      link: "/posts/unity-bugs"
    },
    {
      title: "Learning Pixel Art for Game Development",
      date: "Jan 4, 2026",
      description: "Every pixel matters. Starting my journey into pixel art for indie games.",
      link: "/posts/pixel-art"
    },
    {
      title: "Claude Opus 4.5 is Here - First Impressions",
      date: "Jan 4, 2026",
      description: "Testing Anthropic's latest model. The quality jump is real.",
      link: "/posts/opus-45"
    },
    {
      title: "How to Actually Stand Out in Job Applications",
      date: "Jan 3, 2026",
      description: "Based on what I've learned from both sides of hiring. Projects, metrics, specificity.",
      link: "/posts/how-to-stand-out"
    },
    {
      title: "Now I See Why I Wasn't Standing Out",
      date: "Jan 3, 2026",
      description: "After being on the hiring side, I finally understand why my applications weren't landing.",
      link: "/posts/why-not-standing-out"
    },
    {
      title: "Plan A, Plan B, Plan C - Hedging My Bets",
      date: "Jan 3, 2026",
      description: "Tech job, game studio, or hospitality. Working all three paths simultaneously.",
      link: "/posts/plan-abc"
    },
    {
      title: "Hiring Interns for My Game Studio - The Process",
      date: "Jan 2, 2026",
      description: "On the other side of the hiring table now. It's eye-opening.",
      link: "/posts/hiring-interns"
    },
    {
      title: "I'm Starting My Own Game Studio",
      date: "Dec 28, 2025",
      description: "Plan B is becoming Plan A. Starting an indie game studio.",
      link: "/posts/starting-game-studio"
    },
    {
      title: "Applying for the Graduate Visa",
      date: "Dec 20, 2025",
      description: "The post-study work visa process. Your future depends on bureaucracy.",
      link: "/posts/visa-application"
    },
    {
      title: "Job Hunting Again - It's Still Hard",
      date: "Dec 15, 2025",
      description: "Fresh graduate again, job hunting again. The market is brutal.",
      link: "/posts/job-hunting-2025"
    },
    {
      title: "I Graduated! Master of Computing and Innovation",
      date: "Dec 5, 2025",
      description: "Official. GPA 5.75/7.0. One chapter closes, another opens.",
      link: "/posts/graduating"
    },
    {
      title: "Getting Back Into Game Development",
      date: "Nov 20, 2025",
      description: "The spark is back. After months of academic grind, I opened Unity again.",
      link: "/posts/back-to-games"
    },
    {
      title: "University of Adelaide - Disappointing but It's Fine",
      date: "Nov 10, 2025",
      description: "The Master's program has been underwhelming. But I'm still glad I did it.",
      link: "/posts/uni-disappointing"
    },
    {
      title: "Claude is Actually Good at Coding Now",
      date: "Oct 20, 2025",
      description: "Using Claude for coding assistance. It's genuinely helpful, not just a gimmick.",
      link: "/posts/claude-ai-coding"
    },
    {
      title: "I Fell Off From Coding",
      date: "Oct 15, 2025",
      description: "Confession: I've barely written any personal code in months. Is this burnout?",
      link: "/posts/fell-off-coding"
    },
    {
      title: "Reflections on My CyberLab Internship",
      date: "Oct 1, 2025",
      description: "Three months at CyberLab. What I learned technically and professionally.",
      link: "/posts/cyberlab-reflection"
    },
    {
      title: "Juggling Remote Work, Study, and Hospitality",
      date: "Sep 5, 2025",
      description: "My schedule is insane. Here's how I'm barely surviving.",
      link: "/posts/remote-work-juggle"
    },
    {
      title: "Building a Traffic Simulation in Unity at CyberLab",
      date: "Aug 15, 2025",
      description: "The most complex Unity project I've ever worked on. Hundreds of vehicles, real-time data.",
      link: "/posts/unity-traffic-sim"
    },
    {
      title: "Hospitality Work in Australia - Everyone is Miserable",
      date: "Aug 10, 2025",
      description: "I like cooking. Hospitality is different. It's a means to an end.",
      link: "/posts/hospitality-life"
    },
    {
      title: "New Chapter: Internship at CyberLab",
      date: "Jul 10, 2025",
      description: "Secured an internship at the cybersecurity research lab. Had to leave Moximo.",
      link: "/posts/cyberlab-start"
    },
    {
      title: "I Got Accepted to University of Adelaide!",
      date: "Jun 20, 2024",
      description: "Master of Computing and Innovation. Adelaide, here I come.",
      link: "/posts/adelaide-offer"
    },
    {
      title: "The Dream: Moving to Australia",
      date: "May 15, 2024",
      description: "I want out of the third world. Here's the plan.",
      link: "/posts/moving-to-australia"
    },
    {
      title: "React vs Vue vs Nuxt - Which One Should You Learn?",
      date: "Apr 20, 2024",
      description: "I've worked with all three. Here's my honest comparison.",
      link: "/posts/react-vue-nuxt"
    },
    {
      title: "AI is Actually Getting Good Now",
      date: "Apr 10, 2024",
      description: "Remember when I said AI was overhyped? I'm changing my mind.",
      link: "/posts/ai-getting-better"
    },
    {
      title: "I Don't Like Frontend Development (There, I Said It)",
      date: "Mar 15, 2024",
      description: "CSS is frustrating, frameworks change weekly. Give me backend any day.",
      link: "/posts/frontend-fatigue"
    },
    {
      title: "Filament - The Laravel Admin Panel That Actually Works",
      date: "Mar 5, 2024",
      description: "Full CRUD in minutes, not hours. Filament is a game changer.",
      link: "/posts/filament-admin"
    },
    {
      title: "First Impressions of Laravel - A Python Dev's Perspective",
      date: "Feb 20, 2024",
      description: "Coming from Flask, Laravel is a different world. Here's what I think.",
      link: "/posts/laravel-first"
    },
    {
      title: "New Opportunity: Fullstack Developer at Moximo",
      date: "Feb 5, 2024",
      description: "Finally a real development role. PHP, Laravel, React. Let's go.",
      link: "/posts/discovering-moximo"
    },
    {
      title: "New Job: Website Content Manager at Cloudary",
      date: "Apr 20, 2023",
      description: "Not my dream job, but it pays bills and gives me time to grow.",
      link: "/posts/content-manager"
    },
    {
      title: "Job Hunting During COVID - The Struggle is Real",
      date: "Mar 10, 2022",
      description: "Graduated. Applied everywhere. The market is brutal for fresh grads.",
      link: "/posts/job-hunting-covid"
    },
    {
      title: "Final Year Project: NLP Address Prediction for Indonesian E-commerce",
      date: "Jun 15, 2021",
      description: "BERT, CRF, Google Maps API. Months of stress but worth it.",
      link: "/posts/final-year-project"
    },
    {
      title: "AI is Overhyped (For Now)",
      date: "Mar 20, 2020",
      description: "Most 'AI' in production is just if-else statements in fancy marketing.",
      link: "/posts/ai-overhyped"
    },
    {
      title: "I Won Third Place in a Writing Competition!",
      date: "Feb 15, 2020",
      description: "Entered on a whim, somehow placed. Validation that maybe I don't suck at this.",
      link: "/posts/writing-competition"
    },
    {
      title: "I Started Writing a Novel",
      date: "Jan 5, 2020",
      description: "The data analytics guy is writing fiction. A different kind of problem-solving.",
      link: "/posts/writing-novel"
    },
    {
      title: "Google Analytics and SEO Basics",
      date: "Dec 20, 2019",
      description: "Not exciting, but essential if you want people to find your website.",
      link: "/posts/google-analytics-seo"
    },
    {
      title: "Data Visualization Do's and Don'ts",
      date: "Dec 10, 2019",
      description: "Lessons from Tableau and Power BI. Making visualizations that don't suck.",
      link: "/posts/data-visualization"
    },
    {
      title: "Dipping My Toes into Machine Learning",
      date: "Nov 28, 2019",
      description: "At its core, it's just pattern recognition. Here's what I've learned.",
      link: "/posts/machine-learning-intro"
    },
    {
      title: "Exploring Python - First Impressions",
      date: "Nov 15, 2019",
      description: "Clean syntax, amazing libraries, confusing package management.",
      link: "/posts/exploring-python"
    },
    {
      title: "Agile Methodology and Scrum - What I Learned at University",
      date: "Nov 5, 2019",
      description: "PMBOK vs Agile. I'd probably just follow Agile with daily standups.",
      link: "/posts/agile-scrum"
    },
    {
      title: "Getting Into Game Development with Unity",
      date: "Oct 25, 2019",
      description: "COVID has everyone stuck at home. Time to try game dev. It's hard.",
      link: "/posts/unity-beginnings"
    },
    {
      title: "Play the Ball, Not the Man",
      date: "Oct 20, 2019",
      description: "On constructive dialogue, tone policing, and why how we communicate matters.",
      link: "/posts/play-the-ball"
    },
    {
      title: "Handle CakePHP Foreign Key Constraint Errors Gracefully",
      date: "Oct 15, 2019",
      description: "A beforeDelete callback that throws friendly messages instead of cryptic database errors.",
      link: "/posts/cakephp-foreign-key"
    },
    {
      title: "Composer Error: Using a Forked Repository? Use the Original Package Name",
      date: "Oct 8, 2019",
      description: "Forked a package but can't install it? You still need the original package name.",
      link: "/posts/composer-fork"
    },
    {
      title: "Duck Typing Explained - Without Using a Duck Class",
      date: "Oct 1, 2019",
      description: "If it walks like a duck and quacks like a duck, it's good enough.",
      link: "/posts/duck-typing"
    },
    {
      title: "How to Unit Test CakePHP Email Without Actually Sending Emails",
      date: "Sep 25, 2019",
      description: "Design for testability using dependency injection and DebugTransport.",
      link: "/posts/cakephp-email-testing"
    },
    {
      title: "DRY CakePHP Joins - A Helper Method for Readable Multi-Table Joins",
      date: "Sep 20, 2019",
      description: "Turn 35 lines of verbose join arrays into 7 readable lines.",
      link: "/posts/cakephp-joins"
    },
    {
      title: "Ruby Symbols Explained - A Practical Guide",
      date: "Sep 15, 2019",
      description: "Symbols are immutable strings. Here's why they exist and when to use them.",
      link: "/posts/ruby-symbols"
    },
    {
      title: "How to Install Rails on a Media Temple DV 4.0",
      date: "Sep 10, 2019",
      description: "Quick guide for setting up Rails on Media Temple with Plesk and CentOS.",
      link: "/posts/rails-media-temple"
    },
    {
      title: "Fix Rails Passenger Permissions Error",
      date: "Sep 7, 2019",
      description: "Getting 'running as user nobody' errors? Change ownership of your httpdocs folder.",
      link: "/posts/passenger-permissions"
    },
    {
      title: "How to Dump a SQLite Database to SQL File",
      date: "Sep 2, 2019",
      description: "Quick tip for exporting your SQLite database using the command line.",
      link: "/posts/sqlite-dump"
    },
    {
      title: "Heroku Deployment Explained - The WTF Moments",
      date: "Aug 25, 2019",
      description: "Three commands and your app is live. Here's what's actually happening.",
      link: "/posts/heroku-explained"
    },
    {
      title: "How to Run a Single CakePHP Test Case in the Browser",
      date: "Aug 20, 2019",
      description: "Use the filter parameter in your URL to run specific test cases.",
      link: "/posts/cakephp-filter-tests"
    },
    {
      title: "Python Virtual Environments Explained",
      date: "Aug 12, 2019",
      description: "Stop installing packages globally. Virtual environments save you from dependency hell.",
      link: "/posts/python-virtual-env"
    },
    {
      title: "The Definitive Guide to Centering Things with Flexbox",
      date: "Aug 5, 2019",
      description: "Centering used to be a nightmare. Flexbox changed everything.",
      link: "/posts/css-flexbox-center"
    },
    {
      title: "Fix MySQL UTF-8 Encoding Issues - The Right Way",
      date: "Jul 22, 2019",
      description: "MySQL's utf8 only supports 3-byte characters. Use utf8mb4 for full support.",
      link: "/posts/mysql-utf8"
    },
    {
      title: "Enable Flask Debug Mode Without Security Warnings",
      date: "Jul 18, 2019",
      description: "The right way to enable debug mode using environment variables.",
      link: "/posts/flask-debug"
    },
    {
      title: "InstallFest Terminal Commands Explained",
      date: "Jul 14, 2019",
      description: "A detailed breakdown of rails, rake, git, and heroku commands.",
      link: "/posts/installfest-commands"
    },
    {
      title: "Solution to 'Invalid Parameter Number' in CakePHP Unit Tests",
      date: "Jun 26, 2019",
      description: "The culprit? An extra field in the fixture's $records array.",
      link: "/posts/cakephp-unit-tests"
    },
    {
      title: "Foo Bar Baz – The Worst Convention Ever",
      date: "Jun 24, 2019",
      description: "Use real-world examples in code, not meaningless placeholders.",
      link: "/posts/foo-bar-baz"
    },
    {
      title: "Solution to Fatal Error - Allowed Memory Size Exhausted in CakePHP",
      date: "Jun 14, 2019",
      description: "Debugging a memory exhaustion error caused by a massive DebugKit cache file.",
      link: "/posts/cakephp-memory"
    },
    {
      title: "Dividing Percentages in Sass",
      date: "May 28, 2019",
      description: "The built-in percentage() function makes it simple.",
      link: "/posts/sass-percentages"
    },
    {
      title: "Package Installation Errors When Installing Ruby on Rails",
      date: "May 27, 2019",
      description: "Hit a wall installing Ruby 1.9.3? Here's how I resolved the Homebrew errors.",
      link: "/posts/rails-installation"
    },
    {
      title: "Fixing Truncated Fixed-Width Headers",
      date: "May 22, 2019",
      description: "When your browser window is narrower than your content, the header gets cut off.",
      link: "/posts/css-fixed-width"
    },
    {
      title: "Compass CSS3 Background Gradients Not Working in IE 10",
      date: "May 21, 2019",
      description: "IE 10 implemented the updated W3C syntax while Compass was using the old format.",
      link: "/posts/compass-gradients"
    },
    {
      title: "Welcome!",
      date: "May 20, 2019",
      description: "This is where I share development insights and solutions I've discovered along the way.",
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