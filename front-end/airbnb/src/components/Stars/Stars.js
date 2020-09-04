import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import styled from 'styled-components/macro';

const StarsContainer = styled.div`
  display: flex;
  .star {
    font-size: ${(props) => (!props.size ? '13px !important' : '12px important')};
  }
`;

function Stars({ startsCount = 0, handleClick, size }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < startsCount) {
      stars.push(
        <StarIcon
          size=''
          onClick={() => {
            handleClick(i + 1);
          }}
          key={i}
          className='star'
        />,
      );
    } else {
      stars.push(
        <StarBorderIcon
          key={i}
          onClick={() => {
            handleClick(i + 1);
          }}
          className='star'
        />,
      );
    }
  }
  return <StarsContainer size={size}>{stars}</StarsContainer>;
}

export default Stars;
