import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';
import { MdOutlineAdd } from 'react-icons/md';

export const AddTaskContent = styled.div`
  display: flex;
  color: ${colors.gray};
  width: 100%;
  height: 40px;
  font-size: 13px;
  font-weight: 500;
  align-items: center;
  border: dashed 0.2em ${colors.white_black};
  border-radius: 10px;

  margin-top: 35px;
  margin-bottom: 35px;

  transition: color 0.5s ease 0s, border 0.6s ease 0s;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
    border: dashed 0.2em ${colors.dark_purple};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    margin-right: 6px;
    margin-left: 6px;
    background-color: ${colors.purple};
    border-radius: 8px;
  }
`;

export const AddButton = styled(MdOutlineAdd)`
  font-size: 20px;
  color: ${colors.dark_black};
`;
