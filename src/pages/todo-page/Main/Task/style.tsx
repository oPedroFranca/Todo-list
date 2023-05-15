import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';

export const TaskContent = styled.div`
  width: 290px;
  height: 215px;
  margin-right: 25px;

  > div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #302f2f;
  color: white;
  width: 55px;
  height: 25px;
  font-size: 13px;
  font-weight: 400;

  margin-right: 20px;
  border-radius: 5px 5px 0px 0px;
`;

export const Task = styled.div`
  background-color: ${colors.white_black};
  color: ${colors.white};
  height: 100%;
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
    font-weight: 600;
  }
`;

export const LineDashed = styled.div`
  width: 100%;
  border-bottom: 1px dashed ${colors.gray};
`;
