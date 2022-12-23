import React, { FC, useEffect, useState } from 'react';
import Grid from '../grid/grid';
import { getEmptyGrid } from './game-of-life.utils';
import styles from './game-of-life.module.css';

const GameOfLife: FC = () => {
  const [rows, setRows] = useState(40);
  const [columns, setColumns] = useState(40);
  const [grid, setGrid] = useState<boolean[][]>([]);

  useEffect(() => {
    const newGrid = getEmptyGrid(rows, columns);
    setGrid(newGrid);
  }, [rows, columns]);

  const selectSquare = (row: number, column: number) => {
    const newGrid = grid.map((rowArr, rowIndex) =>
      rowArr.map((colItem, colIndex) => (rowIndex === row && colIndex === column ? !colItem : colItem)),
    );
    setGrid(newGrid);
  };

  const handleAddRows = () => {
    if (rows >= 70) return;
    setRows((prev) => prev + 10);
  };
  const handleMinusRows = () => {
    if (rows <= 30) return;
    setRows((prev) => prev - 10);
  };
  const handleAddColumns = () => {
    if (columns >= 140) return;
    setColumns((prev) => prev + 10);
  };
  const handleMinusColumns = () => {
    if (columns <= 40) return;
    setColumns((prev) => prev - 10);
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
