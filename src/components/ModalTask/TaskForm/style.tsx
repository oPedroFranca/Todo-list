import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const TaskContentForm = styled.div`
  width: 290px;
  min-width: 290px;
  height: 220px;

  margin: auto;

  > div:nth-child(1) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`;

export const Task = styled.div`
  background-color: ${colors.white_black};
  color: ${colors.white};
  width: 100%;

  padding: 15px;

  border-radius: 5px;
  border: 1px dashed ${colors.gray};

  transition: background 1s ease 0s;

  > input {
    width: 100%;

    font-size: 17px;
    font-weight: 500;

    color: ${colors.white};
    outline: none;
    border: none;
    background-color: ${colors.white_black};

    &::placeholder {
      font-size: 17px;
      font-weight: 500;
    }
  }
`;

export const LineDashed = styled.div`
  width: 100%;
  border-bottom: 1px dashed ${colors.gray};
`;
