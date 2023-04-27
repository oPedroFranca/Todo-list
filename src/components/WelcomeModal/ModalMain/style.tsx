import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

// ---------------------- MAIN ----------------------

export const ModalMainDiv = styled.div`
  display: inline-table;
  justify-content: center;
  align-items: center;
  background-color: ${colors.dark_black};

  width: 100%;
  height: 360px;
  max-width: 500px;
  min-width: 330px;
  font-size: 10px;

  margin: auto;
  border-radius: 10px;

  & img {
    width: 180px;
  }

  & div {
    width: 100%;

    & h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    & p {
      font-size: 13px;
      letter-spacing: 1px;
      color: #ffffff53;
    }
  }
`;
