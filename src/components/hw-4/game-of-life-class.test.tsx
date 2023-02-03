import { render, screen } from '@testing-library/react';
import { GameOfLifeClassComponent } from './game-of-life-class';

beforeEach(() => render(<GameOfLifeClassComponent />));
afterEach(() => render(<GameOfLifeClassComponent />).unmount());

describe('Component GameOfLifeClassComponent', () => {
  test('Should render title <Игра в жизнь> component', () => {
    const title = screen.getByTestId(/game_of_life_title/i);
    expect(title).toBeInTheDocument();
  });
});
