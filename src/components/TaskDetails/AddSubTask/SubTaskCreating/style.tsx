import styled, { keyframes } from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';
import { AiOutlineArrowRight } from 'react-icons/ai';

const expandWidth = keyframes`
  from {
    width: 0;

  }

  to {
    width: 100%;
  }
`;

export const CreatingSubTaskContent = styled.div`
  display: flex;
  color: ${colors.gray};
  width: 100%;
  height: 40px;
  font-size: 13px;
  font-weight: 500;
  align-items: center;
  border: dashed 0.2em ${colors.white_black};
  border-radius: 10px;

  margin-top: 35px;
  margin-bottom: 35px;

  transition: color 0.5s ease 0s, border 0.6s ease 0s;

  &:hover {
    color: ${colors.white};
    border: dashed 0.2em ${colors.dark_purple};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 22px;
    margin-right: 6px;
    margin-left: 6px;
    background-color: ${colors.purple};
    border-radius: 8px;
    cursor: pointer;
  }

  > input {
    border: none;
    margin-left: 8px;
    font-weight: 500;
    width: 0px;
    height: 30px;
    color: ${colors.white};
    background-color: ${colors.dark_black};
    outline: none;
    animation: ${expandWidth} 0.7s ease-in-out forwards;

    &::placeholder {
      font-size: 13px;
    }
  }
`;

export const CreatingButton = styled(AiOutlineArrowRight)`
  font-size: 14px;
  color: ${colors.white_black};
`;
