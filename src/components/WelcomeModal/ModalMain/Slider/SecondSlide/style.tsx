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

    & p {
      margin-top: 3px;
      font-size: 13px;
      letter-spacing: 1px;
      color: ${colors.gray};
    }
  }
`;
