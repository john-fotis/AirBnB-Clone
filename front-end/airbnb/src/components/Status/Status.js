import React from 'react';
import styled from 'styled-components/macro';
import { ReadyIcon, WaitingIcon } from '../../assets/icons';
import theme from '../../config/theme';
const StatusWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  .icon {
    fill: ${theme.palette.error.main};
    height: 50px;
    width: 50px;
  }
`;

function Status({ status = 1 }) {
  if (status)
    return (
      <StatusWrapper>
        <ReadyIcon className='icon' />
      </StatusWrapper>
    );
  else
    return (
      <StatusWrapper>
        <WaitingIcon className='icon' />
      </StatusWrapper>
    );
}

export default Status;
