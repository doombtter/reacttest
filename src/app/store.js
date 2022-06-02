import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//스토어에는 상태가 들어있다. 하나의 프로젝트는 하나의 스토어만 가질 수 있다.

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
