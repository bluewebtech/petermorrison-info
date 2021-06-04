import BaseLayout from 'layouts/BaseLayout';
import './About.scss';

const About = () => {
  return (
    <BaseLayout>
      <div className="columns">
        <div className="column">
          <h2><span className="has-text-black">I</span>nformational</h2>
          <p>A Software Engineer residing right at the bottom of Southern New Jersey in a small beach town neighboring Cape May. No, I don’t surf, but really do enjoy going on family bike rides along side the ocean and beach. I also love tacos.</p>
          <p>Some of the many hobbies I have are, Playing guitar, writing fun code, photography, playing VR and currently learning how to develop games in 2D, 3D VR. Also toying around doing some Roblox development because Lua is awesome. So yea, you can say that I am currently geeking out on game development.</p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
