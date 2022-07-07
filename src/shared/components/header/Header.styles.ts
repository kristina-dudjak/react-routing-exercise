import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 0px;
`;

const button = css`
  border: 1px solid #dbdbdb;
  border-radius: 36px;
  width: 128px;
`;

const link = css`
  font-weight: 600;
  font-size: 20px;
  display: block;
  text-align: center;
`;

const linkWrapper = css`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export { wrapper, button, link, linkWrapper };
