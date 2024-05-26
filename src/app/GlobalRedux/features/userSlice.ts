import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinUser: function (state, action) {
      state.user = action.payload;
    },
  },
});

export const { signinUser } = userSlice.actions;

export default userSlice.reducer;
