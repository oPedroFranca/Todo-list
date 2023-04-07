import React from 'react';
import { IconOptionDiv } from './style';

interface IconOptionProps {
  icons: string[]; // Mudança: renomeie a propriedade options para icons
}

export const IconOptionUser = ({ icons }: IconOptionProps) => {
  return (
    <>
      <IconOptionDiv>
        {icons.map((icon: string, index: number) => (
          <div key={index}>
            <img src={icon} alt={`Icon ${index}`} />
          </div>
        ))}
      </IconOptionDiv>
    </>
  );
};
