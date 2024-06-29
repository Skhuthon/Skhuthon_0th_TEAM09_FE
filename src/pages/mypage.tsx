import React from "react";
import { css } from "@emotion/css";

import Bookmarklist from "../components/mypage/bookmarklist";
import Likelist from "../components/mypage/likelist";
import Mypagelist from "@/components/mypage/mypagelist";
import Mypageinfo from "@/components/mypage/mypageinfo";
import Mypost from "@/components/mypage/mypost";

export default function mypage() {
  return (
    <div className={container}>
      <Bookmarklist />
      <Likelist />
      <Mypost />
      <Mypageinfo />
    </div>
  );
}

const container = css`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  gap: 20px;
  width: 100vw;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    align-items: stretch;
  }

  & > * {
    flex: 1 1 45%;
  }

  @media (max-width: 1200px) {
    & > * {
      flex: 1 1 100%;
    }
  }
`;
