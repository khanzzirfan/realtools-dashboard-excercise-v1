import App from '../App';
import { render, screen, waitFor } from '../testUtils';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('should navigate to add new member page', async () => {
    const { unmount } = render(<App />);
    await waitFor(() => {
      screen.getByTestId('row-1');
    });
    await userEvent.click(screen.getByTestId('addmember'));
    const title = screen.getByText('Form page coming in a PR...');
    expect(title).toBeInTheDocument();
    unmount();
  });
});
