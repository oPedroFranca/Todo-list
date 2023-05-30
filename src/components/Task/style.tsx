import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const TaskContent = styled.div`
  width: 290px;
  min-width: 290px;
  height: 240px;

  margin: 20px 10px 10px 20px;

  > div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

interface Props {
  active: boolean;
}

export const Category = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.active ? '#302f2f' : colors.dark_black};
  color: ${(props) => (props.active ? colors.white : colors.dark_black)};
  width: 55px;
  height: 25px;
  font-size: 13px;
  font-weight: 400;

  margin-right: 20px;
  border-radius: 5px 5px 0px 0px;

  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const Task = styled.div`
  background-color: ${colors.white_black};
  color: ${colors.white};
  width: 100%;

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
