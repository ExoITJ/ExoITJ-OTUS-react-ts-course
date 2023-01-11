import React, { FC } from 'react';
import Square from '../square/square';

interface GridProps {
  grid: boolean[][];
  columns: number;
  selectSquare: (row: number, column: number) => void;
}

const Grid: FC<GridProps> = ({ columns, grid, selectSquare }) => {
  const width = columns * 11;

  const rowsArr = grid.map((rowArr, rowIdx) =>
    rowArr.map((item, colIdx) => {
      const boxId = `${rowIdx}_${colIdx}`;
      return (
        <Square
          id={boxId}
          key={boxId}
          row={rowIdx}
          column={colIdx}
          selectSquare={selectSquare}
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
