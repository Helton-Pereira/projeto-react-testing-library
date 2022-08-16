import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotFound } from '../pages';

describe('Verifica página Not Found', () => {
  test('Verifica se contém um heading com texto Page requested not found', () => {
    render(<NotFound />);

    const notFoundHeading = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2 });
    expect(notFoundHeading).toBeInTheDocument();
  });
  test('Verifica imagem com URL correta', () => {
    render(<NotFound />);

    const notFoundImage = screen.getByRole('img', {
      name: 'Pikachu crying because the page requested was not found' });
    const imageUrl = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(notFoundImage).toBeInTheDocument();
    expect(notFoundImage).toHaveAttribute('src', imageUrl);
  });
});
