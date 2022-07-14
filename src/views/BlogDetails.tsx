/** @jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import { blogPosts } from 'data';
import {
  postContainer,
  postTitle,
  postDescription,
  postText,
} from './BlogDetails.styles';

export const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const blog = blogPosts.find((blogPost) => blogPost.id.toString() === id);

  return (
    <div>
      {blog && (
        <div css={postContainer}>
          <p css={postTitle}>{blog.title}</p>
          <p css={postDescription}>{blog.description}</p>
          <p css={postText}>{blog.text}</p>
        </div>
      )}
    </div>
  );
};
