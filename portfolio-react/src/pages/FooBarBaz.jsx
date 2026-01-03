import './PostPage.css'

function FooBarBaz() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Foo Bar Baz – The Worst Convention Ever</h1>
        <time>Jun 24, 2019</time>

        <p>
          I'm going to go out on a limb here and say that the whole foo/bar/baz convention 
          for use in examples is one of the dumbest things ever invented. When trying to 
          describe a programming concept with an example, is another layer of generic 
          abstraction really what's needed?
        </p>

        <p>
          How about we all just come up with a simple example that provides real-world context, 
          each and every time we need to?
        </p>

        <h2>The Problem</h2>
        <p>
          Consider these two examples for demonstrating string concatenation in PHP:
        </p>

        <p><strong>Example 1: The foo/bar way</strong></p>
        <pre><code>{`$foo = 'baz';
$bar = 'qux';
$foobar = $foo . ' ' . $bar;
echo $foobar; // outputs 'baz qux'`}</code></pre>

        <p><strong>Example 2: Real-world context</strong></p>
        <pre><code>{`$firstName = 'John';
$lastName = 'Smith';
$fullName = $firstName . ' ' . $lastName;
echo $fullName; // outputs 'John Smith'`}</code></pre>

        <h2>Which Is Easier to Follow?</h2>
        <p>
          Makes no difference? Well what if you were new to programming - which would be 
          easier then?
        </p>

        <p>
          Can't we think of a simplest-case example and put it into a 'real' context?
        </p>

        <h2>A Call to Action</h2>
        <p>
          Here's hoping this idea spreads, via all zero readers of my blog and the two genuine 
          followers I have on Twitter, to the entire programming universe, eliminating the use 
          of foo, bar, and baz forever after!
        </p>
      </article>
    </main>
  )
}

export default FooBarBaz