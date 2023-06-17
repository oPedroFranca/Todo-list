import { MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
  margin: 0px auto;
`;

export const ButtonBack = styled(MdKeyboardArrowLeft)`
  background-color: ${colors.white_black};
  color: ${colors.white};

  font-size: 30px;
  border-radius: 10px;
  margin-right: 10px;

  cursor: pointer;

  transition: background-color 0.5s ease 0s;

  &:hover {
    background-color: ${colors.dark_purple};
  }
`;

export const TaskName = styled.h1`
  font-size: 22px;
  color: ${colors.white};
`;
