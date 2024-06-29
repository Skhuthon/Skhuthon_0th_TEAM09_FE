import React from "react";
import { css } from "@emotion/css";
import Image from "next/image";
import Category from "@/components/main/category";
export default function Main() {
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
      <Category />
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
