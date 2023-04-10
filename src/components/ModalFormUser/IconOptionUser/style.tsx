import styled from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const IconOptionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(272px - 24px);
  max-height: 272px;
  background-color: ${colors.dark_black};
  overflow: auto;
  border-radius: 5px;
  padding: 12px;
  flex-wrap: wrap;

  & div {
    margin-left: 5px;
    margin-top: 5px;

    & img {
      width: 52px;
      cursor: pointer;
      opacity: 50%;
      transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;

      &:hover {
        transform: scale(1.1);
        opacity: 100%;
      }
    }
  }
`;
