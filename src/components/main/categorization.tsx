import React, { useState } from "react";
import { css } from "@emotion/css";

interface Category {
  id: number;
  name: string;
}

interface CategorySelectorProps {
  categories: Category[];
  onSelectionChange: (selectedCategories: number[]) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  onSelectionChange,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCategoryClick = (categoryId: number) => {
    setSelectedCategories((prevSelected) => {
      const isSelected = prevSelected.includes(categoryId);
      const newSelected = isSelected
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId];
      onSelectionChange(newSelected);
      return newSelected;
    });
  };

  return (
    <div className={containerStyle}>
      <ul className={listStyle}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={`${listItemStyle} ${
              selectedCategories.includes(category.id) ? selectedStyle : ""
            }`}
            onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelector;

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const listStyle = css`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const listItemStyle = css`
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid lightgray;
  border-radius: 50px;
  &:hover {
    background-color: lightgray;
  }
`;

const selectedStyle = css`
  background-color: #0067a3;
  color: white;
  border-color: #0067a3;
`;
