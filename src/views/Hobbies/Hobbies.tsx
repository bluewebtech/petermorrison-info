import BaseLayout from 'layouts/BaseLayout';

const Hobbies = () => {
  return (
    <BaseLayout>
      <div className="columns">
        <div className="column">
          <h2><span className="has-text-black">H</span>obbies</h2>
          <p>So, when I'm not coding or thinking about tech there are many things that I enjoy doing in my free time. Everyone needs to disconnect.</p>
          <p><strong>Playing Games.</strong> Of course videos games but not always. Losing yourself in a board game with my family is by far the best of the best.</p>
          <p><strong>House work.</strong> That's right I actually enjoy knocking out honey do lists with some home improvements.</p>
          <p><strong>Making beer.</strong> A new hobbie that I recently started is learning how to properly make homemade beer. It's such a pretty relaxing thing to do where it has become a personal goal to open up a micro brewery.</p>
          <p><strong>Music.</strong> Whether I'm listening or playing it, music will always have that special place in my heart.</p>
          <p><strong>Shooting.</strong> Wouldn't call myself a gun nut but I certainly do enjoy heading out to a range and practicing and continuing to learn and improve upon the skill of target shooting.</p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Hobbies;
