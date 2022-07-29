import styled from 'styled-components';
import { commonCssUtils } from 'theme/commonCss';

const Text = styled.span`
  ${({ theme, size }) => size && theme.typography[size]};
  ${({ color }) => color && color === 'dark' && ` color: var(--colors-darkBlue);`}
  ${({ color }) => color && color === 'normal' && ` color: var(--colors-irisBlue);`}
  ${({ color }) => color && color === 'light' && ` color: var(--colors-lynch);`}
  ${commonCssUtils}
`;

export default Text;

export const TextLight = styled(Text)`
  color: var(--colors-lynch);
`;
