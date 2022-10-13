import PropTypes from 'prop-types';
import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <ListItem>
      <Status isOnline={isOnline} />
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
