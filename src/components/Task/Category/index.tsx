import React from 'react';
import { Category } from './style';

/**
 * Component responsible for displaying the category of a task.
 * @param isFavorite Indicates whether the task is a favorite.
 */
export const CategoryComponent = ({ isFavorite }: { isFavorite: boolean }) => (
  /* Visual element to display the category */

  <div>
    <Category active={isFavorite}>High</Category>
  </div>
);
