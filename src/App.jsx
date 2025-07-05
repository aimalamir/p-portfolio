import './App.css'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header" id="home">
        <nav className="navbar">
          <div className="nav-brand">
            <h1>Aimal Amir</h1>
            <p className="tagline">Full Stack Developer & Creative Problem Solver</p>
          </div>
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>
        
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Aimal Amir</span></h1>
            <p className="hero-subtitle">I build amazing digital experiences with modern technologies</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with a love for creating innovative web applications. 
                With expertise in modern JavaScript frameworks and backend technologies, I enjoy turning 
                complex problems into simple, beautiful solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in writing clean, 
                maintainable code and creating user experiences that make a difference.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>1+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Projects Completed</p>
                </div>
                {/* <div className="stat">
                  <h3>15+</h3>
                  <p>Happy Clients</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {/* Municipal Intelligence */}
            <div className="project-card">
              <div className="project-image" style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2300d4aa;stop-opacity:1" /><stop offset="100%" style="stop-color:%2300b894;stop-opacity:1" /></linearGradient></defs><rect width="400" height="200" fill="url(%23grad1)"/><text x="200" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle">🏛️ Municipal Intelligence</text></svg>')`
              }}>
                {/* <div style={{ position: 'relative', zIndex: 1 }}>Municipal Intelligence</div> */}
              </div>
              <div className="project-content">
                <h3>Municipal Intelligence</h3>
                <p>AI-powered system to detect littering in public spaces and automatically generate fines with email notifications.</p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">Computer Vision</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/aimalamir/municipal-intelligence" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            {/* Language Translator */}
            <div className="project-card">
              <div className="project-image" style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23e74c3c;stop-opacity:1" /><stop offset="100%" style="stop-color:%23c0392b;stop-opacity:1" /></linearGradient></defs><rect width="400" height="200" fill="url(%23grad2)"/><text x="200" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle">🌐 Language Translator</text></svg>')`
              }}>
                {/* <div style={{ position: 'relative', zIndex: 1 }}>Language Translator</div> */}
              </div>
              <div className="project-content">
                <h3>Language Translator</h3>
                <p>A Django-based translation application that provides real-time text translation between multiple languages.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">Translation API</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/aimalamir/translator" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            {/* Password Generator */}
            <div className="project-card">
              <div className="project-image" style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%239b59b6;stop-opacity:1" /><stop offset="100%" style="stop-color:%238e44ad;stop-opacity:1" /></linearGradient></defs><rect width="400" height="200" fill="url(%23grad3)"/><text x="200" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle">🔐 Password Generator</text></svg>')`
              }}>
                {/* <div style={{ position: 'relative', zIndex: 1 }}>Password Generator</div> */}
              </div>
              <div className="project-content">
                <h3>Password Generator</h3>
                <p>A secure password generator with customizable options for length, character types, and strength indicators.</p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">Security</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/aimalamir/password-generate" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://password-generate-plum.vercel.app" className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Dinosaur Game */}
            <div className="project-card">
              <div className="project-image" style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f39c12;stop-opacity:1" /><stop offset="100%" style="stop-color:%23e67e22;stop-opacity:1" /></linearGradient></defs><rect width="400" height="200" fill="url(%23grad4)"/><text x="200" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle">🦖 Dinosaur Game</text></svg>')`
              }}>
                {/* <div style={{ position: 'relative', zIndex: 1 }}>Dinosaur Game</div> */}
              </div>
              <div className="project-content">
                <h3>Dinosaur Game</h3>
                <p>A fun browser-based game inspired by Chrome's offline dinosaur game with improved graphics and gameplay.</p>
                <div className="project-tech">
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">Canvas</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/aimalamir/dinasour-game" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            {/* Expense Tracker */}
            <div className="project-card">
              <div className="project-image" style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2327ae60;stop-opacity:1" /><stop offset="100%" style="stop-color:%232ecc71;stop-opacity:1" /></linearGradient></defs><rect width="400" height="200" fill="url(%23grad5)"/><text x="200" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle">💰 Expense Tracker</text></svg>')`
              }}>
                {/* <div style={{ position: 'relative', zIndex: 1 }}>Expense Tracker</div> */}
              </div>
              <div className="project-content">
                <h3>Expense Tracker</h3>
                <p>A comprehensive expense tracking application to help users manage their finances and track spending habits.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Express</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/aimalamir/expense-tracker" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            {/* Portfolio Website */}
            <div className="project-card">
              <div className="project-image" style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><defs><linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%233498db;stop-opacity:1" /><stop offset="100%" style="stop-color:%232ecc71;stop-opacity:1" /></linearGradient></defs><rect width="400" height="200" fill="url(%23grad6)"/><text x="200" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle">🎨 Portfolio Website</text></svg>')`
              }}>
                {/* <div style={{ position: 'relative', zIndex: 1 }}>Portfolio Website</div> */}
              </div>
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>A modern, responsive portfolio website showcasing projects and skills with beautiful dark theme design.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Vite</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/aimalamir/portfolio" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-icon">⚛️</span>
                  <span>React</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">⚡</span>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🎨</span>
                  <span>CSS3</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">📄</span>
                  <span>HTML5</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">⚡</span>
                  <span>Vite</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-icon">🟢</span>
                  <span>Node.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🚀</span>
                  <span>Express</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🐍</span>
                  <span>Python</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🔌</span>
                  <span>REST APIs</span>
                </div>
                {/* <div className="skill-item">
                  <span className="skill-icon">🔐</span>
                  <span>Authentication</span>
                </div> */}
              </div>
            </div>

            <div className="skill-category">
              <h3>Database</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-icon">🍃</span>
                  <span>MongoDB</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🐘</span>
                  <span>PostgreSQL</span>
                </div>
                {/* <div className="skill-item">
                  <span className="skill-icon">🔥</span>
                  <span>Redis</span>
                </div> */}
                {/* <div className="skill-item">
                  <span className="skill-icon">📊</span>
                  <span>Data Modeling</span>
                </div> */}
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-icon">🐳</span>
                  <span>Docker</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">📦</span>
                  <span>Git</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">☁️</span>
                  <span>AWS</span>
                </div>
                {/* <div className="skill-item">
                  <span className="skill-icon">🔧</span>
                  <span>CI/CD</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-links">
                <a href="https://www.linkedin.com/in/aimal-amir/" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon">💼</span>
                  LinkedIn
                </a>
                <a href="https://github.com/aimalamir" className="contact-link" target="_blank" rel="noopener noreferrer">
                  <span className="contact-icon">🐙</span>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Aimal Amir. All rights reserved.</p>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
