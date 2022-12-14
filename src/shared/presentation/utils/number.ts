import { formatValue } from 'react-currency-input-field';

export const currencyToNumber = (currency: string | number): number => {
  if (!currency) return 0;
  try {
    if (typeof currency === 'number') return currency;
    else return parseInt(currency.replaceAll('.', ''));
  } catch (e) {
    return 0;
  }
};

export const numberToCurrency = (value: number): string => {
  try {
    const formattedValue = formatValue({
      value: value.toString(),
      groupSeparator: '.',
      decimalSeparator: ',',
    });
    return formattedValue;
  } catch (e) {
    return '';
  }
};
