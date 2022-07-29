import { axe } from 'jest-axe';
import { render, screen, waitFor } from '../../../testUtils';
import People from '../People';

describe('People page axe', () => {
  /** axe voilations check */
  it('should not have axe voilations', async () => {
    const { container } = render(<People />);
    await waitFor(() => {
      screen.getByTestId('row-1');
    });

    await waitFor(
      async () => {
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      },
      { timeout: 5000 }
    );
  });
});
