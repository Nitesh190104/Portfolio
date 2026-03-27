const languages = [
  {
    name: 'Java',
    icon: '☕',
    level: 80,
    color: '#f89820',
    description: 'OOP, Data Structures, Spring basics',
    category: 'Backend',
  },
  {
    name: 'Python',
    icon: '🐍',
    level: 75,
    color: '#3572A5',
    description: 'Scripting, Data analysis, Automation',
    category: 'Backend',
  },
  {
    name: 'JavaScript',
    icon: '🟨',
    level: 85,
    color: '#f7df1e',
    description: 'ES6+, DOM manipulation, Async/Await',
    category: 'Frontend',
  },
  {
    name: 'C',
    icon: '⚙️',
    level: 70,
    color: '#555555',
    description: 'Procedural programming, Pointers, Memory',
    category: 'Systems',
  },
  {
    name: 'C++',
    icon: '🔷',
    level: 65,
    color: '#00599C',
    description: 'OOP, STL, Competitive programming',
    category: 'Systems',
  },
  {
    name: 'HTML/CSS',
    icon: '🎨',
    level: 90,
    color: '#e44d26',
    description: 'Semantic HTML5, Responsive CSS3, Flexbox/Grid',
    category: 'Frontend',
  },
  {
    name: 'SQL',
    icon: '🗄️',
    level: 72,
    color: '#336791',
    description: 'Queries, Joins, Database design',
    category: 'Database',
  },
  {
    name: 'TypeScript',
    icon: '🔵',
    level: 60,
    color: '#3178c6',
    description: 'Type safety, Interfaces, Generics',
    category: 'Frontend',
  },
];

const categoryColors = {
  Frontend: '#6c63ff',
  Backend: '#10b981',
  Systems: '#f59e0b',
  Database: '#3b82f6',
};

export default function Languages() {
  return (
    <section id="languages">
      <div className="container">
        <span className="section-tag">Expertise</span>
        <h2 className="section-title">
          Programming <span>Languages</span>
        </h2>
        <p className="section-subtitle">
          Languages I have studied and applied through coursework, certifications, and real-world projects.
        </p>

        <div className="lang-grid">
          {languages.map((lang, i) => (
            <div
              className="lang-card"
              key={lang.name}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Header */}
              <div className="lang-card-header">
                <div className="lang-icon-wrap" style={{ background: `${lang.color}18`, border: `1px solid ${lang.color}40` }}>
                  <span className="lang-icon">{lang.icon}</span>
                </div>
                <div>
                  <div className="lang-name">{lang.name}</div>
                  <span
                    className="lang-category-badge"
                    style={{
                      background: `${categoryColors[lang.category]}18`,
                      color: categoryColors[lang.category],
                      border: `1px solid ${categoryColors[lang.category]}40`,
                    }}
                  >
                    {lang.category}
                  </span>
                </div>
                <div className="lang-percent" style={{ color: lang.color }}>
                  {lang.level}%
                </div>
              </div>

              {/* Description */}
              <p className="lang-desc">{lang.description}</p>

              {/* Progress bar */}
              <div className="lang-bar-track">
                <div
                  className="lang-bar-fill"
                  style={{
                    width: `${lang.level}%`,
                    background: `linear-gradient(90deg, ${lang.color}aa, ${lang.color})`,
                    boxShadow: `0 0 8px ${lang.color}55`,
                    animationDelay: `${i * 0.08 + 0.3}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
