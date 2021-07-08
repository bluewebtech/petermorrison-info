import { FC } from 'react';
import './OverlayLayout.scss';

interface Props {
  children: any,
  onClose: any,
  show: boolean,
}

const OverlayLayout: FC<Props> = ({ children, onClose, show }) => {
  return (
    <div>
      {show ?
      <div className="overlay">
        <div
          className="fas fa-times"
          onClick={onClose}
        />
        <section className="hero is-unselectable">
          <div className="hero-body">
            <div className="container is-fullheight">
              {children}
            </div>
          </div>
        </section>
      </div>
      : null}
    </div>
  );
};

export default OverlayLayout;
