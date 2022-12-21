import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getEmptyGrid } from '../game-of-life/game-of-life.utils';
import Grid from './grid';
import '../../index.css';

export default {
  component: Grid,
  title: 'Components/Grid',
} as ComponentMeta<typeof Grid>;

export const Example: ComponentStory<typeof Grid> = () => {
  const grid = getEmptyGrid(40, 40);

  return <Grid grid={grid} columns={40} />;
};
