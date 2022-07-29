import { render, screen, waitFor, act } from '../../../testUtils';
import userEvent from '@testing-library/user-event';
import People from '../People';

jest.useFakeTimers('modern');

describe('Peoples Page', () => {
  beforeAll(() => {
    // we're using fake timers because we don't want to
    // wait a full second for this test to run.
    jest.useFakeTimers('modern');
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should renders page with default data', async () => {
    render(<People />);
    await waitFor(() => {
      screen.getByTestId('row-1');
    });

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('addmember')).toBeInTheDocument();
    expect(screen.getByTestId('addmember')).toHaveTextContent('user.svg Add member');

    await waitFor(() => {
      expect(screen.getByTestId('title')).toHaveTextContent('People7 employees');
    });
    expect(await screen.findByText('Jane Doe')).toBeInTheDocument();
  });

  it('should search for specific employee when user enters search keywords', async () => {
    render(<People />);
    await waitFor(() => {
      screen.getByTestId('row-1');
    });

    await userEvent.paste(screen.getByRole('searchbox'), 'Jane');
    act(() => jest.advanceTimersByTime(600));
    await waitFor(() => {
      expect(screen.getByTestId('title')).toHaveTextContent('People1 employee');
    });
  });

  it('should search for specific employee when user selects filter contractors', async () => {
    render(<People />);
    await waitFor(() => {
      screen.getByTestId('row-1');
    });

    await userEvent.click(screen.getByText('Contractor', { selector: 'span' }));
    act(() => jest.advanceTimersByTime(600));
    await waitFor(() => {
      expect(screen.getByTestId('title')).toHaveTextContent('People2 employee');
    });
  });

  it('should search for both contractor and employee filters employee', async () => {
    render(<People />);
    await waitFor(() => {
      screen.getByTestId('row-1');
    });

    await userEvent.click(screen.getByText('Contractor', { selector: 'span' }));
    act(() => jest.advanceTimersByTime(600));

    await userEvent.click(screen.getByText('Employee', { selector: 'span' }));
    act(() => jest.advanceTimersByTime(600));

    await waitFor(() => {
      expect(screen.getByTestId('title')).toHaveTextContent('People7 employee');
    });
  });

  it('should search for both contractor and employee filters plus the search text', async () => {
    render(<People />);
    await waitFor(() => {
      screen.getByTestId('row-1');
    });

    await userEvent.paste(screen.getByRole('searchbox'), 'Jane');
    act(() => jest.advanceTimersByTime(600));

    await userEvent.click(screen.getByText('Contractor', { selector: 'span' }));
    act(() => jest.advanceTimersByTime(600));

    await userEvent.click(screen.getByText('Employee', { selector: 'span' }));
    act(() => jest.advanceTimersByTime(600));

    await waitFor(() => {
      expect(screen.getByTestId('title')).toHaveTextContent('People1 employee');
    });
  });
});
