import './PostPage.css'

function UnityTrafficSim() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>Building a Traffic Simulation in Unity at CyberLab</h1>
        <time>Aug 15, 2025</time>

        <p>
          My main project at CyberLab: a traffic simulation system. It's the 
          most complex Unity project I've ever worked on.
        </p>

        <h2>What It Does</h2>
        <p>
          Simulates traffic flow in a virtual city. Vehicles follow realistic 
          behavior - stopping at lights, navigating intersections, responding 
          to incidents. Used for cybersecurity research scenarios.
        </p>

        <h2>Technical Challenges</h2>
        <ul>
          <li><strong>Performance:</strong> Hundreds of vehicles running simultaneously</li>
          <li><strong>AI pathfinding:</strong> Vehicles need to make smart decisions</li>
          <li><strong>Real-time data:</strong> Visualization of traffic patterns</li>
          <li><strong>UI complexity:</strong> Control panels, statistics, scenario management</li>
        </ul>

        <h2>What I Built</h2>
        <ul>
          <li>Complex UI components for simulation control</li>
          <li>RESTful API integration with Flask backend</li>
          <li>Data visualization overlays</li>
          <li>Automated deployment scripts (reduced setup from 2+ hours to 5 minutes!)</li>
        </ul>

        <p>
          Game dev skills actually paying off in a "real" job. Who would've thought.
        </p>
      </article>
    </main>
  )
}

export default UnityTrafficSim