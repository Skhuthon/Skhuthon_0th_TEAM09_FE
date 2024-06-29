import React,{useState} from "react";
import { css } from "@emotion/css";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/login", {
        email: email,
        password: password,
    });
      console.log(res.data);
      localStorage.setItem("accessToken", res.data.accessToken);
localStorage.setItem("refreshToken", res.data.refreshToken);
router.push("/main");
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
    }
  };

  return (
    <div className={container}>
      <div className="wallpaper">
        <h1>ISEUNGCHANG</h1>
        <input type="text" placeholder="이메일" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}
        />
        <label className={checkboxLabel}>
          <input type="checkbox" id="remember" />
          간편 로그인 정보 저장
        </label>
        <button onClick={handleLogin}>로그인</button>
        <div className="or">
          <hr className="or-hr" />
          <p>소셜 로그인</p>
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
          아직 회원이 아니신가요?
          <Link href="/user/signup">회원가입</Link>
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

const checkboxLabel = css`
  text-align: left;
`;

const socialButtons = css`
  display: flex;
  gap: 50px;
  margin-top: 10px;
`;
