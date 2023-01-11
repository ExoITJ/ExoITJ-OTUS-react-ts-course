import React, { FC, useEffect, useState } from 'react';
import Grid from '../grid/grid';
import { getEmptyGrid } from './game-of-life.utils';
import styles from './game-of-life.module.css';

const enum MAX_VALUES {
  Rows = 70,
  Columns = 140,
}

const enum MIN_VALUES {
  Rows = 40,
  Columns = 40,
}

const DEF_SQUARES_COUNT = 10;

const GameOfLife: FC = () => {
  const [rows, setRows] = useState(MIN_VALUES.Rows);
  const [columns, setColumns] = useState(MIN_VALUES.Columns);
  const [grid, setGrid] = useState<boolean[][]>([]);

  useEffect(() => {
    const newGrid = getEmptyGrid(rows, columns);
    setGrid(newGrid);
  }, [rows, columns]);

  const selectSquare = (row: number, column: number) => {
    const newGrid = [...grid];
    newGrid[row][column] = !grid[row][column];
    setGrid(newGrid);
  };

  const handleAddRows = () => {
    if (rows >= MAX_VALUES.Rows) return;
    setRows((prev) => prev + DEF_SQUARES_COUNT);
  };
  const handleMinusRows = () => {
    if (rows <= MIN_VALUES.Rows) return;
    setRows((prev) => prev - DEF_SQUARES_COUNT);
  };
  const handleAddColumns = () => {
    if (columns >= MAX_VALUES.Columns) return;
    setColumns((prev) => prev + DEF_SQUARES_COUNT);
  };
  const handleMinusColumns = () => {
    if (columns <= MIN_VALUES.Columns) return;
    setColumns((prev) => prev - DEF_SQUARES_COUNT);
  };

  return (
    <div>
      <h1 data-testid="game_of_life_title">Игра в жизнь</h1>
      <div className={styles.buttonGroup}>
        <button data-testid="add_rows_button" onClick={handleAddRows}>
          + 10 строк
        </button>
        <button data-testid="minus_rows_button" onClick={handleMinusRows}>
          - 10 строк
        </button>
        <button data-testid="add_columns_button" onClick={handleAddColumns}>
          + 10 столбцов
        </button>
        <button data-testid="minus_columns_button" onClick={handleMinusColumns}>
          - 10 столбцов
        </button>
      </div>
      <Grid grid={grid} columns={columns} selectSquare={selectSquare} />
    </div>
  );
};

export default GameOfLife;
