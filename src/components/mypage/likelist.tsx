/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";

const UserLikes = ({
  posts,
}: {
  posts: Array<{ id: number; name: string; description: string }>;
}) => {
  if (!posts) {
    return null;
  }

  return (
    <div className={postsWrapper}>
      <h1 className={pageTitle}>글제목</h1>
      <div className={postsHeader}>좋아요 목록</div>
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
};

const posts = [
  {
    id: 1,
    name: "글 제목 1",
    description: "글 내용 1",
  },
  {
    id: 2,
    name: "글 제목 2",
    description: "글 내용 2",
  },
  {
    id: 3,
    name: "글 제목 3",
    description: "글 내용 3",
  },
];

const Page = () => <UserLikes posts={posts} />;

const postsWrapper = css`
  border: 1px solid #e1e4e8;
  border-radius: 15px;
  width: 30%;
  overflow: scroll;
  padding: 0px 16px;
`;

const pageTitle = css`
  font-size: 36px;
  font-weight: bold;
  color: #dc3412;
  margin: 20px 0;
`;

const postsHeader = css`
  padding: 16px 0;
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 1px solid #e1e4e8;
`;

const postWrapper = css`
  width: 100%;
  border-bottom: 1px solid #e1e4e8;
  padding: 24px 0;
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

  &:hover {
    text-decoration: underline;
  }
`;

const postDescriptionText = css`
  margin: 0;
  font-size: 14px;
`;

export default Page;
