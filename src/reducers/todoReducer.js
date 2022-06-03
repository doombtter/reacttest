import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      id: 1,
      text: "",
      isCompleted: false
    },
  ],
};

export const TodoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    insert: (state, id) => {
      state.value = state.value.concat({
        id: id.payload.id,
        text: id.payload.text,
        isCompleted: false
      });
    },
    remove: (state, id) => {
      state.value = state.value.filter((value) => value.id !== id.payload)
    },
    update: (state, id, text) => {
      state.value = state.value.map((value) => value.id === id ? {...value, text: text} : value)
    },
    toggle: (state, id) =>{
      state.value = state.value.map((value) => value.id === id ? {...value, isCompleted: !value.isCompleted} : value)
    }
  },
});

export const { insert, remove, update, toggle } = TodoReducer.actions;
export const selectCount = (state) => state.todo.value;

export default TodoReducer.reducer;