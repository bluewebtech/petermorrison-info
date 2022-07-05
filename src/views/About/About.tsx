import { BaseLayout } from 'layouts';

const code = `const bio = {
  husband: true,
  dad: true,
  career: 'Software Engineer',
  dev: 'html|css|scss|js|ts',
  quotes: 'Single',
  spaces: 2,
  food: 'Tacos',
  drink: 'Beer|Whiskey',
};`;

const About = () => {
  return (
    <BaseLayout>
      <div className="columns">
        <div className="column">
          <h2><span className="has-text-black">I</span>nformational</h2>
          <p>Just a guy residing right at the bottom of Southern New Jersey in a small beach town neighboring <a href="https://www.google.com/maps?q=cape+may+new+jersey&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiaw-O6pu73AhVMhYkEHTWLBgUQ_AUoAXoECAIQAw" target="_blank" rel="noreferrer">Cape May</a>. No, I don't surf, but really do enjoy going on family bike rides along side the ocean and beach. <span className="has-text-info is-italic has-text-right">I also love tacos.</span></p>
          <p>Like many others, in my freetime I've got some hobbies that help me to enjoy life with family or get some relaxing alone time.</p>
          <p><strong>Playing Games.</strong> Of course videos games but not always. Losing yourself in a board game with my family is by far the best of the best.</p>
          <p><strong>Making beer.</strong> A relatively new hobbie that I recently started is learning how to properly make beer. It's such a pretty relaxing thing to do where it has become a personal goal to open up a micro brewery. So far I have brewed around 20 different batches of beer, some turned out very good but there were many failures...aka, the learning process.</p>
          <p><strong>House work.</strong> That's right I actually enjoy knocking out honey do lists with some home improvements. Some home improvements I am proud of would be the completion of our unfinished downstairs. Which was all designed and built out by myself...it was ALOT of work. Also, the building of a shed outside and wrapping a fence around our backyard.</p>
          <p><strong>Music.</strong> Whether I'm listening or playing it, music will always have that special place in my heart.</p>
          <pre><code>{code}</code></pre>
        </div>
      </div>
    </BaseLayout>
  );
};

export default About;
