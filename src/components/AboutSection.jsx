const highlights = [
  'B.Tech CSE student at Lovely Professional University (since Aug 2023).',
  'Built full-stack and AI-assisted projects, including an AI-powered speech practice app and an online ticket booking platform.',
  'Completed Flutter summer training focused on modular architecture, state management, and cross-platform app development.',
];

const skills = [
  {
    label: 'Languages',
    value: 'Java, C++, JavaScript, Python, PHP',
  },
  {
    label: 'Frameworks',
    value: 'Flutter, Next.js, Node.js, React.js, Tailwind CSS',
  },
  {
    label: 'Tools/Platforms',
    value: 'Firebase, Vercel, MySQL, MongoDB',
  },
  {
    label: 'Soft Skills',
    value: 'Leadership, Problem-Solving, Time Management, Adaptability',
  },
];

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-tag">About</span>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <p className="section-subtitle">
          A quick snapshot of who I am and what I work with.
        </p>

        <div className="grid-2 about-grid">
          <div className="card about-card">
            <h3 className="about-card-title">Profile</h3>
            <p className="about-text">
              I’m Nitesh Kumar — a Computer Science &amp; Engineering undergraduate focused on building
              practical, user-friendly products. I enjoy working across the stack, from clean UI to
              backend logic and databases, and I’m especially interested in applying AI to improve
              real-world experiences.
            </p>

            <div className="about-list">
              {highlights.map((item) => (
                <div className="about-list-item" key={item}>
                  <span className="about-bullet">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card about-card">
            <h3 className="about-card-title">Skills</h3>
            <div className="about-skills">
              {skills.map((s) => (
                <div className="about-skill-row" key={s.label}>
                  <div className="about-skill-label">{s.label}</div>
                  <div className="about-skill-value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
