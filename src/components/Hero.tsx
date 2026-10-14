import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" aria-hidden="true">
        <div className="hero-grid-wave" />
        <div className="hero-grid-glow hero-grid-glow-one" />
        <div className="hero-grid-glow hero-grid-glow-two" />
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            Software Development • AI • Machine Learning
          </p>

          <h1 className="hero-title">
            Hi, I&apos;m <span>Tara Gamache</span>.
            <br />
            I build intelligent solutions through code.
          </h1>

          <p className="hero-description">
            I create practical software projects that combine problem solving,
            machine learning, technical curiosity, and clean implementation —
            from forecasting pipelines and LEGv8 work to Salesforce experience
            and modern web development.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              Explore Projects
            </a>
            <a href="#contact" className="hero-button hero-button-secondary">
              Let&apos;s Connect
            </a>
          </div>

          <div className="hero-highlights">
            <div className="hero-highlight-card">
              <span className="highlight-label">Current Focus</span>
              <strong>ML Engineering & Portfolio Development</strong>
            </div>

            <div className="hero-highlight-card">
              <span className="highlight-label">Featured Work</span>
              <strong>Forecasting, LEGv8, Salesforce, Web Dev</strong>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <div className="hero-panel-topbar">
              <div className="panel-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p className="panel-title">developer-profile.ts</p>
            </div>

            <div className="hero-panel-body">
              <pre className="hero-code-block">
{`const developer = {
  name: "Tara Gamache",
  focus: ["AI", "ML", "Software"],
  approach: "Build. Test. Improve.",
  projects: [
    "Retail Demand Forecasting",
    "LEGv8 Arithmetic Lab",
    "Salesforce Experience",
    "Web Development"
  ]
}`}
              </pre>

              <div className="hero-skill-pills">
                <span>React</span>
                <span>TypeScript</span>
                <span>Python</span>
                <span>Machine Learning</span>
                <span>GitHub</span>
                <span>VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero