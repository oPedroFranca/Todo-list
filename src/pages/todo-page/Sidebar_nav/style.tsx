import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const StyledSidebar_nav = styled.nav`
  background-color: ${colors.white_black};
  max-width: 210px;
  min-width: 210px;
  height: 100%;
  padding: 0px 10px 0px 10px;
  z-index: 2;

  box-shadow: 6px 0 6px -1.5px rgba(0, 0, 0, 0.5);
  border-radius: 0px 12px 12px 0px;

  transition: margin-left 0.3s ease;

  &.hide {
    margin-left: -210px;
  }
`;

export const SidebarButton = styled.div`
  display: flex;
  background-color: transparent;
  min-width: 25px;
  height: 100%;
  align-items: center;
`;

export const HideSidebarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white_black};
  color: ${colors.white};
  font-size: 25px;
  width: 22px;
  height: 40px;
  border: none;
  cursor: pointer;

  border-radius: 0px 5px 5px 0px;
`;

interface StarProps {
  show?: boolean;
}
export const ArrowLeft = styled(MdKeyboardArrowLeft)<StarProps>`
  color: ${colors.dark_orange};
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const ArrowRight = styled(MdKeyboardArrowRight)<StarProps>`
  color: ${colors.dark_orange};
  display: ${(props) => (props.show ? 'block' : 'none')};
`;
