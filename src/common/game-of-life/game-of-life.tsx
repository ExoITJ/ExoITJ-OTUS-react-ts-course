import React, { FC, useEffect, useState, MouseEventHandler, useRef, ChangeEvent } from 'react';
import Grid from '../grid/grid';
import { getConwaysPistol, getEmptyGrid, GridAxisValues, GRID_AXIS_VALUES_INFO } from './game-of-life.utils';
import s from './game-of-life.module.css';
import { cloneDeep } from 'lodash';

const GameOfLife: FC = () => {
  const [x, setX] = useState(GRID_AXIS_VALUES_INFO[GridAxisValues.Small].x);
  const [y, setY] = useState(GRID_AXIS_VALUES_INFO[GridAxisValues.Small].y);
  const [grid, setGrid] = useState<boolean[][]>([]);
  const [startLife, setStartLife] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(100);
  const intervalRef = useRef<number>();

  useEffect(() => {
    const newGrid = getEmptyGrid(x, y);
    setGrid(newGrid);
  }, [x, y]);

  useEffect(() => {
    if (startLife) {
      intervalRef.current = window.setInterval(logicOfLife, speed);
    }

    return () => clearInterval(intervalRef.current);
  }, [grid, speed, startLife]);

  const selectSquare = (row: number, column: number) => {
    const newGrid = [...grid];
    newGrid[row][column] = !grid[row][column];
    setGrid(newGrid);
  };

  const handleChangeGrid: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { name } = e.currentTarget;
    if (name === GridAxisValues.Small) {
      setX(GRID_AXIS_VALUES_INFO[name].x);
      setY(GRID_AXIS_VALUES_INFO[name].y);
    } else if (name === GridAxisValues.Medium) {
      setX(GRID_AXIS_VALUES_INFO[name].x);
      setY(GRID_AXIS_VALUES_INFO[name].y);
    } else if (name === GridAxisValues.Large) {
      setX(GRID_AXIS_VALUES_INFO[name].x);
      setY(GRID_AXIS_VALUES_INFO[name].y);
    } else if (name === GridAxisValues.ConwaysPistol) {
      const newGrid = getConwaysPistol(grid);
      setGrid(newGrid);
    }
  };

  const logicOfLife = () => {
    const gridClone = grid;
    const newGrid = cloneDeep(grid);

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        let count = 0;
        if (i > 0) if (gridClone[i - 1][j]) count++;
        if (i > 0 && j > 0) if (gridClone[i - 1][j - 1]) count++;
        if (i > 0 && j < y - 1) if (gridClone[i - 1][j + 1]) count++;
        if (j < y - 1) if (gridClone[i][j + 1]) count++;
        if (j > 0) if (gridClone[i][j - 1]) count++;
        if (i < x - 1) if (gridClone[i + 1][j]) count++;
        if (i < x - 1 && j > 0) if (gridClone[i + 1][j - 1]) count++;
        if (i < x - 1 && y - 1) if (gridClone[i + 1][j + 1]) count++;
        if (gridClone[i][j] && (count < 2 || count > 3)) newGrid[i][j] = false;
        if (!gridClone[i][j] && count === 3) newGrid[i][j] = true;
      }
    }

    setGrid(newGrid);
    setGeneration((prev) => prev + 1);
  };

  const handleStart = () => {
    setStartLife(true);
    clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(logicOfLife, speed);
  };

  const handleStop = () => {
    setStartLife(false);
    clearInterval(intervalRef.current);
  };

  const handleClearGrid = () => {
    const newGrid = getEmptyGrid(x, y);
    setStartLife(false);
    setGeneration(0);
    setGrid(newGrid);
    clearInterval(intervalRef.current);
  };

  const handleRandomGridSquares = () => {
    const newGrid = grid.map((rowArr) => rowArr.map(() => Math.floor(Math.random() * 4) === 1));
    setGrid(newGrid);
  };

  const handleChangeSpeed = (e: ChangeEvent<HTMLInputElement>) => {
    const newSpeed = parseInt(e.currentTarget.value);
    if (newSpeed <= 0) return;
    setSpeed(newSpeed);
  };

  return (
    <div>
      <h1 data-testid="game_of_life_title">Игра в жизнь</h1>
      <div className={s.buttonGroup}>
        <button onClick={handleStart}>Старт</button>
        <button onClick={handleStop}>Стоп</button>
        <button onClick={handleRandomGridSquares}>Заполнить поле</button>
        <button onClick={handleClearGrid}>Очистить</button>
        <input type="number" value={speed} onChange={handleChangeSpeed} />
      </div>
      <h3>Generations: {generation}</h3>
      <Grid grid={grid} y={y} selectSquare={selectSquare} />
      <h3>Изменить поле:</h3>
      <div className={s.buttonGroup}>
        <button name={GridAxisValues.Small} onClick={handleChangeGrid} data-testid={GridAxisValues.Small}>
          30х50
        </button>
        <button name={GridAxisValues.Medium} onClick={handleChangeGrid} data-testid={GridAxisValues.Medium}>
          50х70
        </button>
        <button name={GridAxisValues.Large} onClick={handleChangeGrid} data-testid={GridAxisValues.Large}>
          90х70
        </button>
        <button name={GridAxisValues.ConwaysPistol} onClick={handleChangeGrid}>
          Conway's Pistol grid
        </button>
      </div>
    </div>
  );
};

export default GameOfLife;
