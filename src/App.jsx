import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AsteroidCanvas from './components/AsteroidCanvas';

export default function App() {
  return (
    <>
      <AsteroidCanvas />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Navbar />

      <main>
        <About />
        <div className="divider" />
        <AboutSection />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Certifications />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
