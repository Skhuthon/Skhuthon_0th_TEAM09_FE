import React from "react";
import { css } from "@emotion/css";

interface ItemProps {
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

const Item: React.FC<ItemProps> = ({ image, title, content, author, date }) => {
  return (
    <div className={itemContainer}>
      <img src={image} alt={title} className={imageStyle} />
      <div className={contentStyle}>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className={metaStyle}>
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;

const itemContainer = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`;

const imageStyle = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const contentStyle = css`
  padding: 10px;
`;

const metaStyle = css`
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  color: #555;
  margin-top: 10px;
`;
