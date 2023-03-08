import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from './main-page';
import { renderWithProviders } from '../common-utils/tests/test-utils';
import { SYSTEM_INITIAL_STATE } from '../../features/system/system-slice';
import { createAppStore } from '../../app/store';

describe('MainPage component', () => {
  test('Should render', () => {
    renderWithProviders(<MainPage />);

    expect(screen.getByText(/Пользователь: null/i)).toBeInTheDocument();
    expect(screen.getByTestId('logout-button')).toBeInTheDocument();
    expect(screen.getByText(/Игра в жизнь/i)).toBeInTheDocument();
  });

  test('Should render user name and logout after click button', async () => {
    localStorage.setItem('user', 'test-user');
    const store = createAppStore({ system: { ...SYSTEM_INITIAL_STATE, user: 'test-user' } });
    renderWithProviders(<MainPage />, { store });
    const button = screen.getByTestId('logout-button');

    expect(button).toBeInTheDocument();
    expect(screen.getByText(/Пользователь: test-user/i)).toBeInTheDocument();
    await userEvent.click(button);
    expect(localStorage.getItem('user')).toBeNull();
  });
});
