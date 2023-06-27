import styled, { css } from 'styled-components';
import { colors } from '../../../theme/GlobalStyles';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const StatusTask = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  font-size: 12px;
  font-weight: bold;

  width: 90px;
  height: 25px;

  border-radius: 50px;

  ${(props) =>
    props.status === 'Complete' &&
    css`
      background-color: ${colors.green};
      color: ${colors.dark_green};
    `}

  ${(props) =>
    props.status === 'Uncompleted' &&
    css`
      background-color: ${colors.red};
      color: ${colors.dark_red};
    `}

  ${(props) =>
    props.status === 'In Progress' &&
    css`
      background-color: ${colors.orange};
      color: ${colors.dark_orange};
    `}
`;

export const LeftContent = styled.div``;

export const RightContent = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 80px;
`;
