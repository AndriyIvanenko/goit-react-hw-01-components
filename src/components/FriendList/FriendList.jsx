import PropTypes from 'prop-types';
import { Avatar, FriendListItem, Status, List, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <Status style={{ backgroundColor: `${friend.isOnline ? 'green' : 'red'}` }}></Status>
          <Avatar src={friend.avatar} alt={friend.name} />
          <Name>{friend.name}</Name>
        </FriendListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
