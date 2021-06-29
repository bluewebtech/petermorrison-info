import { useMemo } from 'react';
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

  const doTheme = (arg: string): void => {
    document.body.className = arg;
  };

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

   const light = useMemo(() => {
    return {
      width: '20px',
      height: '20px',
      marginTop: '15px',
      marginLeft: '15px',
      padding: '5px',
      backgroundColor: '#fff',
      cursor: 'pointer',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#ccc',
      WebkitBorderRadius: 50,
      MozBorderRadius: 50,
      borderRadius: 50,
    };
  }, []);

  const dark = useMemo(() => {
    return {
      width: '20px',
      height: '20px',
      marginTop: '15px',
      marginLeft: '15px',
      padding: '5px',
      backgroundColor: '#000',
      cursor: 'pointer',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderColor: '#ccc',
      WebkitBorderRadius: 50,
      MozBorderRadius: 50,
      borderRadius: 50,
    };
  }, []);

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

          <div className="navbar-end">
            <div
              className="navbar-item"
              style={light}
              onClick={doTheme.bind(this, 'light')}
            />
            <div
              className="navbar-item"
              style={dark}
              onClick={doTheme.bind(this, 'dark')}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
