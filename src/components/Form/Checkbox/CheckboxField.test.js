import '@testing-library/jest-dom/extend-expect';
import { axe } from 'jest-axe';
import { render, screen, fireEvent } from '../../../testUtils';
import CheckboxField from './CheckboxField';

describe('Checkbox', () => {
  it('should renders correctly with text contractor and checked false', () => {
    const onChangeFn = jest.fn();
    render(
      <CheckboxField label="Contractor" name="contractor" checked={false} onChange={onChangeFn} />
    );
    const element = screen.getByTestId('checkboxlabel');
    expect(element).toHaveTextContent('Contractor');
    // not.toBeInTheDocument
    expect(screen.queryAllByTestId('innercheckmark')).toEqual([]);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.checked).toEqual(false);
  });

  it('should renders correctly with text contractor and checked state true', () => {
    const onChangeFn = jest.fn();
    render(
      <CheckboxField label="Contractor" name="contractor" checked={true} onChange={onChangeFn} />
    );
    const element = screen.getByTestId('checkboxlabel');
    expect(element).toHaveTextContent('Contractor');
    // not.toBeInTheDocument
    expect(screen.queryByTestId('innercheckmark')).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.checked).toEqual(true);
  });

  it('should trigger onChange callback when user selected', () => {
    const onChangeFn = jest.fn();
    render(
      <CheckboxField label="Contractor" name="contractor" checked={true} onChange={onChangeFn} />
    );
    fireEvent.click(screen.getByLabelText(/Contractor/i));
    expect(onChangeFn).toHaveBeenCalledTimes(1);
  });

  it('should render checkbox with default styles', () => {
    const onChangeFn = jest.fn();
    render(
      <CheckboxField label="Contractor" name="contractor" checked={true} onChange={onChangeFn} />
    );
    const node = screen.getByTestId('checkboxcontainer');
    expect(node).toMatchSnapshot();
  });

  /** axe voilations check */
  it('should not have axe voilations', async () => {
    const onChangeFn = jest.fn();
    const { container } = render(
      <CheckboxField label="Contractor" name="contractor" checked={true} onChange={onChangeFn} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
