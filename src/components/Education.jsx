const education = [
  {
    id: 1,
    institute: 'Lovely Professional University',
    location: 'Punjab, India',
    program: 'Bachelor of Technology - Computer Science and Engineering',
    scoreLabel: 'CGPA',
    scoreValue: '6.40',
    date: 'Since August 2023',
  },
  {
    id: 2,
    institute: 'Shriji Baba Saraswati Vidya Mandir',
    location: 'Mathura, Uttar Pradesh',
    program: 'Intermediate',
    scoreLabel: 'Percentage',
    scoreValue: '68.8%',
    date: 'Apr 2021 - March 2022',
  },
  {
    id: 3,
    institute: 'Shriji Baba Saraswati Vidya Mandir',
    location: 'Mathura, Uttar Pradesh',
    program: 'Matriculation',
    scoreLabel: 'Percentage',
    scoreValue: '82.4%',
    date: 'Apr 2019 - March 2020',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <span className="section-tag">Education</span>
        <h2 className="section-title">
          My <span>Education</span>
        </h2>
        <p className="section-subtitle">
          Academic background and qualifications.
        </p>

        <div className="grid-2 edu-grid">
          {education.map((item) => (
            <div className="card edu-card" key={item.id}>
              <div className="edu-card-top">
                <div>
                  <div className="edu-institute">{item.institute}</div>
                  <div className="edu-location">{item.location}</div>
                </div>
                <div className="edu-date">{item.date}</div>
              </div>

              <div className="edu-program">{item.program}</div>
              <div className="edu-score">
                <span className="badge">
                  {item.scoreLabel}: {item.scoreValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
