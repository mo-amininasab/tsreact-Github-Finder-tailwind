import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  icon?: string;
  title?: string;
}

const Navbar: React.FC<Props> = ({ icon, title }) => {
  return (
    <nav className="bg-primary px-16 py-3 flex justify-between items-center text-white">
      <h1 className="text-2xl font-semibold">
        <i className={icon} /> {title}
      </h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder',
};

export default Navbar;
