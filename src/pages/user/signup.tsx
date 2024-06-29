import React from "react";
import { css } from "@emotion/css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function signup() {
  const router = useRouter();

  const handleEmailSignup = () => {
    router.push("/user/localsingup");
  };
  return (
    <div className={container}>
      <div className="wallpaper">
        <h1>ISEUNGCHANG</h1>
        <p>회원가입하고 서비스 사용을 시작해보세요</p>
        <button onClick={handleEmailSignup}>이메일 회원 가입</button>
        <div className="or">
          <hr className="or-hr" />
          <p>소셜 회원가입</p>
          <hr className="or-hr" />
        </div>
        <div className={socialButtons}>
          <a href="#">
            <Image
              src="/login/googlelogin.png"
              width={50}
              height={50}
              alt="Google 로그인"
            />
          </a>
          <a href="#">
            <Image
              src="/login/kakaologin.png"
              width={50}
              height={50}
              alt="카카오 로그인"
            />
          </a>
        </div>
        <p>
          이미 계정이 있으신가요?
          <Link href="/user/login">로그인</Link>
        </p>
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

const socialButtons = css`
  display: flex;
  gap: 50px;
  margin-top: 10px;
`;
