import React from 'react';
import { CatergoriesTabContent, PointCategories } from './style';
import { useCategoryContext } from '../../context/CategoryContext';
import { colors } from '../../theme/GlobalStyles';

const categoryColors: Record<string, string> = {
  'All Tasks': colors.dark_purple,
  Completed: colors.dark_green,
  'In progress': colors.dark_orange,
  'High Priority': colors.dark_red,
};

export const CategoriesTab = () => {
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
          <PointCategories
            color={
              selectedCategory === category ? 'white' : categoryColors[category]
            }
          />
          {category}
        </span>
      ))}
    </CatergoriesTabContent>
  );
};
