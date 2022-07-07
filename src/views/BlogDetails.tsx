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
  const params = useParams();

  return (
    <div>
      {params.id && (
        <div css={postContainer}>
          <p css={postTitle}>{blogPosts[params.id].title}</p>
          <p css={postDescription}>{blogPosts[params.id].description}</p>
          <p css={postText}>{blogPosts[params.id].text}</p>
        </div>
      )}
    </div>
  );
};
