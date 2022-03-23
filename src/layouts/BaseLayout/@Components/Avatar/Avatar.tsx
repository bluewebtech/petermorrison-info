import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Avatar.scss';

const Avatar = () => {
  /**
   * Define the rotation property and state hook.
   */
  const [rotate, setRotate] = useState(0);

  /**
   * Initialize the on mouse move event handler as well as the
   * removal of the event handler once focus is lost.
   */
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  /**
   * Handle the on mouse move event and calculate the current rotation
   * of the avatar follower.
   */
  const onMouseMove = (event: any): void => {
    const element = document.getElementById('follower');

    if (element !== null) {
      const centerX = (element.offsetLeft) + (element.offsetWidth / 2);
      const centerY = (element.offsetTop) + (element.offsetHeight / 2);
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      const radians = Math.atan2(mouseX - centerX, mouseY - centerY);
      const rotate = (radians * (180 / Math.PI) * -1) + 90;
      setRotate(rotate);
    }
  }

  /**
   * Get the transform styles when they change.
   */
  const transform = useMemo(() => {
    return {transform:`rotate(${rotate}deg)`};
  }, [rotate]);

  return (
    <NavLink
      to="/"
      className="navbar-item"
    >
      <div className="logo">
        <div className="avatar"/>
        <div
          className="follower"
          style={transform}
          id="follower"
        >
          <div className="circle"/>
          <div className="triangle"/>
        </div>
      </div>
    </NavLink>
  );
};

export default Avatar;
