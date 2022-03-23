import { LocalStorage } from 'utilities';
import './Themes.scss';

const Themes = () => {
  /**
   * Set the current theme based on the selection;
   */
  const doTheme = (theme: string): void => {
    document.body.className = theme;
  };

  /**
   * Handle all theme related actions.
   */
  const onTheme = (theme: string): void => {
    doTheme(theme);
    updateTheme(theme);
  };

  /**
   * Update the theme within the local storage.
   */
  const updateTheme = (theme: string): void => {
    const key: string = 'settings';
    const storage = LocalStorage.get(key);
    storage.theme = theme;
    LocalStorage.set(key, storage);
  }

  return (
    <div className="themes">
      <div className="columns">
        <div className="column is-narrow">
          <span>Theme</span>
        </div>
        <div className="column">
          <div
            className="theme-item light"
            onClick={onTheme.bind(this, 'light')}
          />
          <div
            className="theme-item blue"
            onClick={onTheme.bind(this, 'blue')}
          />
          <div
            className="theme-item dark"
            onClick={onTheme.bind(this, 'dark')}
          />
        </div>
      </div>
    </div>
  );
};

export default Themes;
