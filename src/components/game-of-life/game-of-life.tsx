import React, { FC, useEffect, useState } from 'react';
import Grid from '../grid/grid';
import { getEmptyGrid } from './game-of-life.utils';

const GameOfLife: FC = () => {
  const [rows, setRows] = useState(40);
  const [columns, setColumns] = useState(40);
  const [grid, setGrid] = useState<boolean[][]>([]);

  useEffect(() => {
    const newGrid = getEmptyGrid(rows, columns);
    setGrid(newGrid);
  }, [rows, columns]);

  return (
    <div>
      <h1>The Game of Life</h1>
      <Grid grid={grid} columns={columns} />
    </div>
  );
};

export default GameOfLife;
