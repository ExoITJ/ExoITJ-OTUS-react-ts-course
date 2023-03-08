import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from './main-page';

describe('MainPage component', () => {
  test('Should render', () => {
    render(<MainPage />);

    expect(screen.getByText(/Пользователь: null/i)).toBeInTheDocument();
    expect(screen.getByTestId('logout-button')).toBeInTheDocument();
    expect(screen.getByText(/Игра в жизнь/i)).toBeInTheDocument();
  });

  test('Should render user name and logout after click button', async () => {
    localStorage.setItem('user', 'test-user');
    render(<MainPage />);
    const button = screen.getByTestId('logout-button');

    expect(button).toBeInTheDocument();
    expect(screen.getByText(/Пользователь: test-user/i)).toBeInTheDocument();
    await userEvent.click(button);
    expect(localStorage.getItem('user')).toBeNull();
  });
});
