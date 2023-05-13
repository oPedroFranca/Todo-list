import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Styled_Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;
  background-color: ${colors.dark_black};
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const MainContent = styled.div`
  display: flex;
  background-color: ${colors.dark_black};
  width: 100%;
  height: 100%;
`;
