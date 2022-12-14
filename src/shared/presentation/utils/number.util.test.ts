import { currencyToNumber, numberToCurrency } from './number';

test('Test currencyToNumber', () => {
  const result = currencyToNumber('20.000.000');
  expect(result).toBe(20000000);
});

test('Test numberToCurrency', () => {
  const result = numberToCurrency(45000000);
  expect(result).toBe('45.000.000');
});
