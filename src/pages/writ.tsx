import React from "react";
import Editor from "../components/editor";
import { css } from "@emotion/css";

export default function Write() {
  return (
    <div className={container}>
      <div className="wallpaper">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className={titleInput}
        />
        <select className={selectBox}>
          <option value="1">IT융합자율학부</option>
          <option value="2">사회융합자율학부</option>
          <option value="3">인문융합자율학부</option>
          <option value="4">미디어콘텐츠융합자율학부</option>
        </select>

        <div className={editorWrapper}>
          <Editor />
        </div>
        <button>작성 완료</button>
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  .wallpaper {
    width: 80vw;
    flex-direction: column;
    padding: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 768px) {
    width: 90vw;
    padding: 10px;
  }
  button {
    cursor: pointer;
    background-color: #111f4d;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    transition: 0.3s;
  }
  button:hover {
    background-color: #0a1633;
  }
`;

const titleInput = css`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const selectBox = css`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;
const editorWrapper = css`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
