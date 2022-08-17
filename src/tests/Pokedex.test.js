import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente Pokedex ', () => {
  test('Verifica se contém um heading com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const pokedexHeading = screen.queryByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2 });
    expect(pokedexHeading).toBeInTheDocument();
  });
  test('Verifica o botão Próximo pokémon', () => {
    const pokemonsList = ['Pikachu',
      'Charmander', 'Caterpie', 'Ekans',
      'Alakazam', 'Mew', 'Rapidash', 'Snorlax', 'Dragonair', 'Pikachu'];
    renderWithRouter(<App />);

    const nextPokemonButton = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(nextPokemonButton).toBeInTheDocument();

    pokemonsList.forEach((pokemon) => {
      const pokemonName = screen.getByText(pokemon);
      userEvent.click(nextPokemonButton);
      expect(pokemonName).toBeInTheDocument();
    });
  });
  test('Verifica botões de filtro', () => {
    const pokemonTypes = ['Electric', 'Fire', 'Bug', 'Poison',
      'Psychic', 'Normal', 'Dragon'];
    const SEVEN = 7;
    renderWithRouter(<App />);

    const typeButton = screen.getAllByTestId('pokemon-type-button');
    expect(typeButton).toHaveLength(SEVEN);

    pokemonTypes.forEach((type) => {
      const typeButtonName = screen.getByRole('button', { name: type });
      expect(typeButtonName).toBeInTheDocument();
    });
  });
  test('Verifica botão All', () => {
    renderWithRouter(<App />);

    const allButton = screen.getByRole('button', { name: /All/i });
    expect(allButton).toBeInTheDocument();

    const pikachu = screen.getByText(/pikachu/i);
    userEvent.click(allButton);
    expect(pikachu).toBeInTheDocument();
  });
});
