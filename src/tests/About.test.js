import React from 'react';
import { About } from '../pages';
import renderWithRouter from './renderWithRouter';

describe('Verifica página About', () => {
  test('Verifica as informações da Pokedex são renderizadas', () => {
    renderWithRouter(<About />);
  });
});
