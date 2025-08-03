import React from 'react';
import Cube from '../../assets/component/cube/Cube';

function Layout() {
  return (
    <main>
      {/* These inputs must be placed before .container to satisfy CSS sibling selector */}
      <input type="radio" name="face" id="front" defaultChecked />
      <input type="radio" name="face" id="back" />
      <input type="radio" name="face" id="top" />
      <input type="radio" name="face" id="bottom" />
      <input type="radio" name="face" id="left" />
      <input type="radio" name="face" id="right" />

      <header>
        <div className="grid">
          <label htmlFor="front" className="btn">Front</label>
          <label htmlFor="back" className="btn">Back</label>
          <label htmlFor="top" className="btn">Top</label>
          <label htmlFor="bottom" className="btn">Bottom</label>
          <label htmlFor="left" className="btn">Left</label>
          <label htmlFor="right" className="btn">Right</label>
        </div>
      </header>

      <div className="container">
        <Cube />
      </div>
    </main>
  );
}

export default Layout;
