import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IsLogin: false,
  Email: "",
  Password: "",
};

const LoginSlice = createSlice({
  name: "LOGINDATA",
  initialState,
  reducers: {
    UserLogin(state, { payload }) {
      state.IsLogin = payload.status;
      state.Email = payload.UserEmail;
      state.Password = payload.UserPassword;
    },
  },
});

export default LoginSlice.reducer;
export const { UserLogin } = LoginSlice.actions;
