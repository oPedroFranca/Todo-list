import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';

// ---------------------- HEADER ----------------------

export const ModalHeaderDiv = styled.div`
  display: grid;
  background-color: ${colors.dark_black};
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ModalHeaderSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ModalHeaderTitle = styled.h1`
  font-size: 20px;
  margin-left: 10px;
`;

export const ModalHeaderIcon = styled.img`
  width: 40px;
`;

export const ModalHeaderInfo = styled.p`
  color: ${colors.gray};
  font-weight: bold;
  font-size: 11px;
`;
