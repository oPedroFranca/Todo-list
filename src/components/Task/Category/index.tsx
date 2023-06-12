import React from 'react';
import { Category } from './style';

export const CategoryComponent = ({ isFavorite }: { isFavorite: boolean }) => (
  <div>
    <Category active={isFavorite}>High</Category>
  </div>
);
