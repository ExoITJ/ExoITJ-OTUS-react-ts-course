import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameOfLife from './game-of-life';

beforeEach(() => render(<GameOfLife />));
afterEach(() => render(<GameOfLife />).unmount());

describe('Component GameOfLife', () => {
  test('Should render title <Игра в жизнь> component', () => {
    const title = screen.getByTestId(/game_of_life_title/i);
    expect(title).toBeInTheDocument();
  });

  describe('GameOfLife handler functions', () => {
    test('After clicking, the box should turn red', async () => {
      const testSquare = screen.getByTestId('0_0');

      expect(testSquare).toHaveClass('died');
      // Click event
      await userEvent.click(testSquare);
      expect(testSquare).toHaveClass('alive');
    });
    test('Should add rows after click button', async () => {
      const addRowsButton = screen.getByTestId(/add_rows_button/);

      expect(addRowsButton).toBeInTheDocument();
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(1600); //grid 39x39
      // Click event
      await userEvent.click(addRowsButton);
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(2000); //grid 49x39
    });
    test('Should minus rows after click button', async () => {
      const minusRowsButton = screen.getByTestId(/minus_rows_button/);

      expect(minusRowsButton).toBeInTheDocument();
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(1600); //grid 39x39
      // Click event
      await userEvent.click(minusRowsButton);
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(1600); //grid 39x39 условие <= 40
    });
    test('Should add columns after click button', async () => {
      const addColumnsButton = screen.getByTestId(/add_columns_button/);

      expect(addColumnsButton).toBeInTheDocument();
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(1600); //grid 39x39
      // Click event
      await userEvent.click(addColumnsButton);
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(2000); //grid 39x49
    });
    test('Should minus columns after click button', async () => {
      const minusColumnsButton = screen.getByTestId(/minus_columns_button/);

      expect(minusColumnsButton).toBeInTheDocument();
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(1600); //grid 39x39
      // Click event
      await userEvent.click(minusColumnsButton);
      expect(screen.getAllByTestId(/\d_\d/)).toHaveLength(1600); //grid 39x39 условие <= 40
    });
  });
});
