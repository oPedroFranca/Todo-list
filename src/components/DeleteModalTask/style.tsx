import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';
import { MdDone, MdOutlineClose } from 'react-icons/md';

export const DeleteModalDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 10;
  text-align: center;

  color: ${colors.white};
  overflow: hidden;
`;

export const DeleteModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${colors.white_black};
  width: 150px;
  height: 50px;

  border-radius: 5px;

  top: 90%;
  left: 50%;
`;

export const DoneSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${colors.dark_black};
  color: ${colors.white};
  transition: background-color 0.5s ease;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    background-color: ${colors.green};
    color: ${colors.dark_green};
  }
`;

export const CloseSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${colors.dark_black};
  color: ${colors.white};
  transition: background-color 0.5s ease;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    background-color: ${colors.orange};
    color: ${colors.dark_orange};
  }
`;

export const DoneIcon = styled(MdDone)`
  font-size: 20px;
`;

export const CloseIcon = styled(MdOutlineClose)`
  font-size: 20px;
`;
