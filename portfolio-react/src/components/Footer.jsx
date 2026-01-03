import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="container">
        <Link to="/">Posts</Link> • 
        <Link to="/about">About</Link> • 
        <Link to="/resume">Resume</Link> • 
        <a href="https://www.linkedin.com/in/hermanto-kho-83974b201/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <p>Copyright © Hermanto 2024</p>
      </div>
    </footer>
  )
}

export default Footer