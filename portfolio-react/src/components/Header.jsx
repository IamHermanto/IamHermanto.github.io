import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="container">
        <h1>
          <Link to="/">Hermanto</Link>
        </h1>
        <nav>
          <Link to="/">Posts</Link>
          <Link to="/about">About</Link>
          <Link to="/resume">Resume</Link>
          <a href="mailto:hermantokho2@gmail.com">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header