import { createAppStore } from '../../app/store';
import { login, logout, SystemState } from './system-slice';

const USER = 'user';

describe('System slice', () => {
  test('login', async () => {
    const systemState: SystemState = {
      user: null,
      loadingUserStatus: false,
    };
    const store = createAppStore({ system: systemState });

    await store.dispatch(login({ login: USER }));
    expect(store.getState().system.user).toBe(USER);
    expect(localStorage.getItem(USER)).toBe(USER);
  });

  test('logout', async () => {
    const systemState: SystemState = {
      user: USER,
      loadingUserStatus: false,
    };
    const store = createAppStore({ system: systemState });
    expect(store.getState().system.user).toBe(USER);

    await store.dispatch(logout());
    expect(store.getState().system.user).toBe(null);
    expect(localStorage.getItem(USER)).toBe(null);
  });
});
