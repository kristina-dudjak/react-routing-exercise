/** @jsxImportSource @emotion/react */
import { BlogPost, blogPosts } from 'data';
import { BlogPostCard } from 'modules';
import { wrapper } from './Blog.styles';

export const Blog: React.FC = () => {
  function onReadBlog(blogPost: BlogPost) {
    console.log('TODO: go to details page', blogPost);
  }

  return (
    <div css={wrapper}>
      <h1>Blog post title 2</h1>
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
