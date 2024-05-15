import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  registered: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      if (state.registered) state.login = true;
    },
    register: (state) => {
      state.registered = true;
    },
  },
});

export const { login, register } = userSlice.actions;

export default userSlice.reducer;
