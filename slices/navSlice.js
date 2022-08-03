import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  wallet: null,
  token: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUser, setWallet, setToken } = navSlice.actions;

/**
 * Seletors
 * @param {*} state
 * @returns
 */
export const selectUser = (state) => state.nav.user;
export const selectWallet = (state) => state.nav.wallet;
export const selectToken = (state) => state.nav.token;

export default navSlice.reducer;
