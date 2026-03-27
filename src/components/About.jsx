import { useTypewriter } from '../hooks/useTypewriter';
import { useState } from 'react';

export default function About() {
  const [showProfileImage, setShowProfileImage] = useState(true);

  // Typewriter for first name — starts after 600ms, 100ms per char
  const { displayed: firstName, done: firstDone } = useTypewriter('Nitesh', 100, 600);
  // Last name starts typing after first name is done (~600 + 6*100 = 1200ms delay)
  const { displayed: lastName } = useTypewriter('Kumar', 100, 1300);

  return (
    <section id="home">
      <div className="container">
        <div className="hero-layout fade-in">
          {/* Content */}
          <div className="hero-content">
            <p className="hero-greeting fade-in fade-in-delay-1">
              <span className="wave">👋</span> Hi there, I&apos;m
            </p>

            <h1 className="hero-name fade-in fade-in-delay-2">
              {/* Line 1: First name with cursor until done */}
              <span style={{ display: 'block' }}>
                {firstName}
                {!firstDone && <span className="type-cursor">|</span>}
              </span>
              {/* Line 2: Last name (gradient), cursor moves here after first name */}
              <span style={{ display: 'block' }}>
                <span className="name-gradient">{lastName}</span>
                {firstDone && <span className="type-cursor">|</span>}
              </span>
            </h1>

            <p className="hero-role fade-in fade-in-delay-3">Full Stack Developer</p>
            <p className="hero-bio fade-in fade-in-delay-3">
              A passionate developer with expertise in building scalable web applications
              and crafting elegant user experiences. I love turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>
            <div className="hero-cta fade-in fade-in-delay-4">
              <a href="/certificates/General CV.pdf" className="btn btn-primary" download>
                ⬇ Download Resume
              </a>
            </div>

            <div className="hero-stats fade-in fade-in-delay-5">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-number">9+</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hero-image-wrap fade-in fade-in-delay-2">
            <div className="profile-ring" />
            <div className="profile-img-container">
              {showProfileImage ? (
                <img
                  src="/profile.jpg"
                  alt="Nitesh Kumar"
                  className="profile-img"
                  onError={() => setShowProfileImage(false)}
                />
              ) : (
                <span className="profile-initials">NK</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
