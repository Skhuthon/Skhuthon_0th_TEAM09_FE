/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { GoHeartFill } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdBookmarkBorder } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";  


const MyPage = () => {
  const router = useRouter();

  const goToProfile = () => {
    router.push('/user/info/real');
  };

  const goToMyDiary = () => {
    router.push('/diary/mydiary');
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/user/login');
  };

  const goToMyInfo = () => {
    router.push('/user/info');
  };

  return (
    <div css={myPageContainerStyle}>
      <div css={myPageContentStyle}>
        <div css={myPageCardStyle} onClick={goToMyInfo}>
          <div css={myPageTextNaviStyle}>
            <FaUserCircle css={myPageIconStyle} />&nbsp; 내 정보
          </div>
        </div>
        <div css={myPageCardStyle} onClick={goToProfile}>
          <div css={myPageTextNaviStyle}>
            <GoHeartFill css={myPageIconStyle} />&nbsp; 좋아요 목록
          </div>
        </div>
        <div css={myPageCardStyle} onClick={goToMyDiary}>
          <div css={myPageTextNaviStyle}>
            <IoDocumentTextOutline css={myPageIconStyle} />&nbsp; 작성글 목록
          </div>
        </div>
        <div css={myPageCardStyle} onClick={handleLogout}>
          <div css={myPageTextNaviStyle}>
            <MdBookmarkBorder css={myPageIconStyle} />&nbsp; 북마크 목록
          </div>
        </div>
      </div>
    </div>
  );
};

const myPagePrimaryColor = '#DC3412';
const myPageCardBackground = '#ffffff';
const myPageTextColor = '#333';
const myPageBoxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

const myPageContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

const myPageCardStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  margin: 10px 0;
  background-color: ${myPageCardBackground};
  border-radius: 10px;
  box-shadow: ${myPageBoxShadow};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const myPageTextNaviStyle = css`
  font-size: 1.2rem;
  color: ${myPageTextColor};
  display: flex;
  align-items: center;
`;

const myPageIconStyle = css`
  font-size: 1.5rem;
  color: ${myPagePrimaryColor};
  transition: color 0.2s ease;

  &:hover {
    color: rgba(165, 42, 42, 1); 
  }
`;

const myPageContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10em
`;


export default MyPage;
