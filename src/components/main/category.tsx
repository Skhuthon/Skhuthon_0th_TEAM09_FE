import React, { useEffect, useState } from "react";
import axios from "axios";
import { css } from "@emotion/css";

interface CategoryProps {
  categories: { id: number; name: string }[];
  onCategorySelect: (categoryId: number) => void;
}
const Category: React.FC<CategoryProps> = ({
  categories,
  onCategorySelect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
    onCategorySelect(categoryId);
  };
  return (
    <div className={containerStyle}>
      {categories.length > 0 ? (
        <ul className={listStyle}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`${listItemStyle} ${
                selectedCategory === category.id ? selectedStyle : ""
              }`}
              onClick={() => handleCategorySelect(category.id)}>
              {category.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>서버오류입니다</p>
      )}
    </div>
  );
};

export default Category;

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const listStyle = css`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  font-weight: bold;
`;

const listItemStyle = css`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const selectedStyle = css`
  color: #0067a3;
  font-weight: bold;
`;
