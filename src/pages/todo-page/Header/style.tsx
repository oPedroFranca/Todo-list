import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';
import { BsBellFill } from 'react-icons/bs';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Styled_Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.dark_black};
  width: 100%;
  height: 70px;
  padding-left: 30px;
  padding-right: 20px;
  color: ${colors.gray};

  margin-bottom: 2px;

  > div {
    display: flex;
    align-items: center;

    justify-content: flex-end;

    width: 235px;
    margin-right: 3px;
  }
`;

export const Today = styled.p`
  display: flex;
  align-items: center;
  width: 100px;
  margin-left: 10px;
`;

export const CategoryTask = styled.div`
  display: flex;
  width: 100%;
  padding-left: 30px;
  padding-right: 20px;
  color: ${colors.white};

  margin-top: 20px;

  > h1 {
    font-size: 22px;
  }
`;

export const Bell = styled(BsBellFill)<{ isbellClicked: boolean }>`
  margin-right: 12px;
  font-size: 18px;
  transition: color 0.5s ease;
  cursor: pointer;

  ${(props) =>
    props.isbellClicked === true &&
    css`
      color: ${colors.dark_purple};
      animation: ${rotateAnimation} 0.5s ease;
    `}
`;
