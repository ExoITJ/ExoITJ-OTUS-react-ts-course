import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getEmptyGrid } from '../game-of-life/game-of-life.utils';
import '../../index.css';
import { GridClass } from './grid-class';

export default {
  component: GridClass,
  title: 'Components/Grid',
} as ComponentMeta<typeof GridClass>;

export const Example: ComponentStory<typeof GridClass> = () => {
  const [grid, setGrid] = useState(getEmptyGrid(40, 40));

  const selectBox = (row: number, column: number) => {
    const newGrid = grid.map((rowArr, rowIndex) =>
      rowArr.map((colItem, colIndex) => (rowIndex === row && colIndex === column ? !colItem : colItem)),
    );
    setGrid(newGrid);
  };

  return <GridClass grid={grid} columns={40} selectSquare={selectBox} />;
};
