import { Profile } from './Profile/Profile';
import user from '../user.json';
import data from '../data.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
