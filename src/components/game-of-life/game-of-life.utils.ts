import { cloneDeep } from 'lodash';

export const enum GridAxisValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  ConwaysPistol = 'conwaysPistol',
}

export const GRID_AXIS_VALUES_INFO = {
  [GridAxisValues.Small]: { x: 30, y: 50 },
  [GridAxisValues.Medium]: { x: 50, y: 70 },
  [GridAxisValues.Large]: { x: 70, y: 90 },
};

export const getEmptyGrid = (rows: number, columns: number): boolean[][] =>
  Array(rows)
    .fill(false)
    .map(() => Array(columns).fill(false));

export const getConwaysPistol = (grid: boolean[][]) => {
  const newGrid = cloneDeep(grid);
  newGrid[5][1] = true;
  newGrid[5][2] = true;
  newGrid[6][1] = true;
  newGrid[6][2] = true;

  newGrid[3][13] = true;
  newGrid[3][14] = true;
  newGrid[4][12] = true;
  newGrid[5][11] = true;
  newGrid[6][11] = true;
  newGrid[7][11] = true;
  newGrid[8][12] = true;
  newGrid[9][13] = true;
  newGrid[9][14] = true;

  newGrid[4][16] = true;
  newGrid[5][17] = true;
  newGrid[6][17] = true;
  newGrid[6][18] = true;
  newGrid[6][15] = true;
  newGrid[7][17] = true;
  newGrid[8][16] = true;

  newGrid[2][23] = true;
  newGrid[3][21] = true;
  newGrid[4][21] = true;
  newGrid[5][21] = true;
  newGrid[3][22] = true;
  newGrid[4][22] = true;
  newGrid[5][22] = true;
  newGrid[6][23] = true;
  newGrid[1][25] = true;
  newGrid[2][25] = true;
  newGrid[6][25] = true;
  newGrid[7][25] = true;

  newGrid[3][35] = true;
  newGrid[3][36] = true;
  newGrid[4][35] = true;
  newGrid[4][36] = true;

  return newGrid;
};
