import React,  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, selectCount } from '../reducers/todoReducer';

function Todo() {
    const count = useSelector(selectCount);
    console.log(count)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementValue = Number(incrementAmount) || 0;
  return (
    <div>
      <div>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Todo;