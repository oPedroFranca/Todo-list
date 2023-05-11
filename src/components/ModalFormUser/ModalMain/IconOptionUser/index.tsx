import React, { FC, MouseEvent } from 'react';
import { IconOptionDiv } from './style';

interface IconOptionProps {
  icons: string[];
  onIconClick: (iconPath: string) => void;
}

// The IconOptionUser component receives an array of icons and a function to handle when an icon is clicked
export const IconOptionUser: FC<IconOptionProps> = ({
  icons,
  onIconClick,
  ...rest
}) => {
  // Gets the path of the clicked icon from the "src" attribute of the image tag
  const handleIconClick = (event: MouseEvent<HTMLImageElement>) => {
    const iconPath = event.currentTarget.src;
    onIconClick(iconPath);
  };

  return (
    // Renders a div containing all icons passed as props
    <IconOptionDiv {...rest}>
      {/* Maps the icon array and returns a div with an icon inside for each item */}
      {icons.map((icon: string, index: number) => {
        const key = `${icon}_${index}`;

        return (
          <div key={key}>
            {/* The icon is an image that is clickable. */}
            <img
              src={icon}
              alt={`Icon ${index}`}
              aria-label={`Icon ${index}`}
              onClick={handleIconClick}
            />
          </div>
        );
      })}
    </IconOptionDiv>
  );
};
