import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // Initial state is null for no user
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: () => null, // Set state to null on logout
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
