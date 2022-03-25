import { BaseLayout } from 'layouts';

const Resume = () => {
  return (
    <BaseLayout>
      <div className="columns">
        <div className="column">
          <h2><span className="has-text-black">B</span>ackground</h2>
          <p>Hello there...I’m Pete, a Software Engineer with quite a bit of experience (15+ years) in the industry and of course still learning, as we all do. My technical background grew from building/repairing computers to wiring up networks in office buildings which then pushed me into the development direction. From there I began learning how to build custom websites with a natural progression to building applications.</p>
          <p>Currently I primarily focus on UI and UX application development which has always intrigued me, even in the beginning of my career. There is just something about simplifying a gnarly process on a screen for users. The challenge and required thought process, to me, is fun.</p>
          <p>Also a beach bum, a pretty relaxed person that enjoys and prefers working and learning with great, honest people.</p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
