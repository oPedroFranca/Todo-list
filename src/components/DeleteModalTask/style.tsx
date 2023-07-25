import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';
import { MdDone, MdOutlineClose } from 'react-icons/md';

export const DeleteModalDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 10;
  text-align: center;

  color: ${colors.white};
  overflow: hidden;
  pointer-events: none;
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
  transform: translateX(-50%);
  pointer-events: all;
  border: 1px solid ${colors.dark_purple};

  box-shadow: 0 0 10px rgba(0, 0, 0, 10);
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
  transition: color 0.5s ease;
  font-size: 20px;
`;

export const CloseIcon = styled(MdOutlineClose)`
  transition: color 0.5s ease;
  font-size: 20px;
`;
