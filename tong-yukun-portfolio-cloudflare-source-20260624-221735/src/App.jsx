import { useEffect } from 'react';
import { theme } from './data/siteContent.js';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Strengths from './components/Strengths.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const themeStyle = {
    '--bg': theme.background,
    '--surface': theme.surface,
    '--text': theme.text,
    '--muted': theme.muted,
    '--line': theme.line,
    '--cyan': theme.cyan,
    '--amber': theme.amber,
  };

  useEffect(() => {
    Object.entries(themeStyle).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, []);

  return (
    <main style={themeStyle}>
      <Hero />
      <Experience />
      <Projects />
      <Strengths />
      <Contact />
    </main>
  );
}
