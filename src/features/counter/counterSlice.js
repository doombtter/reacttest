import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

// 아래 함수는 썽크(thunk)라고 하며 비동기 논리를 수행할 수 있습니다. 그것
// 일반 작업처럼 디스패치할 수 있습니다. `dispatch (incrementAsync (10))`. 이것
// 첫 번째 인수로 `dispatch` 함수를 사용하여 썽크를 호출합니다. 비동기
// 그런 다음 코드를 실행하고 다른 작업을 전달할 수 있습니다. 덩크는
// 일반적으로 비동기 요청을 만드는 데 사용됩니다.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // `reducers` 필드를 사용하면 감속기를 정의하고 관련 작업을 생성할 수 있습니다.
  reducers: {
    increment: (state) => {
      // Redux 툴킷을 사용하면 리듀서에서 "변경" 로직을 작성할 수 있습니다. 그것
      // Immer 라이브러리를 사용하기 때문에 실제로 상태를 변경하지 않습니다.
      // "초안 상태"에 대한 변경을 감지하고 완전히 새로운
      // 변경 사항을 기반으로 한 불변 상태
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
      // PayloadAction 유형을 사용하여 `action.payload`의 내용을 선언합니다.
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  // `extraReducers` 필드는 슬라이스가 다른 곳에서 정의된 작업을 처리하도록 합니다.
  // createAsyncThunk 또는 다른 슬라이스에서 생성된 작업을 포함합니다.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 아래 함수를 선택기라고 하며 다음에서 값을 선택할 수 있습니다.
// 상태. 선택자는 대신 사용되는 인라인으로 정의할 수도 있습니다.
// 슬라이스 파일에서. 예: `useSelector(상태: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;


// 동기화 및 비동기 로직을 ​​모두 포함할 수 있는 손으로 썽크를 작성할 수도 있습니다.
// 다음은 현재 상태를 기반으로 조건부로 작업을 전달하는 예입니다.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
