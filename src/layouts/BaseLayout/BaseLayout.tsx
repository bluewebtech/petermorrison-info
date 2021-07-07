import { FC } from 'react';
import Navigation from './@Components/Navigation';
import Particles from './@Components/Particles';
// import Settings from './@Components/Settings';
import Themes from './@Components/Themes';
import './BaseLayout.scss';

interface Props {}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Particles/>
      <section className="hero is-unselectable">
        <Navigation/>
        <Themes/>
        <div className="hero-body">
          <div className="container is-fullheight">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BaseLayout;
