import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';

export const NewTask = styled.button`
  background-color: ${colors.dark_black};
  color: #6d6f72;
  height: 190px;
  width: 240px;
  font-weight: 600;

  border: 1px dashed;
  border-radius: 5px;

  cursor: pointer;
  transition: color 0.5s ease 0s;

  &:hover {
    color: ${colors.purple};
  }
`;
