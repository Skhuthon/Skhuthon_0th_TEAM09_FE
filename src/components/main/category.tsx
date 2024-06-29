import React, { useEffect, useState } from "react";
import axios from "axios";
import { css } from "@emotion/css";

interface Category {
  id: number;
  name: string;
}

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        const filteredCategories = response.data.filter(
          (category: Category | null) => category !== null
        );
        setCategories(filteredCategories);
      } catch (error) {
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (error) return <p>{error}</p>;

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
              onClick={() => setSelectedCategory(category.id)}>
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

export default CategoryPage;

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
