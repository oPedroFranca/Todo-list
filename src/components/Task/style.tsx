import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const TaskContent = styled.div`
  width: 290px;
  min-width: 290px;
  height: 240px;

  margin: 20px 10px 10px 20px;
  transition: transform 0.3s ease;

  > div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  &:hover {
    transform: translate(2px, -2px);
  }
`;

export const Task = styled.div`
  background-color: ${colors.white_black};
  color: ${colors.white};
  width: 100%;
  height: 215px;

  padding: 15px;

  border-radius: 5px;
  border: none;

  cursor: pointer;
  transition: background 1s ease 0s;

  &:hover {
    background-color: ${colors.dark_purple};
  }

  > h1 {
    font-size: 17px;
    font-weight: 500;
  }
`;

export const LineDashed = styled.div`
  width: 100%;
  border-bottom: solid 1px #ffffff2b;
`;
