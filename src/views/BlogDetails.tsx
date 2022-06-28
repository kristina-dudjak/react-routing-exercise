import { BlogPostCard } from 'modules';
import { useLocation, useNavigate } from 'react-router-dom';

type BlogDets = {
  id: number;
  title: string;
  description: string;
};

export const BlogDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as BlogDets;
  function onReadBlog() {
    navigate('/blog', { replace: true });
  }
  return (
    <div>
      <BlogPostCard
        title={state.title}
        description={state.description}
        buttonText="Go Back to blog"
        onReadBlog={() => onReadBlog()}
      />
    </div>
  );
};
