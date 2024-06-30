/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ReactNode, useEffect, FC, useState } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

interface NavProps {
  children?: ReactNode;
}

const Navigation: FC<NavProps> = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken(null);
  };
  const [accessToken, setAccessToken] = useState<string | null>("");
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") as string;
    setAccessToken(accessToken);
  }, []);

  return (
    <div css={nav_bodyStyles}>
      <nav css={nav_headerStyles}>
        <Link href="/" css={nav_logoStyles}>
          ISEUNGCHANG
        </Link>

        <div css={nav_LinksStyles}>
          {accessToken ? (
            <>
              <div css={logout} onClick={handleLogout}>
                <FaUserCircle css={iconStyle} />
                <span>이현우</span>
              </div>{" "}
            </>
          ) : (
            <>
              <Link href="/user/login" css={nav_LinkStyles}>
                로그인
              </Link>
              <span css={nav_separatorStyles}>|</span>
              <Link href="/user/signup" css={nav_LinkStyles}>
                회원가입
              </Link>
            </>
          )}
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
const iconStyle = css`
  font-size: 30px;
  color: #dc3412;
`;
const logout = css`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
