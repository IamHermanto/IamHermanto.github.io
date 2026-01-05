import './PostPage.css'

function FinalYearProject() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Final Year Project: NLP Address Prediction for Indonesian E-commerce</h1>
        <time>Jun 15, 2021</time>

        <p>
          My final year project at Asia Pacific University is finally done. 
          It was one of the most stressful experiences of my academic life, but 
          also the most rewarding.
        </p>

        <h2>The Problem</h2>
        <p>
          Indonesian addresses are chaos. There's no standardized format. People 
          write them in completely different ways. E-commerce platforms like Shopee 
          struggle to parse and validate these addresses, leading to failed deliveries 
          and human error.
        </p>

        <h2>My Solution</h2>
        <p>
          I built an NLP system using BERT and CRF models for Named Entity Recognition 
          to extract address components (street, district, city, province) from 
          unstructured text. Then integrated with Google Maps API for validation 
          and correction.
        </p>

        <h2>Tech Stack</h2>
        <ul>
          <li>Python with TensorFlow/Keras</li>
          <li>BERT for NLP</li>
          <li>CRF for sequence labeling</li>
          <li>Flask for the web interface</li>
          <li>Google Maps API for geocoding</li>
        </ul>

        <h2>The Stress</h2>
        <p>
          Months of research, data labeling, model training, debugging. Many late 
          nights. But seeing the model actually predict addresses correctly made 
          it all worth it.
        </p>
      </article>
    </main>
  )
}

export default FinalYearProject