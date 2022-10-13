import PropTypes from 'prop-types';

import {
  Label,
  Percentage,
  StatItem,
  StatList,
  StatSection,
  StatsHeader,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatsHeader>{title}</StatsHeader>}

      <StatList>
        {stats.map(statsItem => (
          <StatItem
            key={statsItem.id}
            style={{
              backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            }}
          >
            <Label>{statsItem.label}</Label>
            <Percentage>{statsItem.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
