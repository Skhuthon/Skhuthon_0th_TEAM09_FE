/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

export default function Profile() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={postsWrapper}>
      <h1>닉네임 변경</h1>
      <FaUserCircle className={iconStyle} />
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <button>변경</button>
    </div>
  );
}

const postsWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e1e4e8;
  width: 30vw;
  height: 50vh;
  margin: 20px auto;
  border-radius: 15px;
  overflow: auto;
  padding: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  input {
    margin-top: 30px;
    padding: 12px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 300px;
    box-sizing: border-box;
  }
  button {
    margin-top: 30px;
    padding: 12px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 300px;
    box-sizing: border-box;
    cursor: pointer;
    background-color: #111f4d;
    color: white;
  }
  button:hover {
    background-color: #113f4d;
  }
`;
const iconStyle = css`
  font-size: 100px;
  color: #dc3412;
`;
