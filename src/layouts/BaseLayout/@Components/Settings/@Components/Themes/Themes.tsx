import { LocalStorage } from 'utilities';
import './Themes.scss';

const Themes = () => {
  /**
   * Set the default theme.
   *
   * @var {String}
   */
  document.body.className = LocalStorage.get('settings').theme;

  /**
   * Set the current theme based on the selection;
   *
   * @param {String} theme
   * @return {Void}
   */
  const doTheme = (theme: string): void => {
    document.body.className = theme;
  };

  /**
   * Handle all theme related actions.
   *
   * @param {String} theme
   * @return {Void}
   */
  const onTheme = (theme: string): void => {
    doTheme(theme);
    updateTheme(theme);
  };

  /**
   * Update the theme within the local storage.
   *
   * @param {String} theme
   * @return {Void}
   */
  const updateTheme = (theme: string): void => {
    const key: string = 'settings';
    const storage = LocalStorage.get(key);
    storage.theme = theme;
    LocalStorage.set(key, storage);
  }

  return (
    <div className="themes">
      <h2>Theme</h2>
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
  );
};

export default Themes;
