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
        <NavLink to="" css={link}>
          Home
        </NavLink>
        <NavLink to="info" css={link}>
          Info
        </NavLink>
        <NavLink to="/blog" css={link}>
          Blog
        </NavLink>
        <button onClick={onLogin} css={button}>
          Change status
        </button>
      </div>
    </header>
  );
};
