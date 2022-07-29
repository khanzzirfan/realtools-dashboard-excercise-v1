import { axe } from 'jest-axe';
import { render, screen, fireEvent } from '../../testUtils';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Hello</Button>);
    const button = screen.getByRole('button');
    expect(button.getAttribute('type')).toBe('button');
    expect(button).toHaveTextContent('Hello');
  });

  it('should render button with default styles', () => {
    render(<Button>Hello</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background: rgba(98,77,227)');
    expect(button).toHaveStyleRule('color', 'var(--colors-blank)');
    expect(button).toHaveStyle('border: 2px solid rgba(98,77,227,1)');
    expect(button).toHaveStyle('font-size: 1rem');
    expect(button).toHaveStyle('font-weight: 500');
    expect(button).toHaveStyle('line-height: 1');
    expect(button).toHaveStyle('outline: none;');
    expect(button).toHaveStyle('padding: 10px 24px');
  });

  it('should render button outlined variant styles', () => {
    render(<Button variant="outlined">Hello</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background: rgba(98,77,227)');
    expect(button).toHaveStyleRule('color', 'var(--colors-irisBlue)');
    expect(button).toHaveStyle('border: 2px solid rgba(98,77,227,0.45)');
    expect(button).toHaveStyle('padding: 10px 24px');
  });

  it('spreads custom attributes', () => {
    const clickFn = jest.fn();
    render(
      <Button data-foo="12" onClick={clickFn}>
        Hello
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button.getAttribute('data-foo')).toBe('12');
    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalledTimes(1);
  });

  /** axe voilations check */
  it('should not have axe voilations', async () => {
    const clickFn = jest.fn();
    const { container } = render(
      <Button data-foo="12" onClick={clickFn}>
        Hello
      </Button>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
