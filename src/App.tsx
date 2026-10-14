import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="projects" className="placeholder-section">
          <h2>Featured Projects</h2>
        </section>

        <section id="skills" className="placeholder-section">
          <h2>Technical Skills</h2>
        </section>

        <section id="about" className="placeholder-section">
          <h2>About Me</h2>
        </section>

        <section id="contact" className="placeholder-section">
          <h2>Let&apos;s Connect</h2>
        </section>
      </main>
    </>
  )
}

export default App