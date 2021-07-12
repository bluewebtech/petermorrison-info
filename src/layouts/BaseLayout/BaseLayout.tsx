import { FC } from 'react';
import { Navigation, Particles, Settings } from './@Components';
import './BaseLayout.scss';

interface Props {}

const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Particles/>
      <section className="hero is-unselectable">
        <Navigation/>
        <Settings/>
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
