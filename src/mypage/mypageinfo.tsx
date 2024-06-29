/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';

export default function Profile() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const apiUrl = 'https://dofarming.duckdns.org/api/v1/user';
      const token = localStorage.getItem('authToken');

      if (token) {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data;
        setNickname(userData.nickname);
        setEmail(userData.email);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const handleNicknameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setNickname(e.target.value);
  };

  const handleSave = async () => {
    try {
      const apiUrl = 'https://dofarming.duckdns.org/api/v1/user/info';
      const token = localStorage.getItem('authToken');

      if (token) {
        await axios.patch(apiUrl, {
          nickname,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert("저장되었습니다!");
      }
    } catch (error) {
      console.error('Error updating user info:', error);
      alert("저장에 실패했습니다.");
    }
  };

  return (
    <div className={container}>
      <div className="profileContainer">
        <div className="profileContent">
          <FaUserCircle className="profileIcon" />
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            className="profileNickname"
            placeholder="닉네임을 입력하세요"
          />
          <div className="profileEmail">
            {email}
          </div>
          <button className="profileSubmit" onClick={handleSave}>
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;

  .profileContainer {
    text-align: center;
  }

  .profileContent {
    width: 50vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profileIcon {
    font-size: 100px;
    color: #262626;
    margin-bottom: 20px;
  }

  .profileNickname {
    border: none;
    background-color: #f6f6f6;
    width: 100%;
    max-width: 300px;
    height: 44.5px;
    border-radius: 15px;
    color: #5b5b5b;
    margin: 20px 0;
    padding: 15px 25px;
    font-size: 20px;
    text-align: center;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #aaa;
    }
  }

  .profileEmail {
    background-color: #f6f6f6;
    width: 100%;
    max-width: 300px;
    height: 44.5px;
    border-radius: 15px;
    color: #5b5b5b;
    margin: 10px 0;
    padding: 15px 25px;
    font-size: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profileSubmit {
    margin-top: 35px;
    padding: 15px 0;
    font-size: 1rem;
    background-color: gray;
    color: white;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    border-radius: 50px;
    width: 200px;
    border: none;

    &:hover {
      background-color: #111F4D;
      color: white;
    }
  }
`;
