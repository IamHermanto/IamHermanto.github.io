import './PostPage.css'

function GoogleAnalyticsSeo() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Google Analytics and SEO Basics</h1>
        <time>Dec 20, 2019</time>

        <p>
          Learning about web analytics and SEO. Not the most exciting topic, but 
          essential if you want people to actually find your website.
        </p>

        <h2>Google Analytics Key Metrics</h2>
        <ul>
          <li><strong>Sessions:</strong> A visit to your site (ends after 30 min inactivity)</li>
          <li><strong>Users:</strong> Unique visitors</li>
          <li><strong>Bounce Rate:</strong> % of visitors who leave after viewing only one page</li>
          <li><strong>Session Duration:</strong> How long people stay</li>
          <li><strong>Conversion Rate:</strong> % of visitors who complete a goal</li>
        </ul>

        <h2>SEO Basics</h2>
        <ul>
          <li><strong>Keywords:</strong> Use relevant keywords in titles, headings, and content</li>
          <li><strong>Meta descriptions:</strong> Write compelling descriptions for search results</li>
          <li><strong>Page speed:</strong> Faster = better rankings</li>
          <li><strong>Mobile-friendly:</strong> Google prioritizes mobile-optimized sites</li>
          <li><strong>Backlinks:</strong> Links from other sites boost your authority</li>
        </ul>

        <h2>The Reality</h2>
        <p>
          SEO is a long game. Don't expect overnight results. Focus on creating 
          genuinely useful content and the rankings will follow... eventually.
        </p>
      </article>
    </main>
  )
}

export default GoogleAnalyticsSeo