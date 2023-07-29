// styles.js

import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const DetailsTaskStatusContent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 15px;
  color: ${colors.white};
`;

export const StatusContainer = styled.span`
  width: 90px;
  height: 50px;
  margin-bottom: 10px;
`;

export const NameNumberStatus = styled.p`
  color: ${colors.gray};
  font-weight: bold;
  font-size: 12px;
`;

export const NumberStatus = styled.p<{ borderColor: string }>`
  color: ${colors.white};
  padding-left: 10px;
  width: 100%;
  margin-top: 10px;
  font-weight: bold;
  font-size: 18px;
  border-left: 2px solid
    ${(props) => (props.borderColor ? props.borderColor : 'red')};
`;
