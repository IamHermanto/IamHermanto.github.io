import './PostPage.css'

function DuckTyping() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Duck Typing Explained - Without Using a Duck Class</h1>
        <time>Oct 1, 2019</time>

        <p>
          Duck Typing is a bit of a buzzword. If you don't know what it is, you've likely 
          used it (or read code that uses it) without knowing. Most posts try to get meta 
          and use an example of a class called "Duck", which doesn't help explain the concept.
        </p>

        <h2>Duck</h2>
        <p>
          The first word references the phrase: "If it walks like a duck, and quacks like a duck, 
          it's a duck". That'll make more sense as we go.
        </p>

        <h2>Typing</h2>
        <p>The second word refers to the type of an object:</p>

        <pre><code>{`first_name = "Fred"
# 'first_name' is an object of type String

test_scores = [97, 45, 86]
# 'test_scores' is an object of type Array

birthday = Date.new(2001,2,3)
# 'birthday' is an object of type Date`}</code></pre>

        <h2>Duck + Typing</h2>
        <p>
          Wikipedia states: "In duck typing, a programmer is only concerned with ensuring 
          that objects behave as demanded of them in a given context, rather than ensuring 
          that they are of a specific type."
        </p>

        <p>
          When we're 'duck typing', we don't care exactly what type of object we have. 
          If it behaves like the object we want for our purposes, that's good enough. 
          If it 'talks like a duck', it's good enough.
        </p>

        <h2>Example: NOT Duck Typing</h2>
        <p>Let's implement a <code>show_length</code> method by strictly checking the type:</p>

        <pre><code>{`def show_length(object)
  if object.class == String
    puts "It has a length of #{object.length}"
  elsif
    puts "You passed a #{object.class}. We wanted a String."
  end
end

show_length("Fred")
# Outputs: It has a length of 4

show_length([1, 2, 3])
# Outputs: You passed a Array. We wanted a String.`}</code></pre>

        <p>
          But maybe it was overkill to enforce that the parameter was a String. When we 
          passed in the array, it should have just told us the length of the array.
        </p>

        <h2>Example: Soft Duck Typing</h2>
        <p>
          Let's not check the type - if it responds to the <code>length</code> method, 
          it's good enough:
        </p>

        <pre><code>{`def show_length(object)
  if object.respond_to?(:length)
    puts "It has a length of #{object.length}"
  elsif
    puts "You passed a #{object.class}. We wanted something with a length."
  end
end

show_length("Fred")
# Outputs: It has a length of 4

show_length([1, 2, 3])
# Outputs: It has a length of 3

show_length(Date.new(2001,2,3))
# Outputs: You passed a Date. We wanted something with a length.`}</code></pre>

        <p>
          We don't check the type - we just check that it's good enough for this context. 
          If it responds to the <code>length</code> method, it'll do.
        </p>

        <h2>Example: Hard Duck Typing</h2>
        <p>
          We might decide to just assume the caller will pass the correct thing:
        </p>

        <pre><code>{`def show_length(object)
  puts "It has a length of #{object.length}"
end

show_length("Fred")
# Outputs: It has a length of 4

show_length([1, 2, 3])
# Outputs: It has a length of 3

show_length(Date.new(2001,2,3))
# Gives a NoMethodError, since Dates don't have a length`}</code></pre>

        <p>
          Concise! We perform no checks - we just assume it'll have a <code>length</code> method.
        </p>
      </article>
    </main>
  )
}

export default DuckTyping