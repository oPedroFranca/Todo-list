import React from 'react';
import { CatergoriesTabContent } from './style';
import { useCategoryContext } from '../../context/CategoryContext';

export const CatergoriesTab = () => {
  const { selectedCategory, selectCategory } = useCategoryContext();

  const categories = ['All Tasks', 'Completed', 'In progress', 'High Priority'];

  return (
    <CatergoriesTabContent>
      {categories.map((category) => (
        <span
          key={category}
          onClick={() => selectCategory(category)}
          className={selectedCategory === category ? 'selected' : ''}
        >
          {category}
        </span>
      ))}
    </CatergoriesTabContent>
  );
};
