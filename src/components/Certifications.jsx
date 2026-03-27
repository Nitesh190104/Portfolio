import { useState, useEffect } from 'react';

const certifications = [
  {
    id: 1,
    icon: '🔥',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'December 9, 2023',
    credentialId: 'fcc3f72ba0df-09fb-40ce-b7e8-14595f87fb67',
    verifyUrl: 'https://www.freecodecamp.org/certification/fcc372ba0df-03fb-40ae-b7e8-14595f87fb87/responsive-web-design',
    image: '/certificates/Free code camp.jpg',
    description:
      'Earned by completing approximately 300 hours of rigorous coursework covering HTML5 semantics, CSS3 layout techniques, Flexbox, CSS Grid, and responsive design principles. Projects include building accessible and mobile-first web pages from scratch.',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
  },
  {
    id: 2,
    icon: '🧩',
    title: 'Object Oriented Programming',
    issuer: 'LPU × iamneo',
    date: 'December 5, 2024',
    credentialId: '25bM5bj5Bk1dl7dm7',
    verifyUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX1807zDzLi3bd7iTDxOIH4nsugXWwDmGKS4%3D',
    image: '/certificates/C++.jpg',
    description:
      'Completed a 72-hour intensive online course on Object Oriented Programming through Lovely Professional University on the iamneo platform. Covers core OOP concepts including classes, inheritance, polymorphism, encapsulation, and abstraction with practical problem-solving.',
    skills: ['OOP', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Java'],
  },
  {
    id: 3,
    icon: '💻',
    title: 'Computer Programming',
    issuer: 'LPU × iamneo',
    date: 'May 16, 2024',
    credentialId: '20519C62AJ0DK3cL6',
    verifyUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX19m7ECWxNM8xxC66h%2Bd1q3%2Fv1OhTgIhW4Y%3D',
    image: '/certificates/C.jpg',
    description:
      'Completed a comprehensive 72-hour Computer Programming course through LPU on the iamneo platform. Covers foundational programming concepts, problem-solving with algorithms, control structures, functions, and hands-on coding exercises from January to May 2024.',
    skills: ['Algorithms', 'Problem Solving', 'Control Flow', 'Functions', 'Debugging'],
  },
  {
    id: 4,
    icon: '📊',
    title: 'Data Structures & Algorithm',
    issuer: 'LPU × iamneo',
    date: 'December 5, 2024',
    credentialId: '20B11B61aJ4cK60L8',
    verifyUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX19ITasCsxejSIVFci9gq6il8NEngNTzjjQ%3D',
    image: '/certificates/DSA.jpg',
    description:
      'Completed a 72-hour Data Structures and Algorithm course on the iamneo platform through Lovely Professional University. Covers arrays, linked lists, stacks, queues, trees, graphs, sorting algorithms, and dynamic programming with focus on time and space complexity analysis.',
    skills: ['DSA', 'Sorting', 'Trees', 'Graphs', 'Dynamic Programming'],
  },
  {
    id: 5,
    icon: '☕',
    title: 'Java Programming',
    issuer: 'LPU × iamneo',
    date: 'May 5, 2025',
    credentialId: '20B11569AJ05K9AL0BM1',
    verifyUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX19bB44eLGt2x6HwZgCZ7DHKRt2TAvKbqfs%3D',
    image: '/certificates/Java.jpg',
    description:
      'Completed a 72-hour Java Programming course through LPU on the iamneo platform from January to May 2025. Covers core Java syntax, OOP principles, exception handling, collections framework, file I/O, and multi-threading fundamentals with practical project implementations.',
    skills: ['Java', 'Collections', 'Exception Handling', 'Multi-threading', 'File I/O'],
  },
  {
    id: 6,
    icon: '📱',
    title: 'Mobile App Development using Flutter',
    issuer: 'LPU — Centre for Professional Enhancement',
    date: 'August 13, 2025',
    credentialId: '405786',
    image: '/certificates/Flutter.jpg',
    description:
      'Certificate of Merit awarded by Lovely Professional University\'s Centre for Professional Enhancement for completing a skill development course on Mobile Application Development using Flutter. Duration: 10 June 2025 – 17 July 2025. Achieved Grade A.',
    skills: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX', 'Cross-platform'],
  },
  {
    id: 7,
    icon: '🔐',
    title: 'CyberSec Symposium 2.0',
    issuer: 'iGen Community × LPU',
    date: 'April 1–3, 2024',
    credentialId: 'id15fab624b5541b587f4e487d380a9b',
    image: '/certificates/Symposium.jpg',
    description:
      'Certificate of Participation for diligently attending CyberSec Symposium 2.0, North India\'s Largest Cyber Security Conference organized by iGen Community in collaboration with the School of Computer Science & Engineering, Lovely Professional University. In association with Quick Heal and CompTIA.',
    skills: ['Cybersecurity', 'Networking', 'Ethical Hacking', 'Threat Analysis'],
  },
  {
    id: 8,
    icon: '🌐',
    title: 'Web-e-Stan',
    issuer: 'LPU — School of CS & Engineering',
    date: 'January 30–31, 2025',
    credentialId: '368658',
    image: '/certificates/Web-e-Stan.jpg',
    description:
      'Certificate of Participation for taking part in Web-e-Stan, a web development event organized by the School of Computer Science and Engineering, Lovely Professional University, Punjab. Issued on 5 March 2025.',
    skills: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'Teamwork'],
  },
  {
    id: 9,
    icon: '🎬',
    title: 'Adobe After Effects',
    issuer: 'MindLuster',
    date: 'February 12, 2024',
    credentialId: '14157581135',
    image: '/certificates/Adobe After effects_page-0001.jpg',
    description:
      'Certificate of Achievement from MindLuster for successfully completing a 15-hour course on Adobe After Effects. Covers motion graphics, visual effects, compositing, keyframe animation, and video post-production techniques. Course started December 2023.',
    skills: ['After Effects', 'Motion Graphics', 'VFX', 'Animation', 'Video Editing'],
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <section id="certifications">
        <div className="container">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">
            My <span>Certifications</span>
          </h2>
          <p className="section-subtitle">
            Continuously learning and validating my skills through industry-recognized certifications.
            Click any certificate to view the full certificate.
          </p>

          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div
                className="cert-card"
                key={cert.id}
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setSelected(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(cert)}
                aria-label={`View ${cert.title} certificate`}
              >
                {/* Preview thumbnail */}
                <div className="cert-thumbnail">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="cert-thumb-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="cert-thumb-fallback" style={{ display: 'none' }}>
                    <span style={{ fontSize: '2.5rem' }}>{cert.icon}</span>
                  </div>
                  <div className="cert-thumb-overlay">
                    <span className="cert-view-label">👁 Click to View</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="cert-body">
                  <div className="cert-issuer-logo">{cert.icon}</div>
                  <div className="cert-title">{cert.title}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <p className="cert-description">{cert.description}</p>

                  {/* Skills */}
                  <div className="cert-skills">
                    {cert.skills.map((s) => (
                      <span className="badge" key={s}>{s}</span>
                    ))}
                  </div>

                  <div className="cert-meta">
                    <span className="cert-date">📅 {cert.date}</span>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        className="cert-verify-link"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Verify ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {selected && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} Certificate`}
        >
          <div
            className="cert-modal cert-modal--image-only"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="cert-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close certificate modal"
            >
              ✕
            </button>

            {/* Certificate image */}
            <div className="cert-modal-img-wrap">
              <img
                src={selected.image}
                alt={`${selected.title} Certificate`}
                className="cert-modal-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="cert-modal-img-fallback" style={{ display: 'none' }}>
                <span style={{ fontSize: '4rem', marginBottom: '12px' }}>{selected.icon}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Place your certificate image at:
                </span>
                <code style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', marginTop: '4px' }}>
                  public{selected.image}
                </code>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
