import React from "react";
import { css } from "@emotion/css";
import axios from "axios";
import Image from "next/image";

export default function signup() {
  const handleLogin = async () => {};

  return (
    <div className={container}>
      <div className="wallpaper">
        <h1>ISEUNGCHANG</h1>
        <input type="text" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <input type="text" placeholder="닉네임" />
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0;

  .wallpaper {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 400px;
    padding: 20px;
    gap: 20px;
  }
  & > * {
    margin-bottom: 10px;
  }

  h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
  }

  input[type="text"],
  input[type="password"],
  button {
    padding: 12px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 300px;
    box-sizing: border-box;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
  }

  label input[type="checkbox"] {
    margin-right: 8px;
  }

  button {
    cursor: pointer;
    background-color: #111f4d;
    color: white;
    border: none;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #113f4d;
  }

  .or {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }

  .or-hr {
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
    border: none;
    margin: 0 10px;
  }

  .or p {
    font-size: 14px;
    color: #666;
  }

  .socialButtons {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  .socialButtons a {
    display: block;
    border-radius: 50%;
    overflow: hidden;
    transition: transform 0.2s ease;
  }

  .socialButtons a:hover {
    transform: scale(1.1);
  }

  p {
    font-size: 14px;
    color: #666;
    margin-top: 20px;
  }
`;

const checkboxLabel = css`
  text-align: left;
`;

const socialButtons = css`
  display: flex;
  gap: 50px;
  margin-top: 10px;
`;
