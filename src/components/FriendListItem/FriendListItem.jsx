import PropTypes from 'prop-types';
import { ListItem, StatusOnline, StatusOffline, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <ListItem>
      {isOnline ? <StatusOnline></StatusOnline> : <StatusOffline></StatusOffline>}
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
