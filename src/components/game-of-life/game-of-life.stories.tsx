import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GameOfLife from './game-of-life';

export default {
  component: GameOfLife,
  title: 'Components/GameOfLife',
} as ComponentMeta<typeof GameOfLife>;

export const Example: ComponentStory<typeof GameOfLife> = () => {
  return <GameOfLife />;
};
