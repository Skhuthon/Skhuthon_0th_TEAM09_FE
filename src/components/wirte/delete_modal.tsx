/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';


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
          삭제하시겠습니까?
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
