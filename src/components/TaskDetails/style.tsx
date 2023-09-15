import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const TaskDetailsContent = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15px;
  background-color: ${colors.dark_black};
  width: 100%;
  height: 100%;
  padding-top: 33px;
  padding-right: 22px;
`;

export const TaskDetailsBody = styled.div`
  max-width: 550px;
  width: 100%;

  height: 100%;
`;
