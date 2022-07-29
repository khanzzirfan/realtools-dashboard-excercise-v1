import { axe } from 'jest-axe';
import { render } from '../../testUtils';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
  it('renders correctly with default styles', () => {
    const { asFragment } = render(<LinkButton to="/people/edit/1">Edit</LinkButton>);
    expect(asFragment()).toMatchSnapshot();
  });

  /** axe voilations check */
  it('should not have axe voilations', async () => {
    const { container } = render(<LinkButton to="/people/edit/1">Edit</LinkButton>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
