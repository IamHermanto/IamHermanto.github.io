import './PostPage.css'

function MachineLearningIntro() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Dipping My Toes into Machine Learning</h1>
        <time>Nov 28, 2019</time>

        <p>
          Everyone's talking about machine learning and AI. As a data analytics major, 
          I figured it's time to actually understand what all the hype is about.
        </p>

        <h2>What Is Machine Learning, Really?</h2>
        <p>
          At its core, it's just pattern recognition. You feed the computer a bunch 
          of examples, and it learns to recognize patterns so it can make predictions 
          on new data.
        </p>

        <h2>Types I've Learned About</h2>
        <ul>
          <li><strong>Supervised Learning:</strong> You give labeled examples (this email is spam, this one isn't)</li>
          <li><strong>Unsupervised Learning:</strong> No labels, the algorithm finds patterns on its own</li>
          <li><strong>Reinforcement Learning:</strong> Learn through trial and error (like training a dog)</li>
        </ul>

        <h2>My First Model</h2>
        <p>
          I trained a simple classifier using scikit-learn to predict whether a 
          customer would churn. It's not fancy, but seeing it actually work was exciting.
        </p>

        <pre><code>{`from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = RandomForestClassifier()
model.fit(X_train, y_train)
accuracy = model.score(X_test, y_test)
print(f"Accuracy: {accuracy}")`}</code></pre>

        <p>
          There's so much more to learn - neural networks, deep learning, NLP. 
          But at least now I understand the basics.
        </p>
      </article>
    </main>
  )
}

export default MachineLearningIntro