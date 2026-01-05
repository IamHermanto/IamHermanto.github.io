import './PostPage.css'

function RailsMediaTemple() {
  return (
    <main className="container">
      <article className="post-content">
        <h1>How to Install Rails on a Media Temple DV 4.0</h1>
        <time>Sep 10, 2019</time>

        <p>
          Quick note: This guide was written for Media Temple DV 4.0 with Plesk 11 installed, 
          running CentOS 5.8 with Apache as the webserver. If your setup is significantly 
          different, your mileage may vary.
        </p>

        <p>
          Setting up Rails on a Media Temple DV can be tricky because it's not a standard 
          Rails hosting environment. Here's how to get it done.
        </p>

        <p>
          For detailed steps, I recommend following Media Temple's official documentation 
          and combining it with the Passenger installation guide. The key is making sure 
          your Ruby version, gems, and Passenger are all compatible with your CentOS version.
        </p>
      </article>
    </main>
  )
}

export default RailsMediaTemple