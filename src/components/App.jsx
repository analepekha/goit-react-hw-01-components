import { Profile } from './Profile/Profile';
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

export const App = () => {

  return (
    <div
    style={{
        paddingTop: '30px',
      paddingBottom: '30px'
      }}>
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> 
    </div>
  );
};
