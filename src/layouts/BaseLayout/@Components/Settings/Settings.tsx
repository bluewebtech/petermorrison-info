import './Settings.scss';

const Settings = () => {
  const onSettings = (): void => {
    console.log('onSettings');
  };

  return (
    <div className="settings">
      <div
        className="fas fa-cog"
        onClick={onSettings.bind(this)}
      />
    </div>
  );
};

export default Settings;
