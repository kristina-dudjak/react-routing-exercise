import { useState } from 'react';
import { Layout } from 'shared';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Blog, BlogDetails, Home, Info, Login } from 'views';
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
          element={isLoggedIn ? <Blog /> : <Navigate to="/login" />}
        >
          <Route
            index
            element={isLoggedIn ? <BlogPosts /> : <Navigate to="/login" />}
          />
          <Route
            path=":id"
            element={isLoggedIn ? <BlogDetails /> : <Navigate to="/login" />}
          />
        </Route>
        <Route
          path="login"
          element={!isLoggedIn ? <Login /> : <Navigate to="/blog" />}
        />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Route>
    </Routes>
  );
};
