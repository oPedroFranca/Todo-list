import styled from 'styled-components';
import { colors } from '../../../../theme/GlobalStyles';

export const Description = styled.span`
  > textarea {
    background: none;
    color: ${colors.gray};

    width: 100%;
    height: 80px;
    font-size: 13px;
    line-height: 1;

    border: none;
    resize: none;

    margin-top: 5px;
    margin-bottom: 25px;
    padding-right: 5px;
    outline: none;
    overflow: hidden;

    &::placeholder {
      line-height: 1;
      font-size: 13px;
    }
  }

  > span {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 11px;
    margin-bottom: 5px;

    > p {
      position: relative;
      color: ${colors.gray};
      font-size: 12px;
    }
  }
`;
