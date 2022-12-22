import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getEmptyGrid } from '../game-of-life/game-of-life.utils';
import Grid from './grid';
import '../../index.css';

export default {
  component: Grid,
  title: 'Components/Grid',
} as ComponentMeta<typeof Grid>;

export const Example: ComponentStory<typeof Grid> = () => {
  const [grid, setGrid] = useState(getEmptyGrid(40, 40));

  const selectBox = (row: number, column: number) => {
    const newGrid = grid.map((rowArr, rowIndex) =>
      rowArr.map((colItem, colIndex) => (rowIndex === row && colIndex === column ? !colItem : colItem)),
    );
    setGrid(newGrid);
  };

  return <Grid grid={grid} columns={40} selectSquare={selectBox} />;
};
