import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { DotsMenuContent } from './style';

/**
 * Component that represents a menu of points.
 */
export const DotsMenu = () => {
  return (
    <>
      <DotsMenuContent>
        <HiDotsVertical />
      </DotsMenuContent>
    </>
  );
};
