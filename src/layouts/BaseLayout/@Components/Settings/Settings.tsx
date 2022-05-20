import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { OverlayLayout } from 'layouts';
import { Themes } from './@Components';
import { LocalStorage } from 'utilities';
import './Settings.scss';

const Settings = () => {
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      if (location.hash === '#settings') onSettings();
    })
  });

  /**
   * Define the show property and state hook.
   */
  const [show, setShow] = useState(false);

  /**
   * Set the default theme.
   */
  document.body.className = LocalStorage.get('settings').theme;

  /**
   * Toggle the classes for the icon.
   */
  const toggleIcon = (): string => `fas fa-cog ${show ? 'hide' : ''}`;

  /**
   * Handle the settings event which will either display
   * or hide the settings overlay.
   */
  const onSettings = (): void => setShow(!show);

  return (
    <div className="settings">
      <OverlayLayout
        title="Settings"
        show={show}
        onClose={onSettings}
      >
        <Themes/>
      </OverlayLayout>
      <div
        className={toggleIcon()}
        onClick={onSettings.bind(this)}
      />
    </div>
  );
};

export default Settings;
