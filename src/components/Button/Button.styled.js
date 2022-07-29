import styled, { css } from 'styled-components';
import { commonCssUtils } from 'theme/commonCss';

/**
 * TODO: if no other variant other than outlined and contained, then use !==contained logic
 *
 */

const focus = css`
  background: ${({ variant }) =>
    variant === 'outlined' ? `var(--colors-blank)` : `var(--colors-irisBlue)`};
  ${({ variant }) =>
    (variant === 'contained' || !variant) && `border: 3px solid var(--colors-moonRaker)`};
  ${({ variant }) =>
    variant === 'outlined' &&
    `
    border: 6px solid rgba(98, 77, 227, 0.3);
  `}
`;

const hover = css`
  ${({ variant }) =>
    (variant === 'contained' || !variant) &&
    `
  background: var(--colors-electricVoilet);
  box-shadow: 0px 6px 12px rgba(98, 77, 227, 0.3);
  box-sizing: inherit;
  `}
  ${({ variant }) => variant === 'outlined' && `background: var(--colors-lightSelago)`};
`;

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 10px 24px;
  border: 2px solid rgba(98, 77, 227, 1);
  border-radius: 45px;
  color: var(--colors-blank);
  outline: none;

  background: var(--colors-irisBlue);
  ${({ variant }) =>
    variant === 'outlined' &&
    `
    background: var(--colors-blank); 
    border: 2px solid rgba(98, 77, 227, 0.45);
    box-sizing: border-box;
    border-radius: 50px;
    color: var(--colors-irisBlue);
  `};

  &:hover {
    ${hover}
  }

  &:focus {
    ${focus}
  }

  ${commonCssUtils}
`;
