import { useState } from 'react';
import { Layout } from 'shared';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { BlogDetails, Home, Info, Login } from 'views';
import { BlogPosts } from 'modules';

export const App: React.FC = () => {
  const [isLoggedIn, setIsLogggedIn] = useState<boolean>(false);

  function onLogin() {
    setIsLogggedIn(!isLoggedIn);
  }
  return (
    <Routes>
      <Route path="/" element={<Layout onLogin={() => onLogin()} />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route
          path="blog"
          element={isLoggedIn ? <Outlet /> : <Navigate to="/login" />}
        >
          <Route index element={<BlogPosts />} />
          <Route path=":id" element={<BlogDetails />} />
        </Route>
        <Route
          path="login"
          element={isLoggedIn ? <Navigate to="/blog" /> : <Login />}
        />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Route>
    </Routes>
  );
};
