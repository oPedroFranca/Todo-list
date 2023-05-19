import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const StatusTask = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: ${colors.green};
  color: ${colors.dark_green};

  font-size: 13px;
  font-weight: bold;

  width: 90px;
  height: 25px;

  border-radius: 50px;
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 80px;
`;
