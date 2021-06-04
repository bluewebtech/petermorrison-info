import BaseLayout from 'layouts/BaseLayout';
import Fibers from 'components/Fibers';
import './Home.scss';

const Home = () => {
  return (
    <BaseLayout>
      <Fibers/>
      <div className="columns">
        <div className="column">
          <h1>Hello,</h1>
          <h2 className="animated fadeIn delay-1s">I’m Pete,</h2>
          <h3 className="animated fadeIn delay-2">Software Engineer.</h3>
          <div className="social">
            <a
              href="https://github.com/bluewebtech"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-2x"/>
            </a>
            <a
              href="https://www.linkedin.com/in/peter-morrison-a3083414/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in fa-2x"/>
            </a>
            <a
              href="https://twitter.com/bluewebtech"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter fa-2x"/>
            </a>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
