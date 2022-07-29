import '@testing-library/jest-dom';
import { axe } from 'jest-axe';
import { render, screen, fireEvent } from '../../testUtils';
import SearchField from './Search';

describe('SearchField', () => {
  it('should renders correctly with default styles', () => {
    const onChangeFn = jest.fn();
    const { asFragment } = render(
      <SearchField placeholder="search employees" value="" onChange={onChangeFn} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render filled css styles', () => {
    const onChangeFn = jest.fn();
    const { asFragment } = render(
      <SearchField placeholder="search employees" value="Ann" onChange={onChangeFn} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should trigger onChange callback', () => {
    const onChangeFn = jest.fn();
    render(<SearchField placeholder="search employees" value="" onChange={onChangeFn} />);
    const node = screen.getByRole('searchbox');
    fireEvent.change(node, { target: { value: 'Ann' } });
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });

  /** axe voilations check */
  it('should not have axe voilations', async () => {
    const onChangeFn = jest.fn();
    const { container } = render(
      <SearchField placeholder="search employees" value="" onChange={onChangeFn} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
