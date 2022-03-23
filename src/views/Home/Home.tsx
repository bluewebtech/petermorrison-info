import { BaseLayout } from 'layouts';
import { Fibers } from 'components';
import SocialConfig from 'config/social';
import './Home.scss';

const Home = () => {
  /**
   * Loop through all available social but filter out the
   * base route item.
   */
  const social = SocialConfig
    .map((item, key) => {
      return (
        <a
          href={item.url}
          target="_blank"
          title={item.title}
          key={key}
          rel="noreferrer"
        >
          <i className={`fab fa-github fa-2x ${item.icon}`}/>
        </a>
      );
    }
 );

  return (
    <BaseLayout>
      <Fibers/>
      <div className="columns">
        <div className="column">
          <h1>Hello,</h1>
          <h2 className="animated fadeIn delay-1s">I’m Pete,</h2>
          <h3 className="animated fadeIn delay-2">Software Engineer.</h3>
          <div className="social">
            {social}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
