import React, { Component } from 'react';
import { SquareClass } from './square-class';

interface Props {
  grid: boolean[][];
  columns: number;
  selectSquare: (row: number, column: number) => void;
}

export class GridClass extends Component<Props> {
  render() {
    const { grid, columns, selectSquare } = this.props;
    const width = columns * 11;
    return (
      <div className="grid" style={{ width }}>
        {grid.map((rowArr, rowIdx) =>
          rowArr.map((item, colIdx) => {
            const boxId = `${rowIdx}_${colIdx}`;
            return (
              <SquareClass
                id={boxId}
                key={boxId}
                row={rowIdx}
                column={colIdx}
                selectSquare={selectSquare}
                className={grid[rowIdx][colIdx] ? 'square alive' : 'square died'}
              />
            );
          }),
        )}
      </div>
    );
  }
}
