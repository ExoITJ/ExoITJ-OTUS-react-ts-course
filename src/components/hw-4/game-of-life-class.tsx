import React, { Component } from 'react';
import { ErrorBoundary } from '../error-boundary/error-boundary';
import { getEmptyGrid } from '../game-of-life/game-of-life.utils';
import { GridClass } from './grid-class';

const enum MAX_VALUES {
  Rows = 70,
  Columns = 140,
}

const enum MIN_VALUES {
  Rows = 40,
  Columns = 40,
}

const DEF_SQUARES_COUNT = 10;

interface State {
  rows: number;
  columns: number;
  grid: boolean[][];
}

export class GameOfLifeClassComponent extends Component<{}, Readonly<State>> {
  constructor(props: {}) {
    super(props);
    this.state = {
      rows: MIN_VALUES.Rows,
      columns: MIN_VALUES.Columns,
      grid: [],
    };
  }

  componentDidMount() {
    const { rows, columns } = this.state;
    const newGrid = getEmptyGrid(rows, columns);
    this.setState({
      grid: newGrid,
    });
  }

  componentWillUnmount() {
    const { grid } = this.state;
    if (grid.length) {
      this.setState({
        grid: [],
        rows: MIN_VALUES.Rows,
        columns: MIN_VALUES.Columns,
      });
    }
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<Readonly<State>>, snapshot?: any): void {
    const { rows, columns } = this.state;
    if (rows !== prevState.rows) {
      this.setState({ rows });
    }
    if (columns !== prevState.columns) {
      this.setState({ columns });
    }
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<Readonly<State>>, nextContext: any): boolean {
    const { rows, columns, grid } = this.state;
    return rows !== nextState.rows || columns !== nextState.columns || grid !== nextState.grid;
  }

  selectSquare = (row: number, column: number) => {
    const { grid } = this.state;
    const newGrid = [...grid];
    newGrid[row][column] = !grid[row][column];
    this.setState({ grid: newGrid });
  };

  handleAddRows = () => {
    const { rows } = this.state;
    if (rows >= MAX_VALUES.Rows) return;
    this.setState({ rows: rows + DEF_SQUARES_COUNT });
  };
  handleMinusRows = () => {
    const { rows } = this.state;
    if (rows <= MIN_VALUES.Rows) return;
    this.setState({ rows: rows - DEF_SQUARES_COUNT });
  };
  handleAddColumns = () => {
    const { columns } = this.state;
    if (columns >= MAX_VALUES.Columns) return;
    this.setState({ columns: columns + DEF_SQUARES_COUNT });
  };
  handleMinusColumns = () => {
    const { columns } = this.state;
    if (columns <= MIN_VALUES.Columns) return;
    this.setState({ columns: columns - DEF_SQUARES_COUNT });
  };

  render() {
    const { grid, columns } = this.state;

    return (
      <div>
        <h1 data-testid="game_of_life_title">Игра в жизнь</h1>
        <div>
          <button data-testid="add_rows_button" onClick={this.handleAddRows}>
            + 10 строк
          </button>
          <button data-testid="minus_rows_button" onClick={this.handleMinusRows}>
            - 10 строк
          </button>
          <button data-testid="add_columns_button" onClick={this.handleAddColumns}>
            + 10 столбцов
          </button>
          <button data-testid="minus_columns_button" onClick={this.handleMinusColumns}>
            - 10 столбцов
          </button>
        </div>
        <ErrorBoundary>
          <GridClass grid={grid} columns={columns} selectSquare={this.selectSquare} />
        </ErrorBoundary>
      </div>
    );
  }
}
