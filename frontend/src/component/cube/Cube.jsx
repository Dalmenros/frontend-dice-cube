import React from 'react';
import Face from './Face';

/**
 * Cube component displays a 3D cube with interactive faces.
 * Each face receives a component or label, along with neighbor mapping.
 */
function Cube({ sections }) {
  // Create a lookup for labels by face name
  const labelMap = React.useMemo(
    () =>
      Object.fromEntries(
        sections.map(({ face, label }) => [face, label])
      ),
    [sections]
  );

  return (
    <div className="cube">
      {sections.map(({ face, neighbors, component, label }) => (
        <Face
          key={face}
          face={face}
          neighbors={neighbors}
          labelMap={labelMap}
        >
          {component ?? label}
        </Face>
      ))}
    </div>
  );
}

export default Cube;
