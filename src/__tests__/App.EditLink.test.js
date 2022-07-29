import App from '../App';
import { render, screen, waitFor, within } from '../testUtils';
import userEvent from '@testing-library/user-event';

describe('Edit page', () => {
  it('should navigate to edit member page', async () => {
    const { unmount } = render(<App />);
    await waitFor(() => {
      screen.getByTestId('row-1');
    });

    const element = screen.getByTestId('row-1');
    const editLink = within(element).getByText('Edit');
    await userEvent.click(editLink);
    const title = screen.getByText('Form page coming in a PR...');
    expect(title).toBeInTheDocument();
    unmount();
  });
});
