/** @jsxImportSource @emotion/react */
import { wrapper } from './BlogPostCard.styles';

interface BlogPostCardProps {
  title: string;
  description: string;
  buttonText: string;
  onReadBlog: () => void;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  buttonText,
  onReadBlog,
}) => {
  return (
    <div css={wrapper}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onReadBlog}>{buttonText}</button>
    </div>
  );
};
