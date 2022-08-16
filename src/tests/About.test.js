import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from './renderWithRouter';

describe('Verifica página About', () => {
  test('Verifica as informações da Pokedex são renderizadas', () => {
    renderWithRouter(<About />);

    const pokedexHeading = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2 });
    expect(pokedexHeading).toBeInTheDocument();

    const firstParagraph = screen.getByText(/This application simulates /i);
    const secondParagraph = screen.getByText(/One can filter/i);
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();

    const pokedexImage = screen.getByRole('img', { name: 'Pokédex' });
    const pokedexUrl = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(pokedexImage).toBeInTheDocument();
    expect(pokedexImage).toHaveAttribute('src', pokedexUrl);
  });
});
