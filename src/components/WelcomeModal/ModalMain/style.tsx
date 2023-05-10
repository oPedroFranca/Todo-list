import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

// ---------------------- MAIN ----------------------

export const ModalMainDiv = styled.div`
  display: grid;
  align-content: center;
  background-color: ${colors.dark_black};
  padding-top: 10px;

  width: 100%;
  height: 360px;
  max-width: 500px;
  min-width: 330px;
  font-size: 10px;

  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
`;
