import React, { FC } from 'react';

interface SquareProps {
  id: string;
  x: number;
  y: number;
  selectSquare: (x: number, y: number) => void;
  className: 'square died' | 'square alive';
}

const Square: FC<SquareProps> = ({ id, x, y, className, selectSquare }) => (
  <div className={className} id={id} onClick={() => selectSquare(x, y)} data-testid={id} />
);

export default Square;
