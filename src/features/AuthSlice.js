import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticate: false,
  },
  reducers: {
    login(state, action) {
      state.authenticate = true;
    },
    logout(state) {
      state.authenticate = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
