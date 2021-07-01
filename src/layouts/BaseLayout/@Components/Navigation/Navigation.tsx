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
    const locationPath = location.pathname;
    const active = (locationPath === path);

    if (active) {
      const route = Routes.find(item => item.path === locationPath);
      document.title = (route as any).name;
      return 'is-active';
    }

    if (locationPath === '/') document.title = `Hello!, I'm Pete.`;

    return '';
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

  const doBurger = () => {
    const burger = document.querySelectorAll('.navbar-burger');
    const hasBurger = (burger.length > 0);
    const menu = document.querySelectorAll('.navbar-menu');
    const hasMenu = (menu.length > 0);

    if (hasBurger) burger[0].classList.toggle('is-active');
    if (hasMenu) menu[0].classList.toggle('is-active');
  };

  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="navbar-brand">
          <Avatar/>
          <div
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={doBurger.bind(this)}
          >
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </div>
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
