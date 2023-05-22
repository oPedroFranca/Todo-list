import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const TaskContentForm = styled.div`
  width: 290px;
  min-width: 290px;
  height: 240px;

  margin: auto;

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

  border-top: 1px dashed ${colors.gray};
  border-right: 1px dashed ${colors.gray};
  border-left: 1px dashed ${colors.gray};

  background-color: ${colors.white_black};
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
  width: 100%;

  padding: 15px;

  border-radius: 5px;
  border: 1px dashed ${colors.gray};

  transition: background 1s ease 0s;

  > h1 {
    font-size: 17px;
    font-weight: 500;
  }
`;

export const LineDashed = styled.div`
  width: 100%;
  margin-top: 1px;
  border-bottom: 1px dashed ${colors.gray};
`;
