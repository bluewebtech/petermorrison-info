import { useState } from 'react';
import OverlayLayout from 'layouts/OverlayLayout';
import Themes from 'components/Themes';
import './Settings.scss';

const Settings = () => {
  /**
   * Define the show property and state hook.
   */
  const [show, setShow] = useState(false);

  /**
   * Handle the settings event which will either display
   * or hide the settings overlay.
   *
   * @return {Void}
   */
  const onSettings = (): void => {
    setShow(!show);
  };

  return (
    <div className="settings">
      <OverlayLayout
        show={show}
        onClose={onSettings}
      >
        <h1>Settings</h1>
        <Themes/>
      </OverlayLayout>
      <div
        className="fas fa-cog"
        onClick={onSettings.bind(this)}
      />
    </div>
  );
};

export default Settings;
