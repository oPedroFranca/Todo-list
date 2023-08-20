import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';
import { TbPointFilled } from 'react-icons/tb';

export const CatergoriesTabContent = styled.div`
  display: grid;
  color: ${colors.white};

  > span {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;

    background-color: ${colors.dark_black};

    padding-left: 5px;
    border-radius: 5px;
    margin-bottom: 7px;
    cursor: pointer;

    font-size: 13px;
    font-weight: 400;

    transition: transform 0.5s ease, font-weight 0.5s ease,
      background-color 0.5s ease;

    &.selected {
      background-color: ${colors.purple};
      font-weight: bold;
      transform: translate(2px, -2px);
    }
  }
`;

export const PointCategories = styled(TbPointFilled)`
  font-size: 15px;
  margin-left: 2px;
  margin-right: 5px;

  transition: color 0.5s ease;
`;
