import React, { createContext, useContext, useState } from 'react';

type CategoryContextType = {
  selectedCategory: string;
  selectCategory: (category: string) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined,
);

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      'useCategoryContext must be used within a CategoryProvider',
    );
  }
  return context;
};

export const CategoryProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Tasks');

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, selectCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
