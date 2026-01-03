import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import CssFixedWidth from './pages/CssFixedWidth'
import CompassGradients from './pages/CompassGradients'
import RailsInstallation from './pages/RailsInstallation'
import SassPercentages from './pages/SassPercentages'
import CakephpMemory from './pages/CakephpMemory'
import FooBarBaz from './pages/FooBarBaz'
import CakephpUnitTests from './pages/CakephpUnitTests'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/posts/css-fixed-width" element={<CssFixedWidth />} />
        <Route path="/posts/compass-gradients" element={<CompassGradients />} />
        <Route path="/posts/rails-installation" element={<RailsInstallation />} />
        <Route path="/posts/sass-percentages" element={<SassPercentages />} />
        <Route path="/posts/cakephp-memory" element={<CakephpMemory />} />
        <Route path="/posts/foo-bar-baz" element={<FooBarBaz />} />
        <Route path="/posts/cakephp-unit-tests" element={<CakephpUnitTests />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App