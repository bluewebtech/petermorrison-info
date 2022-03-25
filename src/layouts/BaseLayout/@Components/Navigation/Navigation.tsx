import { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Routes from 'routes';
import Avatar from 'layouts/BaseLayout/@Components/Avatar';
import { Size } from 'utilities';
import './Navigation.scss';

const Navigation = () => {
  /**
   * Get the current location object from the hook.
   */
  const location = useLocation();

  /**
   * Handle the window resize event for the mobile menu.
   */
  useEffect(() => {
    window.addEventListener('resize', onMobileMenuHide);
    return () => window.removeEventListener('resize', onMobileMenuHide);
  }, []);

  /**
   * Add the active class to the navigation item that matches
   * the current route.
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
   * Add the desktop styles to the necessary menu items.
   */
  const isHiddenDesktop = (desktop: boolean) => {
    return desktop ? '' : 'is-hidden-desktop-only is-hidden-widescreen-only';
  };

  /**
   * Loop through all available routes but filter out the
   * base route item.
   */
  const navigation = Routes
  .map((item, key) => {
    return (
      <NavLink
        className={`navbar-item ${isActive(item.path)} ${isHiddenDesktop(item.desktop)}`}
        key={key}
        to={`${item.path}`}
      >
        {item.name}
      </NavLink>
    );
  });

  /**
   * Handle the burger event in order to toggle the mobile menu.
   */
  const onBurger = () => {
    const burger = document.querySelectorAll('.navbar-burger');
    const hasBurger = (burger.length > 0);
    const menu = document.querySelectorAll('.navbar-menu');
    const hasMenu = (menu.length > 0);

    if (hasBurger) burger[0].classList.toggle('is-active');
    if (hasMenu) menu[0].classList.toggle('is-active');
  };

  /**
   * Handle the hiding of the mobile menu.
   */
  const onMobileMenuHide = () => {
    if (Size.width() >= 1028) {
      const burger = document.querySelectorAll('.navbar-burger');
      const menu = document.querySelectorAll('.navbar-menu');
      burger[0].classList.remove('is-active');
      menu[0].classList.remove('is-active');
    }
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
            onClick={onBurger.bind(this)}
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
