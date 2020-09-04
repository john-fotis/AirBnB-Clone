import React from 'react';

import styled from 'styled-components/macro';

import useUsers from '../../hooks/useUsers';
import Loading from '../Loading/Loading';
import UserProfile from './UserProfile';
export const Container = styled.div`
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-gap: 50px;
`;
function UsersList() {
  const { data, status } = useUsers();
  if (status === 'loading') return <Loading />;
  return (
    <Container>
      {data.map((user) => (
        <UserProfile key={user.id} user={user} />
      ))}
    </Container>
  );
}

export default UsersList;
