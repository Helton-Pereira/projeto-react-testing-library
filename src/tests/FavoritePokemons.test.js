import { render, screen } from '@testing-library/react';
import React from 'react';
import { FavoritePokemons } from '../pages';

describe('Testa a página Favorite Pokemons', () => {
  test(`Verifica se a mensagem No favorite pokemon 
  found aparece se não houver pokemons salvos`, () => {
    render(<FavoritePokemons />);

    const noFavoritePokemon = screen.queryByText(/No favorite pokemon found/i);
    expect(noFavoritePokemon).toBeInTheDocument();
  });
  // test('Verifica se exibe todos os pokemons salvos', () => {
  //   renderWithRouter(<App />);

  //   const moreDetails = screen.getByRole('link', { name: /more details/i });
  //   userEvent.click(moreDetails);
  // });
});
