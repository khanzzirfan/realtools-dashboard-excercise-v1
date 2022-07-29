import styled from 'styled-components';
import TextField from 'components/Form/TextField';
import { ReactComponent as IconSearch } from 'theme/icons/search.svg';

const rem = (size) => `${parseInt(size) / 16}rem`;

export const SearchInput = styled(TextField)`
  margin-left: 12px;
  margin-right: 6px;
  margin-top: 12px;
  margin-bottom: 11px;
  border: none;
  font-size: ${rem(14)};
  line-height: 1.25;
  padding: 0;
`;

export const StyledIconSearch = styled(IconSearch)`
  height: 16px;
  width: 16px;
  & > path {
    fill: var(--colors-lynch);
  }
`;

export const SearchFieldWrapper = styled('div')`
  display: flex;
  align-items: center;

  ${({ filled }) =>
    filled &&
    `background: var(----colors-zircon);
    border: 1px solid var(--colors-selago);
    box-shadow: inset 1px 2px 3px var(--colors-lightspindle);
    border-radius: 20px;
    `};

  &:hover {
    border: 1px solid var(--colors-selago);
    border-radius: 20px;
    background: var(----colors-zircon);
  }
  &:active,
  &:focus {
    background: var(----colors-zircon);
    border: 1px solid var(--colors-selago);
    box-shadow: inset 1px 2px 3px var(--colors-lightspindle);
    border-radius: 20px;
  }
  padding-right: 24px;
  padding-left: 24px;
`;
