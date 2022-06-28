/** @jsxImportSource @emotion/react */
import { BlogPost, blogPosts } from 'data';
import { BlogPostCard } from 'modules';
import { Outlet, useNavigate } from 'react-router-dom';
import { wrapper } from './Blog.styles';

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  function onReadBlog(blogPost: BlogPost) {
    navigate(blogPost.id.toString(), {
      state: {
        id: blogPost.id,
        title: blogPost.title,
        description: blogPost.description,
      },
    });
  }

  return (
    <div css={wrapper}>
      <ul>
        {blogPosts.map((blogPost) => (
          <li key={blogPost.id}>
            <BlogPostCard
              title={blogPost.title}
              description={blogPost.description}
              buttonText="Read blog"
              onReadBlog={() => onReadBlog(blogPost)}
            />
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
