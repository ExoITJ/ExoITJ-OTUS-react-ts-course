import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { selectUser } from '../../features/system/system-selectors';
import { logout } from '../../features/system/system-slice';
import GameOfLife from '../game-of-life/game-of-life';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleLogout = () => dispatch(logout());

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
