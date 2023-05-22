import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';

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

  background-color: ${colors.white_black};
  color: ${colors.gray};

  font-size: 12px;
  font-weight: bold;

  width: 90px;
  height: 25px;
  border: 1px dashed;
  border-radius: 50px;
`;

export const LeftContent = styled.div``;
