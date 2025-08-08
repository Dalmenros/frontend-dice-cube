import React from 'react';

/**
 * A single face of the 3D cube.
 * Displays directional buttons to navigate to neighbor faces,
 * and shows the face's content in the center.
 */
function Face({ face, neighbors = {}, labelMap = {}, children }) {
  const directions = ['top', 'bottom', 'left', 'right'];

  return (
    <div className={`face-shadow ${face}`}>
      <div className="face">
        <div className="face-controls">
          {directions.map((dir) =>
            neighbors[dir] ? (
              <label
                key={dir}
                htmlFor={neighbors[dir]}
                className={`btn small btn-${dir}`}
              >
                {labelMap[neighbors[dir]] ?? neighbors[dir]}
              </label>
            ) : null
          )}

          <div className="faceContent current">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Face;
