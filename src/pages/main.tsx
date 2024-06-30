import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { useRouter } from "next/router";

import Image from "next/image";
import Category from "@/components/main/category";
import Categorization from "@/components/main/categorization";
import Item from "@/components/main/iteam";
import axios from "axios";

interface BoardItem {
  id: number;
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

interface Category {
  id: number;
  name: string;
}

export default function Main() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categorization, setCategorization] = useState<Category[]>([]);
  const [boardItems, setBoardItems] = useState<BoardItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const router = useRouter();

  const handleScroll = () => {
    const button = document.getElementById("floatingButton");
    if (button) {
      button.style.top = `${window.scrollY + window.innerHeight - 100}px`;
    }
  };

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
    console.log("Selected Category ID:", categoryId);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        const response2 = await axios.get("/api/categorization");
        const response3 = await axios.get("/api/board");

        const filteredCategories = response.data.filter(
          (category: Category | null) => category !== null
        );
        const categorization = response2.data.filter(
          (category: Category | null) => category !== null
        );
        const board = response3.data.filter(
          (item: BoardItem | null) => item !== null
        );

        setCategories(filteredCategories);
        setCategorization(categorization);
        setBoardItems(board);
        console.log("Categorization", categorization);
      } catch (error) {
        setError("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);

  const handleSelectionChange = (selected: number[]) => {
    setSelectedCategories(selected);
  };

  return (
    <div className={container}>
      <div className={imgContainer}>
        <Image
          src="/main/mainlogo.png"
          width={1920}
          height={300}
          alt="메인 이미지"
          className={imageStyle}
        />
        <div className={overlay}>
          <h1 className={overlayText}>학부별 추천템</h1>
        </div>
      </div>
      {error ? (
        <p>{error}</p>
      ) : (
        <Category
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
      )}
      <Categorization
        categories={categorization}
        onSelectionChange={handleSelectionChange}
      />
      <div className={boardContainer}>
        {boardItems.map((item) => (
          <Item
            key={item.id}
            image={item.image}
            title={item.title}
            content={item.content}
            author={item.author}
            date={item.date}
          />
        ))}
      </div>
      <button
        id="floatingButton"
        className={floatingButton}
        onClick={() => router.push("/writ")}>
        <span className={plusIcon}>+</span>
      </button>
    </div>
  );
}

const container = css`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  position: relative;
  margin: 0;
`;

const imgContainer = css`
  height: 20%;
  overflow: hidden;
  position: relative;
`;

const imageStyle = css`
  margin: -130px 0 0 0;
  width: 100%;
  height: auto;
`;

const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlayText = css`
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

const boardContainer = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;
const floatingButton = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
  }
`;
const plusIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  margin: 0;
  padding: 0;
  line-height: 1;
`;
