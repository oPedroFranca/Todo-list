import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Styled_Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  background-color: ${colors.dark_black};
  z-index: 1;

  overflow-x: hidden;
`;

export const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  width: 100%;

  margin: 0px 20px 0px 0px;
`;
