/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect, ReactNode, FC, MouseEvent } from 'react';

interface NavProps {
  children: ReactNode;
}

const Navigation: FC<NavProps> = ({ children }) => {
  const [Open, setOpen] = useState<boolean>(false);

  const toggleSidebar = (event: MouseEvent<HTMLDivElement>) => {
    setOpen(!Open);
  };

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <div css={sidebar_bodyStyles}>
      <nav css={sidebar_headerStyles}>
        <div css={sidebar_hamburgerStyles} onClick={toggleSidebar}>
          ☰
        </div>
        <div>ISEUNGCHANG</div>
      </nav>

      <div css={sidebar_Styles(Open)}>
        <a css={sidebar_sidebarLinkStyles} href="#">
          제품소개
        </a>
        <a css={sidebar_sidebarLinkStyles} href="#">
          글작성
        </a>
        <a css={sidebar_sidebarLinkStyles} href="#">
          내 정보
        </a>
      </div>

      <div css={sidebar_mainContentStyles(Open)}>
        {children}
      </div>
    </div>
  );
};

export default Navigation;

const sidebar_bodyStyles = css`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const  sidebar_headerStyles = css`
  width: 100%;
  background-color: #111F4D;
  color: white;
  display: flex;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  left: 0;
`;

const  sidebar_hamburgerStyles = css`
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
`;

const sidebar_Styles = (open: boolean) => css`
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: ${open ? '0' : '-250px'};
  background-color: #333;
  opacity: 0.8;
  overflow-x: hidden;
  transition: left 0.3s;
  padding-top: 60px;
  color: white;
  z-index: 999;

  @media (max-width: 768px) {
    width: 200px;
    left: ${open ? '0' : '-200px'};
  }

  @media (max-width: 480px) {
    width: 150px;
    left: ${open ? '0' : '-150px'};
  }
`;

const sidebar_sidebarLinkStyles = css`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 1.25rem;
  color: white;
  display: block;
  transition: 0.3s;

  &:hover {
    background-color: #575757;
  }
`;

const sidebar_mainContentStyles = (open: boolean) => css`
  margin-top: 60px;
  padding: 1rem;
  transition: margin-left 0.3s;
  margin-left: ${open ? '250px' : '0'};

  @media (max-width: 768px) {
    margin-left: ${open ? '200px' : '0'};
  }

  @media (max-width: 480px) {
    margin-left: ${open ? '150px' : '0'};
  }
`;