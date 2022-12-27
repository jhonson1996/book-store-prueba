import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  nombre: string,
  email: string,
  avatar: string,
  token: string
}

const initialState: userState = {
  nombre: "jhonson",
  email: "",
  avatar: "",
  token: ""
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {data,token} = action.payload
      state.nombre = data.name;
      state.email = data.email;
      state.avatar = data.picture;
      state.token = data.token
    },
  },
});

export const { setUser } = userSlice.actions;