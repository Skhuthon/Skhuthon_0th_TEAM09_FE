/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const modalBackdropStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const modalBoxStyle = css`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  max-height: 300px;
  box-sizing: border-box;
  width: 70%;
  height: auto;
  position: relative;
  overflow: hidden;
  @media (min-width: 576px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const modalHeaderStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`;

const modalTitleStyle = css`
  margin: 0;
  padding-top: 13%;
`;

const modalBodyStyle = css`
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.2rem;
`;

const modalFooterStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
`;

const buttonStyle = css`
  border: none;
  cursor: pointer;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  flex: 1;

  &:hover {
    color: #ed8c37;
    cursor: pointer;
  }

  &:first-of-type {
    color: red;
    }
  

  &:last-of-type {
    color: green;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

type ModalProps = {
  onClose: () => void;
  onConfirm: () => void;
};

const Modal = ({ onClose, onConfirm }: ModalProps) => {
  return (
    <div css={modalBackdropStyle}>
      <div css={modalBoxStyle}>
        <div css={modalHeaderStyle}>
        </div>
        <div css={modalBodyStyle}>
          로그인 후 이용해주세요
        </div>
        <div css={modalFooterStyle}>
          <button css={buttonStyle} onClick={onClose}>닫기</button>
          <button css={buttonStyle} onClick={onConfirm}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
