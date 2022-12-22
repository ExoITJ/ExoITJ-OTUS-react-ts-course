import React, { FC } from 'react';
import Box from '../box/box';

interface GridProps {
  grid: boolean[][];
  columns: number;
  selectBox: (row: number, column: number) => void;
}

const Grid: FC<GridProps> = ({ columns, grid, selectBox }) => {
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
          selectBox={selectBox}
          className={grid[rowIdx][colIdx] ? 'square alive' : 'square died'}
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
