import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './todoAPI';

const initialState = {
  value: [
    {
      id: 1,
      text: "",
      isCompleted: false
    },
  ],
};

export const insertAsync = createAsyncThunk(
  'todo/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(insertAsync.pending, (state) => {
        console.log("pending")
      })
      .addCase(insertAsync.fulfilled, (state, id) => {
        console.log("fe")
        state.value = state.value.concat({
          id: id.payload.id,
          text: id.payload.text,
          isCompleted: false
        });
      });
  },
});

export const insertIf = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  console.log(currentValue.length)
  if (currentValue.length < 3) {
    dispatch(insert(amount));
  }else{
    alert("최대 입력 칸 초과")
  }
};

export const { insert, remove, update, toggle } = TodoReducer.actions;
export const selectCount = (state) => state.todo.value;

export default TodoReducer.reducer;