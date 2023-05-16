import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const StyledSidebar_nav = styled.nav`
  background-color: ${colors.white_black};
  max-width: 220px;
  min-width: 220px;
  height: 100%;
  padding: 0px 10px 0px 10px;
  z-index: 2;

  box-shadow: 6px 0 6px -1.5px rgba(0, 0, 0, 0.5);
  border-radius: 0px 12px 12px 0px;
`;
