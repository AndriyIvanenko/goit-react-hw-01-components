import user from '../user.json';
import { Profile } from './Profile/Profile';
import data from '../data.json';
import { Statistics } from './Statistics/Statistics';
import friends from '../friends.json';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
