import styled from 'styled-components';
import { colors } from '../../theme/GlobalStyles';
import { SiReact, SiStyledcomponents, SiTypescript } from 'react-icons/si';

export const FooterContent = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: ${colors.gray};

  font-weight: bold;
  font-size: 13px;
  width: 100%;
  min-height: 70px;
  background-color: ${colors.dark_black};
  margin-bottom: 8px;
  margin-top: auto;
  border-radius: 5px;

  > p {
    width: 80%;
    margin: auto;
  }

  > span {
    color: ${colors.gray};
    font-size: 18px;
  }
`;

export const StyledComponentsIco = styled(SiStyledcomponents)`
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: ${colors.dark_purple};
  }
`;

export const TypescriptIco = styled(SiTypescript)`
  cursor: pointer;
  margin-right: 10px;
  transition: color 0.5s;

  &:hover {
    color: ${colors.dark_purple};
  }
`;

export const ReactIco = styled(SiReact)`
  cursor: pointer;
  margin-right: 10px;
  transition: color 0.5s;

  &:hover {
    color: ${colors.dark_purple};
  }
`;
