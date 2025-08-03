import React from 'react';

function Face({ face, neighbors = {}, labelMap = {}, children }) {
  return (
    <div className={`face ${face}`}>

      <div className="face-controls">
        {/* Directional neighbor buttons */}
        {Object.entries(neighbors).map(([position, target]) => (
          <label
            key={position}
            htmlFor={target}
            className={`btn small btn-${position}`}
          >
            {labelMap[target]}
          </label>
        ))}
        {/* Current face label in center */}
        <div className="faceContent current">
                {children}
        </div>
      </div>
    </div>
  );
}

export default Face;
