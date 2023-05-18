import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';

export const ModalTaskDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.664);
  z-index: 10;
  text-align: center;

  color: ${colors.white};
`;

export const ModalTaskContent = styled.div`
  display: grid;
  position: absolute;
  background-color: ${colors.white_black};
  width: 80%;
  height: 80%;
  max-width: 680px;
  max-height: 540px;

  margin: auto;
  border-radius: 10px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;
`;
