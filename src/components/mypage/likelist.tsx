import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import axios from "axios";

interface Post {
  id: number;
  name: string;
  description: string;
}

export default function Likelist() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/bookmarklist");
        setPosts(response.data);
      } catch (error) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className={postsWrapper}>
      <div className={postsHeader}>좋아요</div>
      {posts.map((post) => (
        <div key={post.id} className={postWrapper}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://example.com/${post.name}`}
            className={link}>
            <h2 className={postTitle}>{post.name}</h2>
          </a>
          <p className={postDescriptionText}>{post.description}</p>
        </div>
      ))}
    </div>
  );
}

const postsWrapper = css`
  border: 1px solid #e1e4e8;
  width: 30vw;
  height: 50vh;
  margin: 20px auto;
  border-radius: 15px;
  overflow: auto;
  padding: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const pageTitle = css`
  font-size: 36px;
  font-weight: bold;
  color: #dc3412;
  margin: 20px 0;
  text-align: center;
`;

const postsHeader = css`
  padding: 16px 0;
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 2px solid #e1e4e8;
  text-align: center;
`;

const postWrapper = css`
  width: 100%;
  border-bottom: 1px solid #e1e4e8;
  padding: 24px 0;
  &:last-child {
    border-bottom: none;
  }
`;

const postDescription = css`
  padding: 12px 0;
`;

const link = css`
  text-decoration: none;
`;

const postTitle = css`
  margin: 0;
  color: #0366d6;
  font-size: 20px;
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
    color: #0247a3;
  }
`;

const postDescriptionText = css`
  margin: 0;
  font-size: 14px;
  color: #555;
  padding-top: 8px;
`;
