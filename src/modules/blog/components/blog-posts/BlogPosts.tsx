/** @jsxImportSource @emotion/react */
import { BlogPost, blogPosts } from 'data';
import { BlogPostCard } from 'modules';
import { useNavigate } from 'react-router-dom';
import { wrapper } from './BlogPosts.styles';

export const BlogPosts: React.FC = () => {
  const navigate = useNavigate();
  function onReadBlog(blogPost: BlogPost) {
    navigate('/blog/' + blogPost.id);
  }

  return (
    <div css={wrapper}>
      <ul>
        {blogPosts.map((blogPost) => (
          <li key={blogPost.id}>
            <BlogPostCard
              title={blogPost.title}
              description={blogPost.description}
              onReadBlog={() => onReadBlog(blogPost)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
