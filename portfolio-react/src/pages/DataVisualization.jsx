import './PostPage.css'

function DataVisualization() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Data Visualization Do's and Don'ts - Lessons from Tableau and Power BI</h1>
        <time>Dec 10, 2019</time>

        <p>
          I almost forgot I'm a data analytics specialization. Been spending a lot 
          of time with Tableau and Power BI lately. Here's what I've learned about 
          making visualizations that don't suck.
        </p>

        <h2>Don'ts</h2>
        <ul>
          <li><strong>Don't use pie charts for more than 3-4 categories:</strong> They become unreadable. Use bar charts instead.</li>
          <li><strong>Don't use 3D charts:</strong> They look "cool" but distort the data and make it harder to read.</li>
          <li><strong>Don't use rainbow color schemes:</strong> They're not accessible and don't convey meaning.</li>
          <li><strong>Don't truncate the Y-axis:</strong> Starting at non-zero exaggerates differences and misleads viewers.</li>
          <li><strong>Don't overcrowd:</strong> If you need to squint, there's too much on one chart.</li>
        </ul>

        <h2>Do's</h2>
        <ul>
          <li><strong>Do use consistent colors:</strong> Same category = same color across all charts.</li>
          <li><strong>Do label clearly:</strong> Axis labels, titles, and legends should be self-explanatory.</li>
          <li><strong>Do choose the right chart type:</strong> Trends = line chart, comparisons = bar chart, relationships = scatter plot.</li>
          <li><strong>Do consider your audience:</strong> Executives want high-level summaries, analysts want drill-down capability.</li>
          <li><strong>Do tell a story:</strong> Your dashboard should guide the viewer to insights, not just display data.</li>
        </ul>

        <h2>Power BI vs Tableau</h2>
        <p>
          Both are great. Tableau feels more intuitive for exploration. Power BI 
          integrates better with Microsoft ecosystem and is cheaper. Pick based 
          on your organization's needs.
        </p>
      </article>
    </main>
  )
}

export default DataVisualization