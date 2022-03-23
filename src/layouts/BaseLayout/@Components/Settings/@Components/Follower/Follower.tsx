import { LocalStorage } from 'utilities';
import './Follower.scss';

const Follower = () => {
  /**
   *
   */
  const doFollower = (): void => {
    console.log('doFollower');
  };

  /**
   *
   */
  const onFollower = (): void => {
    console.log('onFollower');
    doFollower();
    updateFollower();
  };

  /**
   *
   */
  const updateFollower = (): void => {
    console.log('updateFollower');
    const key: string = 'settings';
    const storage = LocalStorage.get(key);
    storage.follower = (!storage.follower);
    LocalStorage.set(key, storage);
  }

  return (
    <div className="follower">
      <h2>Follower</h2>
      <div
        className="follower-toggle"
        onClick={onFollower.bind(this)}
      />
    </div>
  );
};

export default Follower;
