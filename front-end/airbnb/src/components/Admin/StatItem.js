import React from 'react';

import styled from 'styled-components/macro';

import theme from '../../config/theme';

const Container = styled.div`
  ${(props) => props.theme};
  border-top: 4px solid ${theme.palette.primary.main};
  box-shadow: ${theme.shadows[2]};
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const Label = styled.h3`
  color: ${theme.palette.primary.main};
`;

const Value = styled.div`
  margin-top: 10px;
  font-weight: bold;
  border-radius: 2000px;
  border: 1px solid ${theme.palette.primary.main};
  padding: 25px;
  width: 50px;
  display: flex;
  color: ${theme.palette.primary.main};
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 20px;
`;

function StatItem({ label, value }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
}

export default StatItem;
