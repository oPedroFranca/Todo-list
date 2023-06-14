import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

interface Props {
  active: boolean;
}

export const Category = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.active ? '#30302f' : colors.dark_black};
  color: ${(props) => (props.active ? colors.white : colors.dark_black)};
  width: 55px;
  height: 25px;
  font-size: 13px;
  font-weight: 400;

  margin-right: 20px;
  border-radius: 5px 5px 0px 0px;

  transition: background-color 0.3s ease, color 0.3s ease;
`;
