import React, { FC } from 'react';

interface BoxProps {
  id: string;
  row: number;
  column: number;
  className: 'box on' | 'box off';
}

const Box: FC<BoxProps> = ({ id, className }) => <div className={className} id={id} />;

export default Box;
