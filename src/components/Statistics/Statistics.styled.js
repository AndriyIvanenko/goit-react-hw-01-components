import styled from 'styled-components';

export const StatSection = styled.section`
  width: 362px;
  height: auto;
  margin: auto;
  margin-bottom: 40px;

  border-radius: 14px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StatsHeader = styled.h2`
  margin: auto;
  padding-top: 20px;
  padding-bottom: 30px;

  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const StatItem = styled.li`
  width: calc(365px / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;

  overflow: hidden;
`;

export const Label = styled.span`
  color: #fff;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  color: #fff;
  font-size: 20px;
`;
