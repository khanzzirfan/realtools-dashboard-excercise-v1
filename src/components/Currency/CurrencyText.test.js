import { render, screen } from '../../testUtils';
import CurrencyText from './CurrencyText';

describe('CurrencyText', () => {
  it('should renders correctly with currency USD', () => {
    render(
      <p data-testid="currencytext">
        <CurrencyText currency="USD" value="100000" />
      </p>
    );
    const element = screen.getByTestId('currencytext');
    expect(element).toHaveTextContent('$ USD 100,000.00');
  });

  it('should have . has thousdands separator for EURO currency', () => {
    render(
      <p data-testid="currencytext">
        <CurrencyText currency="EUR" value="100000" />
      </p>
    );
    const element = screen.getByTestId('currencytext');
    expect(element).toHaveTextContent('€ EUR 100.000,00');
  });

  it('should renders correctly with GBP currency', () => {
    render(
      <p data-testid="currencytext">
        <CurrencyText currency="GBP" value="100000" />
      </p>
    );
    const element = screen.getByTestId('currencytext');
    expect(element).toHaveTextContent('£ GBP 100,000.00');
  });

  it('should render nothing when value is null', () => {
    render(
      <p data-testid="currencytext">
        <CurrencyText currency="GBP" value="" />
      </p>
    );
    const element = screen.getByTestId('currencytext');
    expect(element).toHaveTextContent('');
  });
});
