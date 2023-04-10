import React from 'react';
import { IconOptionDiv } from './style';

interface IconOptionProps {
  icons: string[]; // Mudança: renomeie a propriedade options para icons
}

export const IconOptionUser = ({ icons }: IconOptionProps) => {
  const handleClick = (icon: string) => {
    console.log(`Icon clicked: ${icon}`);
  };

  return (
    <>
      <IconOptionDiv>
        {icons.map((icon: string, index: number) => (
          <div key={index}>
            <img
              src={icon}
              alt={`Icon ${index}`}
              onClick={() => handleClick(icon)}
            />
          </div>
        ))}
      </IconOptionDiv>
    </>
  );
};
