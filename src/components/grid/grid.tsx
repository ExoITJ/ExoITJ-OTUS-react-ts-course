import React, { FC } from 'react';
import Box from '../box/box';

interface GridProps {
  grid: boolean[][];
  columns: number;
}

const Grid: FC<GridProps> = ({ columns, grid }) => {
  const width = columns * 11;

  const rowsArr = grid.map((rowArr, rowIdx) =>
    rowArr.map((item, colIdx) => {
      const boxId = `${rowIdx}_${colIdx}`;
      return (
        <Box
          id={boxId}
          key={boxId}
          row={rowIdx}
          column={colIdx}
          className={grid[rowIdx][colIdx] ? 'box on' : 'box off'}
        />
      );
    }),
  );

  return (
    <div className="grid" style={{ width }}>
      {rowsArr}
    </div>
  );
};

export default Grid;
