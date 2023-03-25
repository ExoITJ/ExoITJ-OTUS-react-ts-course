import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginData } from './system-types';

export interface SystemState {
  user: string | null;
  loadingUserStatus: boolean;
}

export const SYSTEM_INITIAL_STATE: SystemState = {
  user: null,
  loadingUserStatus: false,
};

const systemSlice = createSlice({
  name: 'system',
  initialState: SYSTEM_INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loadingUserStatus = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loadingUserStatus = false;
        state.user = payload;
      })
      .addCase(login.rejected, (state) => {
        state.loadingUserStatus = false;
      })
      .addCase(logout.fulfilled, () => SYSTEM_INITIAL_STATE);
  },
});

export const systemReducer = systemSlice.reducer;

export const login = createAsyncThunk('system/login', async ({ login }: LoginData, ThunkApi) => {
  localStorage.setItem('user', login);
  return login;
});

export const logout = createAsyncThunk('system/logout', async () => {
  localStorage.clear();
});
