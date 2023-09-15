import styled, { keyframes } from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const SidebarContent = styled.div`
  display: flex;
  max-width: 230px;
  min-width: 230px;
  height: 100%;

  transition: margin-left 0.3s ease;

  z-index: 2;

  &.hide {
    margin-left: -210px;
  }

  &.lessthanSinehundred {
    position: fixed;
    left: ${(props) =>
      props.className === 'hide'
        ? '-210px'
        : '0'}; /* Use a classe 'hide' para ocultá-lo */
  }
`;

export const StyledSidebar_nav = styled.nav`
  display: flex;
  flex-direction: column;
  z-index: 2;

  background-color: ${colors.white_black};
  box-shadow: 6px 0 6px -1.5px rgba(0, 0, 0, 0.5);
  padding: 0px 10px 0px 10px;
  border-radius: 0px 12px 12px 0px;

  overflow-y: auto;
  overflow-x: hidden;
`;

export const SidebarDiv = styled.div`
  display: flex;
  background-color: transparent;
  height: 100%;
  align-items: center;
`;

export const HideSidebarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white_black};
  font-size: 25px;
  width: 22px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;

  box-shadow: 0px 6px 6px -1.5px rgba(0, 0, 0, 0.5),
    6px 0px 6px -1.5px rgba(0, 0, 0, 0.5),
    0px -6px 6px -1.5px rgba(0, 0, 0, 0.5);
`;

interface StarProps {
  show?: boolean;
}

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-180deg);
  }
`;

export const Arrow = styled(MdKeyboardArrowRight)<StarProps>`
  color: ${colors.white};
  transform: ${(props) => (props.show ? 'rotate(0deg)' : 'rotate(-180deg)')};
  transition: transform 0.3s ease;

  &.rotate {
    animation: ${rotateAnimation} 0.3s ease;
  }
`;

export const DivTodoListLogo = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 80px;
  color: #ffffff11;

  margin-bottom: 20px;
  padding: 13px;
  border-bottom: 1px solid #ffffff11;

  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  > img {
    width: 50px;
    margin-left: 7px;
  }
`;
