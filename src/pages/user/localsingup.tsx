import React, { useState } from "react";
import { css } from "@emotion/css";
import axios from "axios";

export default function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !nickname) {
      setErrorMessage("모든 필수 입력 항목을 입력해주세요.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("유효한 이메일 주소를 입력해주세요.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/v1/user/signup", {
        "email":email,
        "password": password,
        "nickname": nickname
    });
      setSuccessMessage("회원가입에 성공했습니다!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={container}>
      <div className="wallpaper">
        <h1>ISEUNGCHANG</h1>
        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button onClick={handleSignup}>회원가입</button>
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

  p {
    font-size: 14px;
    color: #666;
    margin-top: 20px;
  }
`;
