import React, { FC } from 'react';
import GameOfLife from '../game-of-life/game-of-life';

const MainPage: FC = () => {
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      {`Пользователь: ${user}`}
      <button style={{ marginLeft: '20px' }} onClick={handleLogout} data-testid="logout-button">
        Выйти
      </button>
      <GameOfLife />
    </div>
  );
};

export default MainPage;
