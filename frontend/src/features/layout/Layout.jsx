import React, { useState } from 'react';

import Cube from '../../component/cube/Cube';

import Home from '../home/Home';
import News from '../news/News';
import Bio from '../bio/Bio';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import About from '../about/about';

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentFace, setCurrentFace] = useState('front');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const sections = [
    {
      face: 'front',
      label: 'Home',
      component: <Home />,
      neighbors: {
        top: 'top',
        bottom: 'bottom',
        left: 'left',
        right: 'right',
      },
    },
    {
      face: 'back',
      label: 'News',
      component: <News />,
      neighbors: {
        top: 'top',
        bottom: 'bottom',
        left: 'right',
        right: 'left',
      },
    },
    {
      face: 'top',
      label: 'Bio',
      component: <Bio />,
      neighbors: {
        top: 'back',
        bottom: 'front',
        left: 'left',
        right: 'right',
      },
    },
    {
      face: 'bottom',
      label: 'Contact',
      component: <Contact />,
      neighbors: {
        top: 'front',
        bottom: 'back',
        left: 'left',
        right: 'right',
      },
    },
    {
      face: 'left',
      label: 'Projects',
      component: <Projects />,
      neighbors: {
        top: 'top',
        bottom: 'bottom',
        left: 'back',
        right: 'front',
      },
    },
    {
      face: 'right',
      label: 'About',
      component: <About />,
      neighbors: {
        top: 'top',
        bottom: 'bottom',
        left: 'front',
        right: 'back',
      },
    },
  ];

  return (
    <div className="page">
      {sections.map(({ face }, index) => (
        <input
          key={face}
          type="radio"
          name="face"
          id={face}
          defaultChecked={index === 0}
          onChange={() => setCurrentFace(face)}
        />
      ))}

      <header>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {sections.map(({ face, label }) => (
            <label
              key={face}
              htmlFor={face}
              className="btn"
              onClick={() => {
                if (face !== currentFace) {
                  setCurrentFace(face);
                }
                setMenuOpen(false);
              }}
            >
              {label}
            </label>
          ))}
        </div>
      </header>

      <div className="container">
        <Cube sections={sections} />
      </div>
    </div>
  );
}

export default Layout;
