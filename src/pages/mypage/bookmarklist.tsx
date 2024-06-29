/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


interface UserBookmarkProps {
  posts: {
    id: number;
    name: string;
    description: string;
  }[];
}

const UserPosts = ({ posts }: UserBookmarkProps) => {
  if (!posts) {
    return null;
  }

  return (
    <div css={styles.postsWrapper}>
      <h1 css={styles.pageTitle}>글제목</h1>
      <div css={styles.postsHeader}>
        북마크 한 글
      </div>
      {posts.map((post) => (
        <div key={post.id} css={styles.postWrapper}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://example.com/${post.name}`}  
            css={styles.link}
          >
            <h2 css={styles.postTitle}>{post.name}</h2>
          </a>
          <p css={styles.postDescriptionText}>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

const posts = [
  {
    id: 1,
    name: '글 제목 1',
    description: '글 내용 1',
  },
  {
    id: 2,
    name: '글 제목 2',
    description: '글 내용 2',
  },
  {
    id: 3,
    name: '글 제목 3',
    description: '글 내용 3',
  },
];

const Page = () => <UserPosts posts={posts} />;

const styles = {
  pageTitle: css`
    font-size: 36px;
    font-weight: bold;
    color: #DC3412;
    margin: 20px 0;
  `,
  postsWrapper: css`
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 0px 16px;
  `,
  postsHeader: css`
    padding: 16px 0;
    font-size: 2rem;
    font-weight: 600;
    border-bottom: 1px solid #e1e4e8;
  `,
  postWrapper: css`
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
    padding: 24px 0;
  `,
  postDescription: css`
    padding: 12px 0;
  `,
  link: css`
    text-decoration: none;
  `,
  postTitle: css`
    margin: 0;
    color: #0366d6;
    font-size: 20px;
    display: inline-block;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
  postDescriptionText: css`
    margin: 0;
    font-size: 14px;
  `,
};


export default Page;
