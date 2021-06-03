import { NavLink } from 'react-router-dom';
import Avatar from 'layouts/BaseLayout/@Components/Avatar';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="hero-head">
    <nav className="navbar">
      <div className="navbar-brand">
        <Avatar/>
      </div>
      <div className="navbar-menu is-capitalized">
        <div className="navbar-start">
          <NavLink
            className="navbar-item"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="navbar-item"
            to="/resume"
          >
            Resume
          </NavLink>
          <NavLink
            className="navbar-item"
            to="/hobbies"
          >
            Hobbies
          </NavLink>
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Navigation;
