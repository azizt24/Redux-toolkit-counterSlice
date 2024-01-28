// src/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>add +1</button>
      <button onClick={() => dispatch(decrement())}>remove -1</button>
    </div>
  );
}

export default Counter;
