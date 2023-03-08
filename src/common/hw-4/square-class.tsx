import React, { Component } from 'react';

interface Props {
  id: string;
  row: number;
  column: number;
  selectSquare: (row: number, column: number) => void;
  className: 'square died' | 'square alive';
}

export class SquareClass extends Component<Props> {
  render() {
    const { id, row, column, selectSquare, className } = this.props;

    return <div id={id} onClick={() => selectSquare(row, column)} className={className} />;
  }
}
