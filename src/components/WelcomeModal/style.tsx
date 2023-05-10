import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const ModalDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.664);
  z-index: 10;
  text-align: center;
  align-items: center;
  color: ${colors.white};

  overflow: hidden;
`;

export const ModalContent = styled.div`
  display: grid;
  position: absolute;
  align-content: center;
  background-color: ${colors.white_black};
  width: 60%;
  height: 510px;
  max-width: 542px;
  min-width: 350px;
  padding: 0px 10px;

  border-radius: 10px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;
`;
