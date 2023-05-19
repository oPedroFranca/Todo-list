import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const ModalTaskDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.664);
  z-index: 10;

  color: ${colors.white};
`;

export const ModalTaskContent = styled.div`
  display: grid;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark_black};
  width: 80%;
  height: 80%;
  max-width: 460px;
  max-height: 450px;

  margin: auto;
  border-radius: 10px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;

  > button {
    margin: 33px auto 10px;
    width: 300px;
    height: 50px;
    font-weight: bold;
    font-size: 16px;

    background: ${colors.purple};
    color: rgb(255, 255, 255);
    transition: background 0.2s ease 0s, color 0.2s ease 0s;

    border-radius: 5px;
    border: 0px;

    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: ${colors.dark_purple};
    }

    &:not(:disabled):hover {
      background: ${colors.dark_purple};
    }

    &:disabled {
      background: #8f7ad639;
      color: #ffffff29;
      cursor: auto;
    }
  }
`;
