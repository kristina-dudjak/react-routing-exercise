/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import { button, wrapper, link, linkWrapper } from './Header.styles';

interface Props {
  onLogin: () => void;
}

export const Header: React.FC<Props> = ({ onLogin }) => {
  return (
    <header css={wrapper}>
      <p>Router Exercise</p>
      <div css={linkWrapper}>
        <NavLink
          css={link}
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : '',
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink css={link} to="info">
          Info
        </NavLink>
        <NavLink
          css={link}
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : '',
            };
          }}
          to="blog"
        >
          Blog
        </NavLink>
        <button onClick={onLogin} css={button}>
          Change status
        </button>
      </div>
    </header>
  );
};
