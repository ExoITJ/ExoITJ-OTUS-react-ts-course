import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameOfLife from './game-of-life';
import { GridAxisValues } from './game-of-life.utils';

beforeEach(() => render(<GameOfLife />));
afterEach(() => render(<GameOfLife />).unmount());

describe('Component GameOfLife', () => {
  test('Should render title <Игра в жизнь> component', () => {
    const title = screen.getByTestId(/game_of_life_title/i);
    expect(title).toBeInTheDocument();
  });

  describe('GameOfLife handler functions', () => {
    test('after clicking, the box should turn red', async () => {
      const testSquare = screen.getByTestId('0_0');

      expect(testSquare).toHaveClass('died');
      await userEvent.click(testSquare);
      expect(testSquare).toHaveClass('alive');
    });
    test('should render default small grid', () => {
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(1500);
    });
    test('should set grid 50x70 after click button', async () => {
      const button = screen.getByTestId(GridAxisValues.Medium);

      expect(button).toBeInTheDocument();
      await userEvent.click(button);
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(3500);
    });
    test('should set grid 70x90 after click button', async () => {
      const button = screen.getByTestId(GridAxisValues.Large);

      expect(button).toBeInTheDocument();
      await userEvent.click(button);
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(6300);
    });
  });
});
