import styled from 'styled-components';
import { colors } from '../../../../../theme/GlobalStyles';

export const FirstSlideDiv = styled.div`
  & img {
    width: 200px;
    margin: auto;
    margin-bottom: 20px;
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
