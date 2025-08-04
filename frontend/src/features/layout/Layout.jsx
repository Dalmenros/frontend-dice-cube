import React from 'react';
import Cube from '../../component/cube/Cube';

import Home from '../home/Home';
import News from '../news/News';
import Bio from '../bio/Bio';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import About from '../about/about';

function Layout() {
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
    <main>
      {/* Radio inputs for each face */}
      {sections.map(({ face }, index) => (
        <input
          key={face}
          type="radio"
          name="face"
          id={face}
          defaultChecked={index === 0}
        />
      ))}

      {/* Navigation Buttons */}
      <header>
        <fieldset className="grid" aria-label="Cube navigation">
          {sections.map(({ face, label }) => (
            <label key={face} htmlFor={face} className="btn">
              {label}
            </label>
          ))}
        </fieldset>
      </header>

      {/* Cube */}
      <div className="container">
        <Cube sections={sections} />
      </div>
    </main>
  );
}

export default Layout;
