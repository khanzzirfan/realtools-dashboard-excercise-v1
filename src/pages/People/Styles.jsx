import styled from 'styled-components';
import { ReactComponent as IconUser } from 'theme/icons/user.svg';

export const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

export const Grid = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const StyledIconUser = styled(IconUser)`
  width: 1rem;
  height: 1rem;
  margin-right: 8px;
  & path {
    fill: var(--colors-blank);
  }
`;

export const StyledTableWrapper = styled('div')`
  padding: 16px 0 32px;
`;

export const StyledActionPanel = styled('div')`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const LoaderContainer = styled.div`
  display: grid;
  justify-content: center;
  min-height: 255px;
  align-items: center;
`;
