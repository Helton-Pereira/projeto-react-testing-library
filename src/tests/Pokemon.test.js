import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componete Pokemon', () => {
  test('Verifica se as informações do pokemon são renderizadas', () => {
    const TWO = 2;
    renderWithRouter(<App />);

    const pokemonName = screen.getByText(/pikachu/i);
    const pokemonType = screen.getAllByText(/electric/i);
    const pokemonAverageWeight = screen.getByText(/Average weight: 6.0 kg/i);
    const pokemonImage = screen.getByRole('img', { name: /pikachu sprite/i });
    const imageUrl = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toHaveLength(TWO);
    expect(pokemonAverageWeight).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('src', imageUrl);
  });

  test('Verifica o link More Details', () => {
    const { history } = renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /more details/i });

    userEvent.click(detailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');

    const isPokemonFavorite = screen.getByRole('checkbox', {
      name: /Pokémon favoritado?/i });
    userEvent.click(isPokemonFavorite);
    const starImage = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    const starImageSrc = '/star-icon.svg';
    expect(starImage).toHaveAttribute('src', starImageSrc);
  });
});
