import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

test('renders a button with children text and handles click events', () => {
  const handleClick = jest.fn();

  render(<Button onClick={handleClick}>Click me</Button>);

  // Verificar que el texto del botón esté en el documento
  expect(screen.getByText('Click me')).toBeInTheDocument();

  // Simular un clic en el botón
  fireEvent.click(screen.getByText('Click me'));

  // Verificar que la función handleClick haya sido llamada
  expect(handleClick).toHaveBeenCalledTimes(1);
});
