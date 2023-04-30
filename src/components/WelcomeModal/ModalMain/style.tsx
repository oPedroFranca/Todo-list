import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

// ---------------------- MAIN ----------------------

export const ModalMainDiv = styled.div`
  display: grid;
  align-content: center;
  background-color: ${colors.dark_black};

  width: 100%;
  height: 360px;
  max-width: 500px;
  min-width: 330px;
  font-size: 10px;

  margin: auto;
  margin-top: 10px;
  border-radius: 10px;

  & img {
    width: 200px;
    margin: auto;
    margin-bottom: 25px;
  }

  & div {
    width: 90%;
    margin: auto;

    & h1 {
      display: flex;
      justify-content: center;
      font-size: 20px;
      margin-bottom: 3px;

      & h1 {
        margin-right: 6px;
        color: ${colors.purple};
      }
    }

    & p {
      font-size: 13px;
      letter-spacing: 1px;
      color: #ffffff53;
    }
  }
`;
