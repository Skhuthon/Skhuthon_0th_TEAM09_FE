/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer css={style}>
      <div className="left">
        <div>
          <div className="title">ISEUNGCHANG</div>
          <div className="description">Personalized product Service</div>
        </div>
      </div>
      <div className="right">
        <div className="icon-container">
          <a href="mailto:email@example.com">
            <FaEnvelope className="icon" />
          </a>
          <a href="https://github.com/Skhuthon/Skhuthon_0th_TEAM09_FE">
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="credits">made by. SKHUTHON team 9</div>
      </div>
    </footer>
  );
};

export default Footer;

const style = css`
  background-color: #111;
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;

  bottom: 0;

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .right {
    flex-direction: column;
    align-items: flex-end;
    margin-right: 2rem;
  }

  .icon-container {
    display: flex;
    gap: 10px;
  }

  .icon {
    width: 24px;
    height: 24px;
    color: #fff;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ccc;
  }

  .description {
    font-size: 0.9rem;
    color: #666;
  }

  .credits {
    font-size: 0.9rem;
    color: #666;
    margin-top: 10px;
  }
`;
