import React, { FC } from 'react';

interface BoxProps {
  id: string;
  row: number;
  column: number;
  selectBox: (row: number, column: number) => void;
  className: 'square died' | 'square alive';
}

const Box: FC<BoxProps> = ({ id, row, column, className, selectBox }) => (
  <div className={className} id={id} onClick={() => selectBox(row, column)} data-testid={id} />
);

export default Box;
