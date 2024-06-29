/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { FaHeart, FaRegBookmark } from 'react-icons/fa';

const pageContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const cardStyle = css`
  background-color: #ffffff;
  width: 100%;
  max-width: 800px;
  margin: 4em 0;
  padding: 0 0 20 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const headerStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
`;

const profileAndPriceStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vh;
  padding: 0px 2.2rem;
`;

const profileStyle = css`
  display: flex;
  align-items: center;
`;

const profileIconStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-right: 10px;
  gap;0.5em;
`;

const tagStyle = css`
  display: flex;
  margin-top: 10px;
  padding: 0 2em;
`;

const tagItemStyle = css`
  background-color: #ddd;
  color: #333;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 0.9rem;
`;

const footerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 1.5em;
`;

const commentSectionStyle = css`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const commentStyle = css`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e1e1e1;

  &:last-of-type {
    border-bottom: none;
  }
`;

const commentUserStyle = css`
  font-weight: bold;
  margin-right: 10px;
`;

const commentTextStyle = css`
  flex: 1;
`;

const imageStyle = css`
  width: 70%;
  height: 45vh;
  border: 1px solid lightgray;  
  border-radius: 10px;
  margin: 0 auto;
`;

const iconButtonStyle = css`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  color: #000;

  &:hover {
    color: #ff0000;
  }
`;

const productInfoFlex = css`
  display: flex;
  justify-content: space-between;
  margin-left:2.2rem
`;

const MyPage = () => {
  const [likes, setLikes] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleBookmarkClick = () => {
    setBookmarks(bookmarks + 1);
  };

  return (
    <div css={pageContainerStyle}>
      <div css={cardStyle}>
        <div css={headerStyle}>
          <button>수정</button>
          <button>삭제</button>
        </div>

        <div css={imageStyle}>
          <img src="path/to/image.jpg" alt="product" />
        </div>

        <div css={profileAndPriceStyle}>
          <div css={profileStyle}>
            <div css={profileIconStyle}>
              <FaHeart />
            </div>
            <span>user1</span>
          </div>
          <div>1,100,000₩</div>
        </div>

        <div css={tagStyle}>
          <div css={tagItemStyle}>#회색</div>
          <div css={tagItemStyle}>#디지털/가전</div>
        </div>

        <div css={productInfoFlex}>
          <p>좋은 성능을 가진 노트북입니다.</p>
        </div>

        <div css={footerStyle}>
          <div>
            <button css={iconButtonStyle} onClick={handleLikeClick}>
              <FaHeart /> {likes}
            </button>
            <button css={iconButtonStyle} onClick={handleBookmarkClick}>
              <FaRegBookmark /> {bookmarks}
            </button>
          </div>
        </div>

        <div css={commentSectionStyle}>
          <div css={commentStyle}>
            <span css={commentUserStyle}>woogym</span>
            <span css={commentTextStyle}>M1 칩은 Apple이 설계한 ARM 아키텍처 기반의 SoC...</span>
          </div>
          <div css={commentStyle}>
            <span css={commentUserStyle}>jjekrrq</span>
            <span css={commentTextStyle}>M1 칩은 통합 메모리 아키텍처를 사용하여...</span>
          </div>
          <div css={commentStyle}>
            <span css={commentTextStyle}>M1 칩을 탑재한 Mac은 빠르게 부팅되고...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
