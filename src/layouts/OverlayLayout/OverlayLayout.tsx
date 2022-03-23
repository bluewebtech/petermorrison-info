import { FC } from 'react';
import './OverlayLayout.scss';

interface Props {
  title: string,
  show: boolean,
  children: any,
  onClose: any,
}

const OverlayLayout: FC<Props> = ({ title, show, children, onClose  }) => {
  return (
    <div>
      {show ?
        <div className="overlay">
          <section className="hero is-unselectable">
            <div className="hero-body">
              <div className="container is-fullheight">
                <div className="header">
                  <div
                    className="fas fa-times"
                    onClick={onClose}
                  />
                  <h1>{title}</h1>
                </div>
                <div className="content">{children}</div>
              </div>
            </div>
          </section>
        </div>
      : null}
    </div>
  );
};

export default OverlayLayout;
