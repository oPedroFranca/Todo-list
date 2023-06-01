import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const NewTaskContent = styled.div`
  margin: 20px 10px 10px 20px;

  > div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 25px;
  }
`;

export const FalseStatus = styled.div<{ isHovered: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.dark_black};
  color: ${(props) => (props.isHovered ? colors.purple : colors.gray)};
  border-top: 1px dashed;
  border-left: 1px dashed;
  border-right: 1px dashed;
  width: 50px;
  height: 25px;
  font-size: 15px;
  margin-right: 20px;
  border-radius: 5px 5px 0px 0px;
  transition: color 0.5s ease 0s;
  cursor: pointer;
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

  &:hover {
    color: ${colors.purple};
  }
`;
