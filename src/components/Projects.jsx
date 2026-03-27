const projects = [
  {
    id: 1,
    image: '/thumb_influencer.png',
    title: 'Influencer.in',
    description:
      'A full-featured influencer marketing platform connecting brands with content creators. Built with JavaScript, featuring dashboards, collaboration tools, and analytics for campaign tracking.',
    tech: ['JavaScript', 'React', 'Node.js', 'CSS'],
    github: 'https://github.com/Nitesh190104/Influencer.in',
    live: 'https://influencer-in.vercel.app',
    hasLive: true,
  },
  {
    id: 2,
    image: '/thumb_moviesnow.png',
    title: 'MoviesNow',
    description:
      'A dynamic movie streaming and discovery website built with PHP. Browse movies by genre, view details, and explore trending titles with a sleek cinematic UI.',
    tech: ['PHP', 'HTML', 'CSS', 'MySQL'],
    github: 'https://github.com/Nitesh190104/MoviesNow',
    live: null,
    hasLive: false,
  },
  {
    id: 3,
    image: '/thumb_speakeasy.png',
    title: 'SpeakEasy',
    description:
      'An AI-powered speech practice system that analyzes pronunciation, provides real-time feedback, and helps users improve their spoken English through interactive exercises.',
    tech: ['Python', 'AI/ML', 'Speech Recognition', 'NLP'],
    github: 'https://github.com/Nitesh190104/SpeakEasy',
    live: null,
    hasLive: false,
  },
  {
    id: 4,
    image: '/thumb_cpu.png',
    title: 'RealTime CPU Scheduler',
    description:
      'A real-time CPU scheduling simulator implementing algorithms like FCFS, SJF, Priority, and Round Robin. Visualizes Gantt charts and computes waiting/turnaround times.',
    tech: ['Python', 'Algorithms', 'OS Concepts', 'Simulation'],
    github: 'https://github.com/Nitesh190104/RealTime-CPU-Scheduler',
    live: null,
    hasLive: false,
  },
  {
    id: 5,
    image: '/thumb_music.png',
    title: 'Music Streaming & Discovery',
    description:
      'A full-featured music streaming and discovery website built with HTML/CSS/JS. Features a music player, genre browsing, artist discovery, and playlist management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
    github: 'https://github.com/Nitesh190104/Music-Streaming-and-Discovery-Website',
    live: null,
    hasLive: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">My <span>Projects</span></h2>
        <p className="section-subtitle">
          Real-world projects I&apos;ve built and published on GitHub — from AI-powered
          apps to full-stack web platforms.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a
                    href={project.github}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.8rem', padding: '8px 16px' }}
                  >
                    GitHub
                  </a>
                  {project.hasLive && (
                    <a
                      href={project.live}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: '0.8rem', padding: '8px 16px' }}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="badge" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>⬡</span> GitHub
                  </a>
                  {project.hasLive ? (
                    <a
                      href={project.live}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--accent-secondary)' }}
                    >
                      <span>↗</span> Live Demo
                    </a>
                  ) : (
                    <span className="project-link" style={{ opacity: 0.35, cursor: 'default' }}>
                      <span>—</span> No Live Demo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
