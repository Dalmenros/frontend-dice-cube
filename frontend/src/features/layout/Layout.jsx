import React from 'react';
import Cube from '../../component/cube/Cube';

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
          <label htmlFor="front" className="btn">Home</label>
          <label htmlFor="back" className="btn">News</label>
          <label htmlFor="top" className="btn">Bio</label>
          <label htmlFor="bottom" className="btn">Contact</label>
          <label htmlFor="left" className="btn">Projects</label>
          <label htmlFor="right" className="btn">About</label>
        </div>
      </header>

      <div className="container">
        <Cube />
      </div>
    </main>
  );
}

export default Layout;
