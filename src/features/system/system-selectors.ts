import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const selectSystemState = (state: RootState) => state.system;

export const selectUser = createSelector([selectSystemState], ({ user }) => user);

export const selectLoadingUserStatus = createSelector(
  [selectSystemState],
  ({ loadingUserStatus }) => loadingUserStatus,
);
