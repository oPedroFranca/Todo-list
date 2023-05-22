import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

export const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.664);
  z-index: 10;

  color: ${colors.white};
`;

export const ModalTaskContent = styled.div`
  position: absolute;
  background-color: ${colors.white_black};
  width: 80%;
  height: 80%;
  max-width: 400px;
  max-height: 400px;

  margin: auto;
  border-radius: 10px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: auto;
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 23%;

  background-color: ${colors.dark_black};

  > button {
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

export const TaskFormDiv = styled.div`
  display: flex;
  height: 77%;
`;
