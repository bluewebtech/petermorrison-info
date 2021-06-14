import { useLocation, NavLink } from 'react-router-dom';
import Routes from 'routes';
import Avatar from 'layouts/BaseLayout/@Components/Avatar';
import './Navigation.scss';

const Navigation = () => {
  /**
   * Get the current location object from the hook.
   *
   * @var {Object}
   */
  const location = useLocation();

  /**
   * Add the active class to the navigation item that matches
   * the current route.
   *
   * @param {String} path
   * @return {String}
   */
  const isActive = (path: string) => {
    return (location.pathname === path ? 'is-active' : '');
  };

  /**
   * Loop through all available routes but filter out the
   * base route item.
   *
   * @return {Object}
   */
  const navigation = Routes
    .filter(item => item.path !== '/')
    .map((item, key) => {
      return (
        <NavLink
          className={`navbar-item ${isActive(item.path)}`}
          key={key}
          to={`${item.path}`}
        >
          {item.name}
        </NavLink>
      );
    }
  );

  return (
    <div className="hero-head">
    <nav className="navbar">
      <div className="navbar-brand">
        <Avatar/>
      </div>
      <div className="navbar-menu is-capitalized">
        <div className="navbar-start">
          {navigation}
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Navigation;
