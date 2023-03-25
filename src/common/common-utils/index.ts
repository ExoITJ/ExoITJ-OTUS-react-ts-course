import { RootState } from '../../app/store';

export const getStateFromLocalStorage = (): Partial<RootState> => ({
  system: {
    user: localStorage.getItem('user') || null,
    loadingUserStatus: false,
  },
});
