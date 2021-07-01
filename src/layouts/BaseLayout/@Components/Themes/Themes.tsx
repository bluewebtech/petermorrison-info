import './Themes.scss';

const Themes = () => {
  const doTheme = (arg: string): void => {
    document.body.className = arg;
  };

  return (
    <div className="themes">
      <div
        className="theme-item light"
        onClick={doTheme.bind(this, 'light')}
      />
      <div
        className="theme-item blue"
        onClick={doTheme.bind(this, 'blue')}
      />
      <div
        className="theme-item dark"
        onClick={doTheme.bind(this, 'dark')}
      />
    </div>
  );
};

export default Themes;
