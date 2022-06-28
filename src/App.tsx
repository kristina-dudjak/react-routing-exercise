import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'shared';
import { Blog, BlogDetails, Home, Info, Login } from 'views';

export const App: React.FC = () => {
  const [isLoggedIn, setIsLogggedIn] = useState<boolean>(false);
  function onLogin() {
    setIsLogggedIn(!isLoggedIn);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout onLogin={() => onLogin()} />}>
          <Route index element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="blog">
            <Route
              index
              element={isLoggedIn ? <Blog /> : <Navigate to="/login" replace />}
            />
            <Route path=":id" element={<BlogDetails />} />
          </Route>
          <Route
            path="login"
            element={isLoggedIn ? <Navigate to="/blog" replace /> : <Login />}
          />
        </Route>
      </Routes>
    </>
  );
};
