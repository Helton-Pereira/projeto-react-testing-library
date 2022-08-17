import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente PokemonDetails', () => {
  test('Verifica se detalhes do pokemon selecionado são renderizadas', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');

    const pokemonName = screen.getByRole('heading', {
      name: /pikachu details/i,
      level: 2 });
    expect(pokemonName).toBeInTheDocument();

    const moreDetailsLink = screen.queryByRole('link', { name: /more details/i });
    expect(moreDetailsLink).not.toBeInTheDocument();

    const summaryHeading = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(summaryHeading).toBeInTheDocument();

    const paragraphAboutPokemon = screen.getByText(/This intelligent Pokémon /i);
    expect(paragraphAboutPokemon).toBeInTheDocument();
  });

  test('Verifica se os mapas são renderizados', () => {
    const TWO = 2;
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');

    const gameLocations = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
      level: 2 });
    expect(gameLocations).toBeInTheDocument();

    const locationMaps = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(locationMaps).toHaveLength(TWO);
    const firstMapUrl = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
    const secondMapUrl = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
    expect(locationMaps[0]).toHaveAttribute('src', firstMapUrl);
    expect(locationMaps[1]).toHaveAttribute('src', secondMapUrl);

    const LocationName1 = screen.getByText(/Kanto Viridian Forest/i);
    const LocationName2 = screen.getByText(/Kanto Power Plant/i);
    expect(LocationName1).toBeInTheDocument();
    expect(LocationName2).toBeInTheDocument();
  });

  test('Verifica a checkbox para favoritar pokemons', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/4');

    const isFavoritePokemon = screen.getByRole('checkbox', {
      name: /Pokémon favoritado?/i });
    expect(isFavoritePokemon).toBeInTheDocument();
  });
});
