import { css } from '@emotion/react';

const postContainer = css`
  margin: auto;
  box-shadow: 0px 4px 8px rgba(5, 30, 72, 0.04),
    0px 0px 2px rgba(5, 30, 72, 0.12);
  border-radius: 6px;
`;

const postTitle = css`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const postDescription = css`
  text-align: center;
  margin-bottom: 40px;
`;

const postText = css`
  text-align: center;
`;

export { postContainer, postTitle, postDescription, postText };
