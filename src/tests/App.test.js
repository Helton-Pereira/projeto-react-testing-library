import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testa o componente App.js', () => {
  test('Verifica se existe um link com texto Home ', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('Verifica se existe um link com texto About ', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  test('Verifica se existe um link com texto Favorite Pokémons ', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavoritePokemons = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavoritePokemons).toBeInTheDocument();
    userEvent.click(linkFavoritePokemons);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
  test(`Verifica se a aplicação direciona para a página Not Found
   ao entrar em uma URL desconhecida`, () => {
    const { history } = renderWithRouter(<App />);

    history.push('/xablau');

    const notFoundTitle = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2 });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
