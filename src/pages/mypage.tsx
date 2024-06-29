import React from "react";
import { css } from "@emotion/css";

import Bookmarklist from "../components/mypage/bookmarklist";
import Likelist from "../components/mypage/likelist";
import Mypagelist from "@/components/mypage/mypagelist";
import Mypageinfo from "@/components/mypage/mypageinfo";
export default function mypage() {
  return (
    <div className={container}>
      <Bookmarklist /> <Likelist />
      <Mypagelist />
      <Mypageinfo />
    </div>
  );
}

const container = css`
  display: flex;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0;
`;
