import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Styled_Main = styled.main`
  display: flex;

  padding: 25px;
  background-color: ${colors.dark_black};
  width: 100%;
  height: 100%;
  z-index: 1;

  overflow-x: hidden;
`;

export const MainContent = styled.div`
  display: flex;
  background-color: ${colors.dark_black};
  flex-wrap: wrap;
  align-content: flex-start;
`;
