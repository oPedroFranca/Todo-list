import styled from 'styled-components';
import { colors } from '../../../../../theme/GlobalStyles';

export const Description = styled.span`
  > textarea {
    background: none;
    color: ${colors.gray};

    width: 100%;
    height: 80px;
    font-size: 13px;
    line-height: 1.2;

    border: none;
    resize: none;

    margin-top: 5px;
    margin-bottom: 5px;
    padding-right: 5px;

    overflow: hidden;

    &::placeholder {
      line-height: 1;
      font-size: 13px;
    }

    &:focus {
      outline: none;
    }
  }

  > span {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 12px;

    > p {
      position: relative;
      bottom: 5px;
      font-size: 11px;
      color: ${colors.gray};
    }
  }
`;
