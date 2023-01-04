import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
  it('renders button', () => {
    render(<Button>Hallo Jest!</Button>);
    const button = screen.getByText('Hallo Jest!');
    expect(button).toBeInTheDocument();
  });

  it('button clicked ', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Hallo Jest!</Button>);
    await user.click(screen.getByRole('button', { name: /Hallo Jest/ }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disabled when loading', () => {
    render(<Button isLoading={true}>Hallo Jest!</Button>);
    const result = screen
      .getByRole('button', { name: /Hallo Jest/ })
      .hasAttribute('disabled');

    expect(result).toEqual<boolean>(true);
  });
});
