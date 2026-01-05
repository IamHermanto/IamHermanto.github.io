import './PostPage.css'

function RubySymbols() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Ruby Symbols Explained - A Practical Guide</h1>
        <time>Sep 15, 2019</time>

        <p className="post-series">This post is part of a series</p>

        <p>
          Shortly into any Rails tutorial, you'll encounter Ruby symbols. Symbols are those 
          things prefixed by a colon, such as <code>:posts</code>, <code>:title</code> and 
          <code>:body</code>.
        </p>

        <p>Here's a migration example that uses symbols:</p>

        <pre><code>{`class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end`}</code></pre>

        <h2>What Are Symbols?</h2>
        <p>
          Symbols are "immutable strings" - strings that can't be changed.
        </p>

        <h2>How Do Symbols Behave?</h2>
        <p>
          To get an initial grasp on Ruby code involving symbols, mentally substitute the symbol 
          for a string. A Ruby symbol is NOT a string. However, the symbol <code>:posts</code> 
          would behave similarly to its equivalent string <code>'posts'</code> in other languages 
          like PHP or Java.
        </p>

        <h2>Why Not Just Use Strings?</h2>
        <p>Two main reasons:</p>

        <ol>
          <li>
            <strong>Performance:</strong> Symbols, being simpler than strings, take up less 
            memory and perform better.
          </li>
          <li>
            <strong>Intent:</strong> Sometimes you want an unchanging string - like a database 
            field name or a hash key. They're like constants. You wouldn't create a constant 
            variable for them, but you always refer to them using the exact same string.
          </li>
        </ol>

        <h2>Comparing PHP Arrays to Ruby Hashes</h2>

        <p>PHP array:</p>
        <pre><code>{`$user = array( 'first_name' => 'Joshua' );
echo $user['first_name']; // outputs 'Joshua'`}</code></pre>

        <p>Ruby hash:</p>
        <pre><code>{`user = { :first_name => 'Joshua' }
puts user[:first_name] # outputs 'Joshua'`}</code></pre>

        <p>
          You may want to manipulate the value ('Joshua'), but the key ('first_name') never 
          needs to change. It's just an identifier. You never need to capitalize it, concatenate 
          it, or get its length.
        </p>

        <p>
          It's a string that shouldn't be changed, so in Ruby, you make it a string that 
          <em>can't</em> be changed - a symbol.
        </p>
      </article>
    </main>
  )
}

export default RubySymbols