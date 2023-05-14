import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';

export const Task = styled.div`
  background-color: ${colors.white_black};
  color: ${colors.white};
  height: 190px;
  width: 240px;

  padding: 15px;
  margin-right: 25px;

  border-radius: 5px;
  border: none;

  cursor: pointer;
  transition: background 1s ease 0s;

  &:hover {
    background-color: ${colors.dark_purple};
  }

  > h1 {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const LineDashed = styled.div`
  width: 100%;
  border-bottom: 1px dashed ${colors.gray};
`;
