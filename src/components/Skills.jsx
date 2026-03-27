const skills = [
  { icon: '⚛️', name: 'React' },
  { icon: '🟨', name: 'JavaScript' },
  { icon: '🔵', name: 'TypeScript' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🎨', name: 'CSS/SCSS' },
  { icon: '🗄️', name: 'MongoDB' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🦄', name: 'Express.js' },
  { icon: '🐙', name: 'Git' },
  { icon: '🐳', name: 'Docker' },
  { icon: '☁️', name: 'AWS' },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-tag"></span>
        <h2 className="section-title"><span>Technologies</span></h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
