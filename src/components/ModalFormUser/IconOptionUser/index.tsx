import React from 'react';
import { IconOptionDiv } from './style';

// Definition of the type of properties passed to the component
interface IconOptionProps {
  icons: string[];
  onIconClick: (icon: string) => void;
}

export const IconOptionUser = ({ icons, onIconClick }: IconOptionProps) => {
  return (
    <>
      {/* Div que contém todos os ícones */}
      <IconOptionDiv>
        {/* Maps the icon array and returns a div with an icon inside for each item */}
        {icons.map((icon: string, index: number) => (
          <div key={index}>
            {/* The icon is an image that is clickable. When clicked, the onIconClick function is called passing the icon's path as an argument */}
            <img
              src={icon}
              alt={`Icon ${index}`}
              onClick={() => onIconClick(icon)}
            />
          </div>
        ))}
      </IconOptionDiv>
    </>
  );
};
