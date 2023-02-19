import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './login-page';
import userEvent from '@testing-library/user-event';

describe('LoginPage component', () => {
  test('Should render', () => {
    render(<LoginPage />);

    expect(screen.getByText(/OTUS Course/i)).toBeInTheDocument();
    expect(screen.getByText(/Логин/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Введите ваш логин/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Should add user info in local storage after click button', async () => {
    render(<LoginPage />);
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/Введите ваш логин/i);

    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(localStorage.getItem('user')).toBeNull;
    await userEvent.type(input, 'test-user');
    await userEvent.click(button);
    expect(localStorage.getItem('user')).toBe('test-user');
  });

  test('Should return validation errors after click button', async () => {
    render(<LoginPage />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(screen.getByText(/Значение не может быть пустым/i)).toBeInTheDocument();
  });
});
