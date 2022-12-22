import React, { FC } from 'react';

interface SquareProps {
  id: string;
  row: number;
  column: number;
  selectSquare: (row: number, column: number) => void;
  className: 'square died' | 'square alive';
}

const Square: FC<SquareProps> = ({ id, row, column, className, selectSquare }) => (
  <div className={className} id={id} onClick={() => selectSquare(row, column)} data-testid={id} />
);

export default Square;
