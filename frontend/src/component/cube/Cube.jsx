import React from 'react';
import Face from './Face';

import Home from '../../features/home/Home';
import News from '../../features/news/News';
import Bio from '../../features/bio/Bio';
import Contact from '../../features/contact/Contact';
import Projects from '../../features/projects/Projects';
import About from '../../features/about/about';
function Cube() {
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

  const labelMap = Object.fromEntries(
    sections.map(({ face, label }) => [face, label])
  );

  return (
    <div className="cube">
      {sections.map(({ face, label, neighbors, component }) => (
        <Face
          key={face}
          face={face}
          neighbors={neighbors}
          labelMap={labelMap}
        >
          {component || label}
        </Face>
      ))}
    </div>
  );
}

export default Cube;
