import { css } from 'styled-components';

export const commonCssUtils = css`
  ${({ mr }) => mr && `margin-right: ${mr}px`};
  ${({ ml }) => ml && `margin-left: ${ml}px`};
  ${({ mt }) => mt && `margin-top: ${mt}px`};
  ${({ mb }) => mb && `margin-bottom: ${mb}px`};

  ${({ mx }) =>
    mx &&
    `
  margin-right: ${mx}px;
  margin-left: ${mx}px;
  `};

  ${({ my }) =>
    my &&
    `
  margin-top: ${my}px;
  margin-bottom: ${my}px;
  `};

  ${({ px }) =>
    px &&
    `
  padding-right: ${px}px;
  padding-left: ${px}px;
  `};

  ${({ py }) =>
    py &&
    `
  padding-top: ${py}px;
  padding-bottom: ${py}px;
  `};
  ${({ transparent }) => transparent && `background-color: transparent`};
`;

/** TODO


 */
