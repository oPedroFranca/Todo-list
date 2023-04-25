import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';

// Styling for a div element used to display user information
export const UserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;
  margin: 10px auto 0px auto;
  margin-top: 20px;
  padding: 0px 15px 0px 15px;
  border-radius: 10px;

  background-color: ${colors.dark_black};
  color: white;
`;

// Styling for a span element used to display user text information
export const UserSpan = styled.span`
  & p {
    font-size: 17px;
    margin-bottom: 5px;
  }

  & h1 {
    font-size: 20px;
  }
`;

interface Props {
  img: string;
}

// Styling for a element used to display an icon
export const IconDiv = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  width: 50px;
  height: 50px;

  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50px;

  cursor: pointer;
`;

// Styling for a span element used to display an icon with hover effect
export const IconSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border-radius: 50px;

  transition: background-color 0.3s ease-in-out;

  & .icon_pencil {
    color: ${colors.purple};
    opacity: 0;
    width: 18px;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.774);

    & .icon_pencil {
      opacity: 1;
    }
  }
`;
