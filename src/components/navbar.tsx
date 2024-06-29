/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode, FC } from 'react';

interface NavProps {
  children: ReactNode;
}

const Navigation: FC<NavProps> = ({ children }) => {
  return (
    <div css={nav_bodyStyles}>
      <nav css={nav_headerStyles}>
        <div css={nav_logoStyles}>
          ISEUNGCHANG
        </div>
        <div css={nav_LinksStyles}>
          <a css={nav_LinkStyles} href="#">
            로그인
          </a>
          <span css={nav_separatorStyles}>|</span>
          <a css={nav_LinkStyles} href="#">
            회원가입
          </a>
        </div>
      </nav>

      <div css={nav_mainContentStyles}>
        {children}
      </div>
    </div>
  );
};

export default Navigation;

const nav_bodyStyles = css`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const nav_headerStyles = css`
  width: 100%;
  background-color: #111F4D;
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

  &:hover {
    text-decoration: underline;
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
  margin-top: 60px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;