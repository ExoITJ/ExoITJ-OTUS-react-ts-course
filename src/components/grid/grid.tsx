import React, { FC } from 'react';
import Square from '../square/square';

interface GridProps {
  grid: boolean[][];
  y: number;
  selectSquare: (x: number, y: number) => void;
}

const Grid: FC<GridProps> = ({ y, grid, selectSquare }) => {
  const width = y * 11;

  const rowsArr = grid.map((rowArr, rowIdx) =>
    rowArr.map((item, colIdx) => {
      const boxId = `${rowIdx}_${colIdx}`;
      return (
        <Square
          id={boxId}
          key={boxId}
          x={rowIdx}
          y={colIdx}
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
