import { BaseLayout } from 'layouts';

const About = () => {
  return (
    <BaseLayout>
      <div className="columns">
        <div className="column">
          <h2><span className="has-text-black">I</span>nformational</h2>
          <p>A Software Engineer residing right at the bottom of Southern New Jersey in a small beach town neighboring Cape May. No, I don’t surf, but really do enjoy going on family bike rides along side the ocean and beach. I also love tacos.</p>
          <p><code>${"const bio = {husband: true, dad: true, career: 'Software Engineer', dev: 'html|css|js|ts', quotes: 'Single', spaces: 2, food: 'Tacos', drink: 'Beer|Whiskey'};"}</code></p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
