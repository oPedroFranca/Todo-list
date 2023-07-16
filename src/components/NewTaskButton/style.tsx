import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const NewTaskContent = styled.div`
  margin: 0px 10px 10px 20px;

  > div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 25px;
  }

  transition: transform 0.3s ease;
  &:hover {
    transform: translate(2px, -2px);
  }
`;

export const NewTask = styled.button`
  background-color: ${colors.dark_black};
  color: ${colors.gray};
  width: 290px;
  height: 215px;
  min-width: 290px;
  font-weight: 600;
  border: 1px dashed;
  border-radius: 5px;
  cursor: pointer;
  transition: color 0.5s ease 0s;
  outline: none;
  margin-bottom: 20px;
  margin-top: 25px;

  &:hover {
    color: ${colors.dark_purple};
  }
`;
