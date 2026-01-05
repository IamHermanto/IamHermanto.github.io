import './PostPage.css'

function LaravelFirst() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>First Impressions of Laravel - A Python Dev's Perspective</h1>
        <time>Feb 20, 2024</time>

        <p>
          Coming from Python/Flask, Laravel is a completely different world. 
          Here's what I think after a few weeks.
        </p>

        <h2>What I Like</h2>
        <ul>
          <li><strong>Eloquent ORM:</strong> Relationships are so easy to define and query</li>
          <li><strong>Artisan CLI:</strong> Generate models, controllers, migrations with one command</li>
          <li><strong>Blade templating:</strong> Clean and intuitive</li>
          <li><strong>Built-in auth:</strong> User authentication in minutes</li>
          <li><strong>Documentation:</strong> Some of the best docs I've seen</li>
        </ul>

        <h2>What's Weird</h2>
        <ul>
          <li><strong>PHP syntax:</strong> <code>$this-&gt;</code> everywhere, <code>-&gt;</code> instead of <code>.</code></li>
          <li><strong>Magic methods:</strong> So much happens behind the scenes</li>
          <li><strong>Facades:</strong> Static-looking calls that aren't really static</li>
        </ul>

        <h2>Example: Defining a Relationship</h2>
        <pre><code>{`// User model
public function posts()
{
    return $this->hasMany(Post::class);
}

// Usage
$user = User::find(1);
$posts = $user->posts;  // Magic!`}</code></pre>

        <p>
          Once you get past the initial confusion, Laravel is powerful. 
          I can see why it's so popular.
        </p>
      </article>
    </main>
  )
}

export default LaravelFirst