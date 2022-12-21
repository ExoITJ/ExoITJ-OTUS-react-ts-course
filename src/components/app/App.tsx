import React, { FC } from 'react';
// import Calculator from '../calculator/Calculator';
import GameOfLife from '../game-of-life/game-of-life';
import '../../index.css';

type AppProps = {};

const App: FC<AppProps> = () => {
  return <GameOfLife />;
};

export default App;
