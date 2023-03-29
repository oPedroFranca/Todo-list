import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const StyledSidebar_nav = styled.nav`
  display: flex;

  background-color: ${colors.white_black};
  min-width: 201px;
  max-width: 201px;
  height: 100%;
  padding: 0px 10px 0px 10px;
  z-index: 2;

  box-shadow: 6px 0 6px -1.5px rgba(0, 0, 0, 0.5);
  border-radius: 0px 12px 12px 0px;
`;
