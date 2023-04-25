import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

// ---------------------- MAIN ----------------------

export const ModalMainDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.dark_black};

  width: 52%;
  height: 360px;
  max-width: 403px;
  min-width: 330px;
  font-size: 10px;

  margin: auto;
  border-radius: 10px;
`;
