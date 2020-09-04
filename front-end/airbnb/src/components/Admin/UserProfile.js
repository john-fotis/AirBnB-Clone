import React from 'react';

import { Button } from '@material-ui/core';
import { useMutation } from 'react-query';
import styled from 'styled-components/macro';

import useQuerySuccess from '../../hooks/useQuerySuccess';
import { deleteUser } from '../../services/services';
import { Avatar, InformationItem } from '../../shared';
import { refetchQueries } from '../../utils';
import ConfirmationDialog from '../Dialogs/ConfirmationDialog';
import { feedItemStyles } from '../FeedItem/FeedItem.style';
import { AvatarContainer } from '../Incident/Incident.style';

export const UserContainer = styled.div`
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-gap: 50px;
`;

function UserProfile({ user }) {
  const classes = feedItemStyles();
  const [mutate, { status }] = useMutation(deleteUser);
  const isLoading = status === 'loading';
  const [isOpen, setIsOpen] = React.useState(false);

  async function handleDelete() {
    await mutate(user);
  }

  function openModal() {
    setIsOpen(true);
  }
  function handleSuccess() {
    refetchQueries('users');
  }

  function closeModal() {
    setIsOpen(false);
  }

  useQuerySuccess(status, handleSuccess);
  const { authority, firstName, lastName, username } = user;
  return (
    <>
      <ConfirmationDialog
        callback={handleDelete}
        isOpen={isOpen}
        close={closeModal}
        message='Είσαι σίγουρος ότι θες να διαγράψεις τον χρήστη;'
      />
      <ul style={{ paddingBottom: 70 }} className={classes.root}>
        <AvatarContainer>
          <Avatar id={authority.id} />
        </AvatarContainer>
        <InformationItem label='Όνομα' value={firstName} />
        <InformationItem label='Επώνυμο' value={lastName} />
        <InformationItem label='Ονομα Χρήστη' value={username} />
        <InformationItem label='Υπηρεσία' value={authority.name} />
        <div style={{ position: 'absolute', bottom: 20, right: 20 }}>
          <Button
            disabled={isLoading}
            onClick={openModal}
            size='small'
            style={{ marginTop: '10px' }}
            variant='contained'
            color='primary'
          >
            Διαγραφη
          </Button>
        </div>
      </ul>
    </>
  );
}

export default UserProfile;
