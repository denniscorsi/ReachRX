import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <Link to="/">
        <img
          className="header"
          alt="ReachRX logo"
          src="https://www.getrepreach.com/assets/images/reach-rx-logo-white.png"
        />
      </Link>
      <h1>Schedule A Meeting</h1>
    </>
  );
};

export default Header;
