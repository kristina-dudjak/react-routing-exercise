/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';

export const Blog: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
