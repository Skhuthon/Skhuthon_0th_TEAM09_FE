/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode, FC } from "react";
import Link from "next/link";

interface NavProps {
  children?: ReactNode;
}

const Navigation: FC<NavProps> = ({ children }) => {
  return (
    <div css={nav_bodyStyles}>
      <nav css={nav_headerStyles}>
        <Link href="/" css={nav_logoStyles}>
          ISEUNGCHANG
        </Link>
        <Link href="/main" css={nav_logoStyles}>
          서비스
        </Link>
        <div css={nav_LinksStyles}>
          <Link href="/user/login" css={nav_LinkStyles}>
            로그인
          </Link>

          <span css={nav_separatorStyles}>|</span>
          <Link href="/user/signup" css={nav_LinkStyles}>
            회원가입
          </Link>
        </div>
      </nav>

      <div css={nav_mainContentStyles}>{children}</div>
    </div>
  );
};

export default Navigation;

const nav_bodyStyles = css`
  margin: 0;
  padding: 0;
  height: 60px;
  overflow-x: hidden;
`;

const nav_headerStyles = css`
  width: 100%;
  background-color: #111f4d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  left: 0;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const nav_logoStyles = css`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 2rem;
  text-decoration: none;
  color: white;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

const nav_LinksStyles = css`
  display: flex;
  gap: 2rem;
  margin-right: 4rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-right: 2rem;
  }
`;

const nav_LinkStyles = css`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  text-decoration-line: none;

  &:hover {
    text-decoration-line: none;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const nav_separatorStyles = css`
  color: white;
  font-size: 1rem;
  align-self: center;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const nav_mainContentStyles = css`
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
