import React from 'react';

import { TextField, Typography, Button } from '@material-ui/core';
import styled from 'styled-components/macro';

import theme from '../../config/theme';

export const Container = styled.div`
  display: flex;
  border-top: 5px solid ${theme.palette.primary.main};
  flex-direction: column;
  margin: 0 auto;
  width: 550px;
  max-width: 100%;
  background: white;
  margin-top: 50px;
  border-radius: 4px;
  padding: 50px 50px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;
export const FormContainer = styled.form`
  background: #fff;
  display: flex;
  flex-direction: column;
  .input-container {
    margin-bottom: 5px;
  }
`;

function AdminForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Typography variant='h5' color='primary' align='center'>
        Προσθήκη Χρήστη
      </Typography>
      <FormContainer onSubmit={handleSubmit}>
        <div className='input-container'>
          <TextField fullWidth name='username' label='Όνομα χρήστη' style={{ marginTop: 10 }} />
        </div>
        <div className='input-container'>
          <TextField fullWidth name='firstName' label='Όνομα' />
        </div>
        <div className='input-container'>
          <TextField fullWidth name='lastName' label='Επώνυμο' />
        </div>
        <div className='input-container'>
          <TextField fullWidth name='password' label='Κωδικός' type='password' />
        </div>
        <Button style={{ marginTop: 30 }} variant='contained' color='primary' type='submit'>
          Προσθηκη
        </Button>
      </FormContainer>
    </Container>
  );
}

export default AdminForm;
