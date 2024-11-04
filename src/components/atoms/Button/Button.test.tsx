import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('should render with the initial label', () => {
    render(<Button label="Click me" />);

    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should change text to "1" when clicked', () => {
    render(<Button label="Click me" />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveTextContent('1');
  });
});
