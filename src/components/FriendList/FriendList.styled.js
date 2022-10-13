import styled from 'styled-components';

export const List = styled.ul`
  width: 280px;
  margin: auto;
  margin-bottom: 40px;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;

  padding: 10px 15px 10px 15px;
  margin-bottom: 10px;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
`;

export const Avatar = styled.img`
  width: 60px;
  height: auto;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 6px;

  margin-right: 10px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;

  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
