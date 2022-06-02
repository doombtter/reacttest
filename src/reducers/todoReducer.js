import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "0",
};

export const TodoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += "1";
    },
  },
});

export const { increment } = TodoReducer.actions;
export const selectCount = (state) => state.todo.value;

export default TodoReducer.reducer;