import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const ModalHeaderDiv = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;

  & img {
    width: 30px;
  }

  & h1 {
    font-size: 23px;
    margin-right: 10px;
  }
`;
