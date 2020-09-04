import React from 'react';

import styled from 'styled-components/macro';

import theme from '../../config/theme';
import useStatistics from '../../hooks/useStatistics';
import ErrorComponent from '../Error/ErrorComponent';
import Loading from '../Loading/Loading';
import StatItem from './StatItem';

const Container = styled.div`
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-gap: 50px;
`;

const H2 = styled.h2`
  margin: 20px 0;
  color: ${theme.palette.primary.main};
  text-align: center;
`;

const initialState = { deaths: 0, injuries: 0 };

function Stats() {
  const { data, status } = useStatistics();
  const stats = React.useMemo(() => {
    if (!data) return initialState;
    return data.reduce(
      (prev, cur) => {
        return { injuries: prev.injuries + cur.injuries, deaths: prev.deaths + cur.deaths };
      },
      { ...initialState },
    );
  }, [data]);
  if (status === 'loading') return <Loading />;
  if (status === 'error') return <ErrorComponent />;
  return (
    <div>
      <H2>Στατιστικά</H2>
      <Container>
        <StatItem label={'Τραυματισμοί'} value={stats.injuries} />
        <StatItem label={'Θάνατοι'} value={stats.deaths} />
      </Container>
    </div>
  );
}

export default Stats;
