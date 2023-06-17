import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export const TaskDetailsContent = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.dark_black};
  width: 100%;
  height: 100%;
  padding-top: 33px;
  padding-right: 22px;
`;

export const TaskDetailsBody = styled.div`
  max-width: 550px;
  width: 100%;

  height: 100%;
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  height: 37px;
  margin: 0px auto;
`;

export const TaskName = styled.h1`
  font-size: 22px;
  color: ${colors.white};
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
