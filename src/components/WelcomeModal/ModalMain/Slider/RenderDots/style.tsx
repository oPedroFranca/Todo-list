import styled from 'styled-components';

export const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #555;
  margin: 0px 5px;
  cursor: pointer;
`;

export const ActiveDot = styled(Dot)`
  background-color: #ccc;
`;

export const DotsWrapper = styled.div`
  .dot {
    ${Dot}
  }

  .dot.active {
    ${ActiveDot}
  }
`;
